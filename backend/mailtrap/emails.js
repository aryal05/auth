
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
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


export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];
   

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        });
        console.log('Password reset email sent:', response);
    } catch (error) {
        throw new Error(`Error sending password reset email: ${error.message}`);
    }
};

export const sendResetSuccessEmail = async(email)=>{
    const recipient = [{email}]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Password Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        });
        console.log('Password reset SUCCESS email:', response);
    } catch (error) {
        throw new Error(`Error sending password reset SUCCESS email: ${error.message}`);
    }

}