import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]; // Ensure this is an array of objects

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient, // This should be an array of objects
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response); // Fixed typo: "console.Log" -> "console.log"
    } catch (error) {
        throw new Error(`Error sending Email: ${error}`);
    }
};
