const botMessagesPool = [
  "Xin chào! Rất vui được gặp bạn.",
  "Chào bạn, mình ở đây để hỗ trợ bạn.",
  "Tôi có thể giúp gì cho bạn?",
  "Mong bạn có một ngày tốt lành!",
  "Chào mừng bạn đến với dịch vụ của chúng tôi.",
  "Bạn cần hỗ trợ về vấn đề gì?",
  "Hãy cho tôi biết nhu cầu của bạn."
];

const userMessagesPool = [
  "Chào bot, tôi cần hỗ trợ.",
  "Tôi muốn hỏi về dịch vụ của bạn.",
  "Cảm ơn, tôi đang gặp vấn đề.",
  "Xin chào, bạn có thể giúp tôi không?",
  "Mình có chút thắc mắc.",
  "Làm ơn cho tôi biết thêm chi tiết.",
  "Tôi không hiểu lắm, bạn giải thích thêm được không?"
];

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const dataFake = Array.from({ length: 100 }, (_, index) => {
  // Số tin nhắn ngẫu nhiên từ 3 đến 7 cho mỗi phiên chat
  const count = Math.floor(Math.random() * 5) + 3;
  const messages = [];

  for (let i = 0; i < count; i++) {
    // Xen kẽ tin nhắn giữa bot và user
    messages.push({
      sender: i % 2 === 0 ? "bot" : "user",
      text: i % 2 === 0 ? randomFrom(botMessagesPool) : randomFrom(userMessagesPool)
    });
  }

  return {
    id: index + 1,
    title: `Lịch sử chat ${index + 1}`,
    messages
  };
});
