const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(cors());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1,
});

app.use(bodyParser.json());

app.post("/send-message", limiter, async (req, res) => {
  try {
    const { username, email, phonenumber } = req.body;

    const text = `Имя: ${username}\nПочта: ${email}\nТелефон: ${phonenumber}`;

    const TelegramBotToken = "6624470838:AAH25_vATb_RkmxpHq6ZAyqE25snmwprrwo";
    const TelegramChatId = "-4024471935";

    await axios.post(
      `https://api.telegram.org/bot${TelegramBotToken}/sendMessage`,
      {
        chat_id: TelegramChatId,
        text,
      }
    );

    res.status(200).json({ message: "Заявка успешно отправлена!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Произошла ошибка при отправке сообщения." });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
