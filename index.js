const TelegramBot = require("node-telegram-bot-api");
const token = "5873987271:AAHcVyoqZydkTN0SdeeUrrGgl7l9oSN35Vg";
const filter = require("./filter");
const bot = new TelegramBot(token, { polling: true });

const start = async () => {
  bot.on("message", (msg) => {
    text = msg.text.toLowerCase();
    console.log(msg);
    value = filter(text);
    console.log(value);
    if (value) {
      bot.forwardMessage("user_id", msg.chat.id, msg.message_id);
    }
  });
  bot.on("polling_error", console.log);
};

start();
