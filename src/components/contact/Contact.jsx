import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xds8f2h",
        "template_lizekk9",
        formRef.current,
        "i94dqXpjAoZ10lxBR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              
              <img src={Phone} alt="" className="c-icon" />
              +256 784741068
            </div>
            <div className="c-info-item">
              <a href="mayengemichael@gmail.com" target="_blank" rel="noreferrer">
              <img className="c-icon" src={Email} alt="" /></a>
              mayengemichael@gmail.com
              
            </div>
            <div className="c-info-item">
              <a href="https://maps.apple.com/?address=Kitovu,%20Kajansi,%20Uganda&auid=15451945720897665064&ll=0.187475,32.523149&lsp=7618&q=My%20Location&_ext=EiYpq4IHvIIjxz8xw+1196VBQEA5FNxZBXtdyT9BgfM9fspEQEBQDA%3D%3D&t=r" target="_blank" rel="noreferrer">
              <img className="c-icon" src={Address} alt="" /></a>
              Kampala Uganda
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;