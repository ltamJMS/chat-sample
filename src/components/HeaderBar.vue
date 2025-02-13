<template>
  <header class="h-12 border-b flex items-center px-4 justify-between relative">
    <!-- Dropdown chọn model (bên trái) -->
    <div class="flex items-center gap-2 relative">
      <div class="cursor-pointer flex items-center gap-1 dropdown-container" @click="toggleModelDropdown">
        <span class="text-gray-600 mr-2">{{ selectedModel.title }}</span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="w-3 h-3 text-gray-600" />
      </div>
      <!-- Danh sách model dropdown -->
      <div v-if="showModelDropdown"
        class="absolute top-full left-0 mt-1 bg-white border rounded-2xl shadow-md z-10 w-80 px-2 py-1">
        <!-- Tiêu đề dropdown -->
        <div class="px-3 py-2 text-xs text-gray-500">Mô hình</div>
        <ul>
          <li v-for="(model, index) in models" :key="index" @click="selectModel(model)"
            class="px-5 py-3 hover:bg-gray-100 cursor-pointer">
            <div class="text-base">{{ model.title }}</div>
            <div class="text-sm text-gray-500 whitespace-pre-line">{{ model.description }}</div>
          </li>
        </ul>
        <!-- Toggle ở cuối dropdown -->
        <div class="px-5 py-3 border-t flex items-center justify-between">
          <span class="text-base text-gray-700">Đoạn Chat Tạm thời</span>
          <label class="switch">
            <input type="checkbox" v-model="isChatTemporary" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- Các nút bên phải -->
    <div class="flex flex-row items-center justify-center space-x-2">
      <button ref="shareButton"
        class="flex items-center space-x-2 px-4 py-2 bg-transparent border border-gray-300 rounded-full hover:bg-gray-300">
        <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" class="text-gray-600 w-3 h-3" />
        <span class="text-sm text-gray-600 font-medium">Chia sẻ</span>
      </button>

      <!-- Profile với dropdown -->
      <div class="relative" ref="profileContainer">
        <button @click.stop="toggleProfileDropdown" class="flex items-center justify-center px-2 text-sm space-x-3">
          <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
            <img src="/images/fpt.png" alt="Profile" class="w-full h-full object-cover" />
          </div>
        </button>
        <!-- Dropdown profile -->
        <div v-if="showProfileDropdown"
          class="absolute right-0 top-full mt-2 w-80 bg-white border rounded-2xl shadow-md z-20">
          <div class="flex flex-row justify-between items-center px-4 py-4 mx-2 mt-2">
            <span class="text-sm text-gray-600">chungletrong17@gmail.com</span>
            <font-awesome-icon :icon="['fas', 'plus']" class="w-3 h-3 text-gray-500 mr-2" />
          </div>
          <div class="py-2">
            <!-- Section 1: Workspace -->
            <div class="mb-2 border-t pt-2 mx-2">
              <ul>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'building']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>ABC</span>
                </li>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'user']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Tài khoản cá nhân</span>
                </li>
              </ul>
            </div>
            <!-- Section 2: Quản lý -->
            <div class="mb-2 border-t pt-2 mx-2">
              <ul>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'layer-group']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Quản lý không gian làm việc</span>
                </li>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'tasks']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Nhiệm vụ</span>
                </li>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'robot']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>GPT của tôi</span>
                </li>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'sliders-h']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Tùy chỉnh ChatGPT</span>
                </li>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'cog']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Cài đặt</span>
                </li>
              </ul>
            </div>
            <!-- Section 3: Khác -->
            <div class="mb-2 border-t pt-2 mx-2">
              <ul>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'user-plus']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Thêm đồng nghiệp</span>
                </li>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Tải tiện ích tìm kiếm cho ChatGPT</span>
                </li>
              </ul>
            </div>
            <!-- Section 4: Đăng xuất -->
            <div class="border-t pt-1 mx-2">
              <ul>
                <li class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2 rounded">
                  <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="w-4 h-4 text-gray-500 mr-2" />
                  <span>Đăng xuất</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "HeaderBar",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    // Dropdown model
    const showModelDropdown = ref(false);
    const models = ref([
      {
        title: "GPT-4o",
        description: "Hữu ích cho hầu hết câu hỏi",
      },
      {
        title: "GPT-4o với nhiệm vụ theo lịch",
        description: "Yêu cầu ChatGPT theo dõi lại sau",
      },
      {
        title: "ChatGPT o1",
        description: "Sử dụng khả năng suy luận nâng cao",
      },
      {
        title: "ChatGPT o3-mini",
        description: "Suy luận nâng cao nhanh chóng",
      },
      {
        title: "ChatGPT o3-mini-high",
        description: "Hữu ích khi viết code và logic\nNhiều mô hình hơn",
      },
    ]);
    const selectedModel = ref(models.value[4]);
    const isChatTemporary = ref(false);
    const toggleModelDropdown = (event) => {
      showModelDropdown.value = !showModelDropdown.value;
      event.stopPropagation();
    };
    const selectModel = (model) => {
      selectedModel.value = model;
      showModelDropdown.value = false;
    };

    const shareButton = ref(null);
    const showProfileDropdown = ref(false);
    const profileContainer = ref(null);
    const toggleProfileDropdown = () => {
      showProfileDropdown.value = !showProfileDropdown.value;
    };

    // click ngoài để đóng các dropdown
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        showModelDropdown.value = false;
      }
      if (profileContainer.value && !profileContainer.value.contains(event.target)) {
        showProfileDropdown.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      if (shareButton.value) {
        tippy(shareButton.value, {
          content: "Chia sẻ",
          placement: "top",
        });
      }
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      showModelDropdown,
      models,
      selectedModel,
      isChatTemporary,
      toggleModelDropdown,
      selectModel,
      shareButton,
      showProfileDropdown,
      profileContainer,
      toggleProfileDropdown,
    };
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked+.slider {
  background-color: #2196f3;
}

input:checked+.slider:before {
  transform: translateX(20px);
}
</style>
