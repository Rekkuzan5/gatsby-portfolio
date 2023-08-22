import React, { useState } from "react";
import Button from "../Button/button.jsx";
import { container, content, submit } from './contact.module.scss';

const Contact = () => {
    const buttonText = "Send";
    const [mailerState, setMailerState] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      };

    return (
        <div className={container} id="contact">
            <div className={content}>
                <h1>Contact me.</h1>
                <form onSubmit={submitEmail}>
                        <input
                            placeholder="Name"
                            onChange={handleStateChange}
                            name="name"
                            type="text"
                            value={mailerState.name}
                            required
                        />

                        <input
                            placeholder="Email"
                            onChange={handleStateChange}
                            name="email"
                            type='email'
                            value={mailerState.email}
                            required
                        />

                        <textarea
                            placeholder="Message"
                            onChange={handleStateChange}
                            name="message"
                            type='text'
                            value={mailerState.message}
                            required

                        />
                    {/* <input className={submit} type="submit" value="Submit" /> */}
                    {/* <Button type="submit">{status}</Button> */}
                    <Button type="submit" text={buttonText} />
                </form>
            </div>
        </div>
    );
}

export default Contact;