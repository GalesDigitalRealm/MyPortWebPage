import { useState } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
//import emailjs from "@emailjs/browser";

const contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const serviceId = "service_y8k051s";
  //   const templateId = "template_7owx328";
  //   const publicKey = "BenRQg_Ef8wg1Gkks";

  //   const templateParam = {
  //     from_name: name,
  //     from_email: email,
  //     to_name: "eman",
  //     message: message,
  //   };

  //   emailjs.send(serviceId, templateId, templateParam,publicKey)
  //   .then((response) => {
  //     console.log('Email sent successfully', response);
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   })
  //   .catch((error) => {
  //     console.error('errr', error)
  //   });
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>josegales@gmail.com</h5>
            <a href="mailto:josegales885@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiFacebookCircleLine className="contact__option-icon" />
            <h4>Facebool</h4>
            <h5>emangales.com</h5>
            <a href="https://www.facebook.com/eman.gales.77" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
