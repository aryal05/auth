import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv"
// dotenv.config();


const TOKEN = "5b729e2bd05f313323f60b33b3d2cb75";

export const mailtrapClient= new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
