<template>
  <header class="h-12 border-b flex items-center px-4 justify-between relative">
    <!-- Dropdown chọn model -->
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
            <input type="checkbox" v-model="isChatTemporary">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- Các nút bên phải trong header -->
    <div class="flex flex-row items-center justify-center space-x-2">
      <button
        class="flex items-center space-x-2 px-4 py-2 bg-transparent border border-gray-300 rounded-full hover:bg-gray-300"
      >
        <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" class="text-gray-600 w-3 h-3" />
        <span class="text-sm text-gray-600 font-medium">Chia sẻ</span>
      </button>
      <button
        class="flex items-center justify-start px-2 text-sm space-x-3 truncate"
      >
        <div
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden"
        >
          <img
            src="/images/fpt.png"
            alt="ChatGPT"
            class="w-full h-full object-cover"
          />
        </div>
      </button>
    </div>
  </header>
</template>


<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "HeaderBar",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    // Quản lý trạng thái hiển thị dropdown
    const showModelDropdown = ref(false);

    // Mảng các model (mỗi option có title và description)
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
        title: "o1",
        description: "Sử dụng khả năng suy luận nâng cao",
      },
      {
        title: "o3-mini",
        description: "Suy luận nâng cao nhanh chóng",
      },
      {
        title: "ChatGPT o3-mini-high",
        description: "Hữu ích khi viết code và logic",
      },
    ]);

    // Chọn model mặc định là option cuối cùng (có thể thay đổi theo yêu cầu)
    const selectedModel = ref(models.value[4]);

    // Trạng thái của toggle "Đoạn Chat Tạm thời"
    const isChatTemporary = ref(false);

    // Hàm mở/đóng dropdown
    const toggleModelDropdown = (event) => {
      showModelDropdown.value = !showModelDropdown.value;
      // Ngăn sự kiện click lan ra ngoài để không đóng ngay dropdown
      event.stopPropagation();
    };

    // Khi chọn 1 model, cập nhật giá trị và đóng dropdown
    const selectModel = (model) => {
      selectedModel.value = model;
      showModelDropdown.value = false;
    };

    // Đóng dropdown khi click ra ngoài vùng dropdown
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        showModelDropdown.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
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

input:checked+.slider {
  background-color: #2196f3;
}

input:checked+.slider:before {
  transform: translateX(20px);
}
</style>
