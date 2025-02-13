<template>
  <header class="h-12 border-b flex items-center px-4 justify-between relative">
    <!-- Dropdown chọn model (bên trái) -->
    <div class="flex items-center gap-2 relative">
      <div
        class="cursor-pointer flex items-center gap-1 dropdown-container"
        @click="toggleModelDropdown"
      >
        <span class="text-gray-600 mr-2">{{ selectedModel.title }}</span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="w-3 h-3 text-gray-600" />
      </div>
      <!-- Danh sách model dropdown -->
      <div
        v-if="showModelDropdown"
        class="absolute top-full left-0 mt-1 bg-white border rounded-2xl shadow-md z-10 w-80 px-2 py-1"
      >
        <!-- Tiêu đề dropdown -->
        <div class="px-3 py-2 text-xs text-gray-500">Mô hình</div>
        <ul>
          <li
            v-for="(model, index) in models"
            :key="index"
            @click="selectModel(model)"
            class="px-5 py-3 hover:bg-gray-100 cursor-pointer"
          >
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
      <!-- Nút "Chia sẻ" có tooltip -->
      <button
        ref="shareButton"
        class="flex items-center space-x-2 px-4 py-2 bg-transparent border border-gray-300 rounded-full hover:bg-gray-300"
      >
        <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" class="text-gray-600 w-3 h-3" />
        <span class="text-sm text-gray-600 font-medium">Chia sẻ</span>
      </button>

      <!-- Profile (ảnh fpt.png) với dropdown -->
      <div class="relative" ref="profileContainer">
        <button
          @click.stop="toggleProfileDropdown"
          class="flex items-center justify-center px-2 text-sm space-x-3"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden"
          >
            <img
              src="/images/fpt.png"
              alt="Profile"
              class="w-full h-full object-cover"
            />
          </div>
        </button>
        <!-- Dropdown profile -->
        <div
          v-if="showProfileDropdown"
          class="absolute right-0 top-full mt-2 w-64 bg-white border rounded-2xl shadow-md z-20"
        >
          <!-- Tiêu đề (Email) -->
          <div class="px-4 py-3 border-b">
            <span class="text-sm font-medium text-gray-700">chungletrong17@gmail.com</span>
          </div>
          <!-- Section 1: Workspace -->
          <div class="px-4 py-2">
            <div class="mb-2">
              <div class="text-xs text-gray-500 mb-1">Workspace</div>
              <ul>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">workspace 1</li>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">workspace 2</li>
              </ul>
            </div>
            <!-- Section 2: Quản lý -->
            <div class="mb-2 border-t pt-2">
              <ul>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">Quản lý không gian làm việc</li>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">Nhiệm vụ</li>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">GPT của tôi</li>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">Tùy chỉnh ChatGPT</li>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">Cài đặt</li>
              </ul>
            </div>
            <!-- Section 3: Khác -->
            <div class="mb-2 border-t pt-2">
              <ul>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">Thêm đồng nghiệp</li>
                <li class="py-1 hover:bg-gray-100 cursor-pointer">Tải tiện ích tìm kiếm cho ChatGPT</li>
              </ul>
            </div>
            <!-- Section 4: Đăng xuất -->
            <div class="border-t pt-2">
              <ul>
                <li class="py-1 hover:bg-gray-100 cursor-pointer text-red-600">Đăng xuất</li>
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
        title: "GPT-40",
        description: "Hữu ích cho hầu hết câu hỏi",
      },
      {
        title: "GPT-4o với nhiệm vụ theo lịch BETA",
        description: "Yêu cầu ChatGPT theo dõi lại sau",
      },
      {
        title: "o1",
        description: "Sử dụng khả năng suy luận nâng cao",
      },
      {
        title: "o3-mini",
        description: "Suy luận nâng cao nhanh chóng",
      },
      {
        title: "03-mini-high",
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

    // Tooltip cho nút "Chia sẻ"
    const shareButton = ref(null);
    // Dropdown profile (ảnh fpt.png)
    const showProfileDropdown = ref(false);
    const profileContainer = ref(null);
    const toggleProfileDropdown = () => {
      showProfileDropdown.value = !showProfileDropdown.value;
    };

    // Xử lý click ngoài để đóng các dropdown
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
      // Khởi tạo tooltip cho nút "Chia sẻ"
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
/* Style cho toggle switch */
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
input:checked + .slider {
  background-color: #2196f3;
}
input:checked + .slider:before {
  transform: translateX(20px);
}
</style>
