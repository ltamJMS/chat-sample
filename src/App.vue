<!-- App.vue -->
<template>
  <div class="h-screen bg-white flex">
    <Sidebar @selectHistory="handleSelectHistory" />
    <div class="flex-1 flex flex-col">
      <HeaderBar />
      <div class="flex-1 p-4 overflow-y-auto">
        <router-view></router-view>
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

    const botMessages = [
      "Xin chào! Rất vui được gặp bạn hôm nay. Mình rất mong muốn hỗ trợ bạn. Bạn cần tìm kiếm thông tin hay yêu cầu hỗ trợ gì đặc biệt không?",
      "Chào bạn, mình ở đây để giúp bạn giải đáp mọi thắc mắc hoặc tư vấn về các sản phẩm mà bạn đang quan tâm. Hãy chia sẻ với mình bạn đang cần gì nhé!",
      "Xin chào, bạn có thể cho mình biết thêm chi tiết về vấn đề bạn đang gặp phải không? Việc hiểu rõ hơn sẽ giúp mình hỗ trợ bạn tốt nhất có thể.",
      "Chào bạn, đừng ngần ngại chia sẻ bất kỳ điều gì đang khiến bạn băn khoăn. Mình sẵn sàng lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi.",
      "Xin chào, hãy cùng nhau khám phá những giải pháp tối ưu cho những vấn đề mà bạn đang gặp phải! Mình rất mong muốn giúp bạn vượt qua chúng.",
      "Chào bạn, luôn có những giải pháp hữu ích và phù hợp cho mọi vấn đề. Hãy cùng mình tìm hiểu các phương án tốt nhất nhé!",
      "Hello! Let's work together to explore the best solutions for any queries you might have. Your concerns are important to us.",
      "Hi, I'm really excited to help you resolve any issues you're facing. Please tell me more about what's on your mind so I can assist you effectively.",
      "Xin chào, tôi luôn nỗ lực để mang lại trải nghiệm tốt nhất có thể cho bạn. Nếu có điều gì bạn cần giúp đỡ hoặc thắc mắc, đừng ngần ngại nhé.",
      "Chào bạn, mình luôn sẵn sàng hết mình để hỗ trợ bạn 24/7. Hãy để mình giúp bạn tìm ra giải pháp tối ưu nhất cho những vấn đề của bạn!"
    ];

    const handleSendMessage = (msg) => {
      messages.value.push({ text: msg, sender: "user" });
      
      const randomIndex = Math.floor(Math.random() * botMessages.length);
      const randomBotMessage = botMessages[randomIndex];

      const botMessage = { text: "", sender: "bot", isTyping: true };
      messages.value.push(botMessage);

      setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          currentIndex++;
          botMessage.text = randomBotMessage.slice(0, currentIndex);
          messages.value = [...messages.value];
          if (currentIndex >= randomBotMessage.length) {
            clearInterval(interval);
            botMessage.isTyping = false;
            messages.value = [...messages.value];
          }
        }, 20);
      }, 100);
    };

    const handleSelectHistory = (selectedMessages) => {
      messages.value = selectedMessages;
    };

    return {
      messages,
      handleSendMessage,
      handleSelectHistory,
    };
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
