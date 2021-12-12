package com.revature.ers.services;

import com.revature.ers.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.security.SecureRandom;
import java.util.Date;
import java.util.Optional;
import java.util.Properties;

/**
 * This service handles the emails that are sent to user's upon initial registration and when using the
 * password reset service.
 */

@Service("emailService")
public class EmailService {
    //final String password = System.getenv("PostgresDb_Password");; // correct password for gmail id

    /**
     * Sends an email to the user welcoming them to the Ocean social networking app upon initial registration
     *
     * @param user           first and last name of the user who was registered by the manager
     * @param status         the status to which the email belong
     */
    public static void sendEmail(User user, String status) {
        try {
            final String fromEmail = "noreply.ers.rdc@gmail.com"; //requires valid gmail id
            final String password = "P4ssw0rd!"; // System.getenv("email_password");/// password for gmail id

            String subject = "";
            String body = "";
            String link = "http://localhost:4200";
            String fullName = user.getFirstName() + " " + user.getLastName();
            String toEmail = user.getEmail();

            if (status == "new"){
                subject = "ERS - User Registration Confirmation";
                body = "Hi " + fullName.toUpperCase() + ",\n\n " +
                        "Welcome to Expense Reimbursement System! \n\n" +
                        "This is to confirm that your email address was added to the system. \n\n" +
                        "Please click below to login \n\n" +
                        "LINK: " + link;
            }
            else if (status == "forgot") {
                subject = "ERS - Forgot Password Confirmation";
                body = "Hello," + "\n\n " +
                        "This is to confirm that you have successfully reset your password. \n\n" +
                        "New Password: " + user.getPassword() + "\n\n" +
                        "We recommend changing your password again after login in.\n\n"+
                        "Thank you and have a great day!";
            }
            else if (status == "reset") {
                subject = "ERS - Reset Password Confirmation";
                body = "Hi " + fullName.toUpperCase() + ",\n\n " +
                        "This is to confirm that you have successfully updated your password. \n\n" +
                        "Click the link to login: " + link;
            }
            else if (status == "update") {
                subject = "ERS - Update Profile Confirmation";
                body = "Hi " + fullName.toUpperCase() + ",\n\n " +
                        "This is to confirm that you have successfully updated your profile \n\n" +
                        "Click the link to view your profile: " + link ;
            }

            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
            props.put("mail.smtp.port", "587"); //TLS Port
            props.put("mail.smtp.auth", "true"); //enable authentication
            props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS

            //create Authenticator object to pass in Session.getInstance argument
            Authenticator auth = new Authenticator() {
                //override the getPasswordAuthentication method
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, password);
                }
            };

            Session session = Session.getInstance(props, auth);
            MimeMessage msg = new MimeMessage(session);

            msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
            msg.addHeader("format", "flowed");
            msg.addHeader("Content-Transfer-Encoding", "8bit");
            msg.setSubject(subject, "UTF-8");
            msg.setText(body, "UTF-8");
            msg.setSentDate(new Date());
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail, false));

            Transport.send(msg);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
