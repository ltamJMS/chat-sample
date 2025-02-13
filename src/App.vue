<template>
  <div class="h-screen bg-white flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <HeaderBar />
      <div class="flex-1 p-4 overflow-y-auto">
        <ChatDisplay :messages="messages" />
      </div>
      <div class="p-4">
        <MessageInput @send="handleSendMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import HeaderBar from "./components/HeaderBar.vue";
import ChatDisplay from "./components/ChatDisplay.vue";
import MessageInput from "./components/MessageInput.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    HeaderBar,
    ChatDisplay,
    MessageInput,
  },
  setup() {
    const messages = ref([]);

    // Mảng chứa các tin nhắn của bot
    const botMessages = [
      "Xin chào! Rất vui được gặp bạn. Bạn cần hỗ trợ gì hôm nay?",
      "Chào bạn, tôi có thể giúp bạn giải đáp thắc mắc hoặc tư vấn sản phẩm. Hãy cho tôi biết bạn cần gì nhé!",
      "Hello! I'm here to assist you. Feel free to ask any questions you may have.",
      "Hi there! If you have any concerns or inquiries, just let me know and I'll be happy to help.",
      "Greetings! How can I be of service today? Your satisfaction is my priority.",
      "Xin chào, bạn có thể cho tôi biết thêm chi tiết về vấn đề bạn gặp phải không?",
      "Chào bạn, đừng ngần ngại chia sẻ, tôi sẵn sàng hỗ trợ bạn mọi lúc.",
      "Hello, could you please provide more details so I can better assist you?",
      "Hi, feel free to explain your issue further. I'm here to help!",
      "こんにちは！今日はどのようなお手伝いをしましょうか？",
      "もしもし、何かご不明な点があればお知らせください。",
      "お客様のご質問に迅速に対応いたします。何かご相談はありますか？",
      "ご用件を詳しく教えていただければ、より良いサポートが可能です。",
      "どのようなことでも結構ですので、お気軽にお尋ねください。",
      "Xin chào, hãy cùng khám phá giải pháp tối ưu cho vấn đề của bạn!",
      "Chào bạn, luôn có những giải pháp hữu ích cho mọi vấn đề. Hãy cùng tìm hiểu nhé!",
      "Hello! Let's explore the best solutions for your queries together.",
      "Hi, I'm excited to help you resolve any issues. Tell me more about what's on your mind.",
      "Greetings! Your questions matter. I'm here to provide answers and support.",
      "Xin chào, tôi luôn nỗ lực để mang lại trải nghiệm tốt nhất cho bạn. Có điều gì cần giúp đỡ không?",
      "Chào bạn, tôi sẵn sàng hỗ trợ bạn 24/7. Hãy để tôi giúp bạn tìm ra giải pháp!"
    ];

    const handleSendMessage = (msg) => {
      // Gửi tin nhắn từ người dùng
      messages.value.push({ text: msg, sender: "user" });
      
      // Chọn ngẫu nhiên 1 tin nhắn trong mảng botMessages
      const randomIndex = Math.floor(Math.random() * botMessages.length);
      const randomBotMessage = botMessages[randomIndex];
      
      // Gửi tin nhắn từ bot
      messages.value.push({
        text: randomBotMessage,
        sender: "bot",
      });
    };

    return {
      messages,
      handleSendMessage,
    };
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
