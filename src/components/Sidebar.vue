<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flex flex-col bg-gray-50 transition-all duration-300"
    :class="{ 'w-1/6': !isCollapsed, 'w-16': isCollapsed }"
  >
    <!-- Header với nút Collapse, Search, Create Chat -->
    <div class="p-3 flex items-center justify-between shadow-sm">
      <!-- Nút Collapse (Bên trái) -->
      <button
        ref="tooltipCollapse"
        class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
        @click="toggleSidebar"
      >
        <font-awesome-icon
          :icon="['fas', isCollapsed ? 'chevron-right' : 'bars']"
          class="text-gray-600 w-4 h-4"
        />
      </button>

      <!-- Nút Search + Create Chat (Bên phải) -->
      <div v-if="!isCollapsed" class="flex items-center">
        <button
          ref="tooltipSearch"
          class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
        >
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="text-gray-600 w-4 h-4"
          />
        </button>

        <button
          ref="tooltipCreateChat"
          class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
        >
          <font-awesome-icon
            :icon="['fas', 'pen-to-square']"
            class="text-gray-600 w-4 h-4"
          />
        </button>
      </div>
    </div>

    <!-- Danh sách Chat -->
    <div v-if="!isCollapsed" class="flex-1 overflow-y-auto p-2 space-y-2">
      <!-- ChatGPT -->
      <button
        class="w-full justify-start px-2 text-sm flex items-center space-x-3 truncate"
        :class="{ 'justify-center': isCollapsed }"
      >
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden"
        >
          <img
            src="/images/chatgpt.png"
            alt="ChatGPT"
            class="w-full h-full object-cover"
          />
        </div>
        <span>ChatGPT</span>
      </button>

      <!-- SORA -->
      <button
        class="w-full justify-start px-2 text-sm flex items-center space-x-3 truncate"
        :class="{ 'justify-center': isCollapsed }"
      >
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden"
        >
          <img
            src="/images/sora.png"
            alt="SORA"
            class="w-full h-full object-cover"
          />
        </div>
        <span>SORA</span>
      </button>

      <!-- Khám phá GPT -->
      <button
        class="w-full justify-start px-2 text-sm flex items-center space-x-3 truncate"
        :class="{ 'justify-center': isCollapsed }"
      >
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
          <font-awesome-icon
            :icon="['fas', 'registered']"
            class="text-gray-400 w-4 h-4"
          />
        </div>
        <span>Khám phá GPT</span>
      </button>

      <!-- Dự án -->
      <div class="pt-4 pb-2 px-2 text-xs font-medium">Dự án</div>
      <button
        ref="tooltipNewProject"
        class="w-full justify-start text-sm px-2 py-1 rounded flex items-center space-x-2 hover:bg-gray-100 truncate"
      >
        <font-awesome-icon
          :icon="['fas', 'folder-open']"
          class="text-gray-600 w-4 h-4"
        />
        <span>Dự án mới</span>
      </button>

      <!-- Hôm nay -->
      <div class="pt-4 pb-2 px-2 text-xs font-medium">Hôm nay</div>
      <div class="space-y-2">
        <div
          v-for="(item, index) in 100"
          :key="'today-' + index"
          class="relative"
        >
          <button
            class="w-full justify-between text-sm px-2 py-1 flex items-center truncate"
            :class="{
              'bg-gray-300': selectedIndex === index,
              'hover:bg-gray-100': selectedIndex !== index
            }"
            @click="selectItem(index)"
          >
            <span class="truncate">Chat History Item {{ index + 1 }}</span>
            <div
              @click.stop="toggleDropdown(index)"
              class="w-6 h-6 flex items-center justify-center"
            >
              <font-awesome-icon
                :icon="['fas', 'ellipsis']"
                class="text-gray-400 w-4 h-4"
              />
            </div>
          </button>

          <!-- Dropdown -->
          <div
            v-if="openDropdown === index"
            class="absolute right-0 mt-1 w-40 bg-white border rounded shadow-lg z-10"
            @click.stop
          >
            <button
              class="block w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-gray-100 text-sm"
              @click="shareItem(index)"
            >
              <font-awesome-icon
                :icon="['fas', 'share']"
                class="text-gray-500 w-3 h-3"
              />
              <span>Chia sẻ</span>
            </button>

            <button
              class="block w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-gray-100 text-sm"
              @click="renameItem(index)"
            >
              <font-awesome-icon
                :icon="['fas', 'pen']"
                class="text-gray-500 w-3 h-3"
              />
              <span>Đổi tên</span>
            </button>

            <button
              class="block w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-gray-100 text-sm"
              @click="archiveItem(index)"
            >
              <font-awesome-icon
                :icon="['fas', 'box-archive']"
                class="text-gray-500 w-3 h-3"
              />
              <span>Lưu trữ</span>
            </button>

            <button
              class="block w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-red-100 text-sm text-red-500"
              @click="deleteItem(index)"
            >
              <font-awesome-icon
                :icon="['fas', 'trash']"
                class="text-red-500 w-3 h-3"
              />
              <span>Xóa</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div v-if="!isCollapsed" class="flex items-center border-t p-3">
      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
        <font-awesome-icon :icon="['fas', 'envelope-open']" class="text-gray-600 w-4 h-4" />
      </div>
      <button
        ref="tooltipAddColleague"
        class="w-full justify-start px-2 py-1 text-sm flex items-center space-x-3"
      >
        <div class="text-left w-full">
          <p class="text-sm truncate">Thêm đồng nghiệp</p>
          <p class="text-xs text-gray-400 mt-1 truncate">Mời thành viên vào không gian làm việc ABC</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  data() {
    return {
      openDropdown: null, // Lưu trạng thái dropdown nào đang mở
      selectedIndex: null, // Lưu trạng thái index được chọn
      isCollapsed: false, // Trạng thái sidebar có bị thu gọn hay không
    };
  },
  methods: {
    toggleDropdown(index) {
      console.log("Click More button at index:", index);
      this.openDropdown = this.openDropdown === index ? null : index;
    },
    closeDropdown() {
      this.openDropdown = null;
    },
    selectItem(index) {
      this.selectedIndex = index;
      console.log("Selected item:", index);
    },
    shareItem(index) {
      alert(`Chia sẻ mục ${index + 1}`);
      this.closeDropdown();
    },
    renameItem(index) {
      alert(`Đổi tên mục ${index + 1}`);
      this.closeDropdown();
    },
    archiveItem(index) {
      alert(`Lưu trữ mục ${index + 1}`);
      this.closeDropdown();
    },
    deleteItem(index) {
      alert(`Xóa mục ${index + 1}`);
      this.closeDropdown();
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);

    tippy(this.$refs.tooltipCollapse, {
      content: "Thu gọn / Mở rộng Sidebar",
      placement: "right",
    });

    if (this.$refs.tooltipSearch) {
      tippy(this.$refs.tooltipSearch, {
        content: "Tìm kiếm",
        placement: "bottom",
      });
    }
    if (this.$refs.tooltipCreateChat) {
      tippy(this.$refs.tooltipCreateChat, {
        content: "Tạo cuộc trò chuyện",
        placement: "bottom",
      });
    }

    tippy(this.$refs.tooltipNewProject, {
      content: "Tạo dự án mới",
      placement: "right",
    });

    tippy(this.$refs.tooltipAddColleague, {
      content: "Thêm đồng nghiệp",
      placement: "right",
    });
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
