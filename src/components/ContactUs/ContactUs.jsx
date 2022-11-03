import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSpinner3 } from "react-icons/im";
import contact from "../../assets/contact.png";
import { TfiLocationPin } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { GoMailRead } from "react-icons/go";
import "./ContactUs.css";
const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    function clearFields() {
      e.target.user_name.value = "";
      e.target.user_email.value = "";
      e.target.user_phone.value = "";
      e.target.message.value = "";
    }
    e.preventDefault();
    let username = e.target.user_name.value;
    let email = e.target.user_email.value;
    let message = e.target.message.value;
    if (username.length < 3 || email.length < 3 || message.length < 5) {
      console.log("less");
      clearFields();

      toast.error("Please Enter Valid Data", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "dark",
      });
      setLoading(false);
    } else {
      emailjs
        .sendForm(
          "service_pyfj7j1",
          "template_950cngu",
          form.current,
          "yg3mqdOh-7OYHfCLy"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);

            clearFields();
            toast.success("Message Sent SucessFully", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: 0,
              theme: "dark",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <section id="contact">
        <img src={contact} alt="" />
        <div className="contactContent">
          <div className="left">
            <h3>Contact Us</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name*"
                minLength="3"
                name="user_name"
              />
              <input type="email" name="user_email" placeholder="Your Email*" />
              <input type="text" name="user_phone" placeholder="Your Phone*" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <div className="outer__button button__left-right">
                <button
                  type="submit"
                  className="text contactBtn"
                  disabled={loading}
                >
                  Send Message
                  {loading && <ImSpinner3 className="spinner" />}
                </button>
              </div>
            </form>
          </div>

          <div className="right">
            <h4 className="footerHeading">Visit Our Company</h4>
            <div className="box location">
              <span className="icon">
                <TfiLocationPin />
              </span>
              <div className="ContactContent">
                <h4>CoinDone Pvt.</h4>
                <p>
                  ICO Crypto Ltd Dolfin RD, 23/A New Market, South Zone Sandigo,
                  Dubai.
                </p>
              </div>
            </div>
            <div className="box call">
              <span className="icon">
                <TbPhoneCall />
              </span>
              <div className="ContactContent">
                <h4>Telephone Number</h4>
                <p>
                  <a href="tel:+99 (123) 326 4029">+99 (123) 326 4029</a>
                  <br />
                  <a href="tel:+99 (123) 326 4029">+99 (123) 326 4029</a>
                </p>
              </div>
            </div>
            <div className="box mail">
              <span className="icon">
                <GoMailRead />
              </span>
              <div className="ContactContent">
                <h4>E-Mail Us</h4>
                <p>
                  <a href="mailto:someone@example.com">someone@example.com</a>
                  <br />

                  <a href="mailto:someone@example.com">someone@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default ContactUs;
