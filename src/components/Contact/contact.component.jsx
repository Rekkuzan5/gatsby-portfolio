import React, { useState } from "react";
import Button from "../Button/button.jsx";
import  { container, content, submit } from './contact.module.scss';

const Contact = () => {
        const [ firstName, setFirstName ] = useState();
        const [ lastName, setLastName ] = useState();
        const [ email, setEmail ] = useState();
        const [ message, setMessage ] = useState();
    
        return (
            <div className={container}>
                <div className={content}>
                    <h1>Contact me.</h1>
                    <form>
                    <label>
                    First Name:
                    <br />
                    <input 
                        type="text" 
                        required
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) } 
                    />
                    </label>
                    <br />
                    <br />
                    <label>
                    Last Name:
                    <br />
                    <input 
                        type="text" 
                        required
                        value={ lastName} 
                        onChange={ (e) => setLastName(e.target.value)}
                    />
                    </label>
                    <br />
                    <br />
                    <label>
                        Email:
                        <br />
                        <input 
                            type='email' 
                            required
                            value={ email } 
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                        </label>
                        <br />
                        <br />
                    <label>
                        Message Text:
                        <br />
                        <textarea 
                            type='text' 
                            required
                            value={ message } 
                            onChange={ (e) => setMessage(e.target.value) }
                        />
                    </label>
                    <br />
                    <br />
                    {/* <input className={submit} type="submit" value="Submit" /> */}
                    <Button type="submit" text="Submit" />
                </form>
            </div>
        </div>
        );
}

export default Contact;