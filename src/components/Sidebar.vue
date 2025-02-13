<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-r flex flex-col bg-gray-50 transition-all duration-300"
    :class="{ 'w-1/6': !isCollapsed, 'w-16': isCollapsed }">
    <!-- Header với nút Collapse, Search, Create Chat -->
    <div class="p-3 flex items-center justify-between border-b">
      <!-- Nút Collapse (Bên trái) -->
      <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100" @click="toggleSidebar">
        <font-awesome-icon :icon="['fas', isCollapsed ? 'chevron-right' : 'bars']" class="text-gray-600 w-4 h-4" />
      </button>

      <!-- Nút Search + Create Chat (Bên phải) -->
      <div v-if="!isCollapsed" class="flex items-center">
        <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-gray-600 w-4 h-4" />
        </button>

        <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
          <font-awesome-icon :icon="['fas', 'pen-to-square']" class="text-gray-600 w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Danh sách Chat -->
    <div v-if="!isCollapsed" class="flex-1 overflow-y-auto p-2 space-y-2">
      <!-- ChatGPT -->
      <button class="w-full justify-start px-2 text-sm flex items-center space-x-3"
        :class="{ 'justify-center': isCollapsed }">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
          <img src="/images/chatgpt.png" alt="ChatGPT" class="w-full h-full object-cover" />
        </div>
        <span>ChatGPT</span>
      </button>

      <!-- SORA -->
      <button class="w-full justify-start px-2 text-sm flex items-center space-x-3"
        :class="{ 'justify-center': isCollapsed }">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
          <img src="/images/sora.png" alt="SORA" class="w-full h-full object-cover" />
        </div>
        <span>SORA</span>
      </button>

      <!-- Khám phá GPT -->
      <button class="w-full justify-start px-2 text-sm flex items-center space-x-3"
        :class="{ 'justify-center': isCollapsed }">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
          <font-awesome-icon :icon="['fas', 'registered']" class="text-gray-400 w-4 h-4" />
        </div>
        <span>Khám phá GPT</span>
      </button>

      <!-- Dự án -->
      <div class="pt-4 pb-2 px-2 text-xs font-medium">Dự án</div>
      <button class="w-full justify-start text-sm px-2 py-1 rounded flex items-center space-x-2 hover:bg-gray-100">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="text-gray-600 w-4 h-4" />
        <span>Dự án mới</span>
      </button>

      <!-- Hôm nay -->
      <div class="pt-4 pb-2 px-2 text-xs font-medium">Hôm nay</div>
      <div class="space-y-2">
        <div v-for="(item, index) in 100" :key="'today-' + index" class="relative">
          <button class="w-full justify-between text-sm px-2 py-1 flex items-center truncate"
            :class="{ 'bg-gray-300': selectedIndex === index, 'hover:bg-gray-100': selectedIndex !== index }"
            @click="selectItem(index)">
            <span class="truncate">Chat History Item {{ index + 1 }}</span>
            <div @click.stop="toggleDropdown(index)" class="w-6 h-6 flex items-center justify-center">
              <font-awesome-icon :icon="['fas', 'ellipsis']" class="text-gray-400 w-4 h-4" />
            </div>
          </button>

          <!-- Dropdown -->
          <div v-if="openDropdown === index" class="absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-10"
            @click.stop>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="shareItem(index)">Chia
              sẻ</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="renameItem(index)">Đổi
              tên</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="archiveItem(index)">Lưu
              trữ</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-red-100 text-sm text-red-500"
              @click="deleteItem(index)">Xóa</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div v-if="!isCollapsed" class="flex items-center border-t p-3">
      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
        <font-awesome-icon :icon="['fas', 'envelope-open']" class="text-gray-600 w-4 h-4" />
      </div>
      <button class="w-full justify-start px-2 py-1 text-sm flex items-center space-x-3">
        <div class="text-left">
          <p class="text-sm">Thêm đồng nghiệp</p>
          <p class="text-xs text-gray-400 mt-1">Mời thành viên vào không gian làm việc ABC</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
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
    // Lắng nghe sự kiện click ra ngoài để đóng dropdown
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
