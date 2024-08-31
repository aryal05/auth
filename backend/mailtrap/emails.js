import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]; // Correct recipient format

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response); // Log success
    } catch (error) {
        throw new Error(`Error sending Email: ${error}`);
    }
};

export const sendWelcomeEmail = async(email, name) => {
    const recipient = [{ email }]; // Correct recipient format

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "786c68a2-674e-4d88-837b-ced80c48e6d2",
            template_variables: {
                "company_info_name": "Auth Company",
                "name": name,
            },
        });
        console.log("Email sent successfully", response); // Log success
    } catch (error) {
        throw new Error(`Error sending welcome email: ${error}`);
    }
};
