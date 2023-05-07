import React from 'react';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterComponent({ finallyNextStep }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [cofirm, setCofirm] = React.useState("");
    const [error, setError] = React.useState(null);

    const signIn = async () => {
        const isEmailValid = email.length >= 10;
        const isPasswordValid = password.length >= 10;
        
        if (isEmailValid && isPasswordValid) {
            if (cofirm !== password) {
                setError("Password mismatch");
            } else {
                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                    console.log("Successful Authorization");
                    finallyNextStep();
                } catch (err) {
                    setError("Registration Error");
                }
            }
        } else {
            setError("Please enter a valid email and password (at least 10 characters each).");
        }
    }
    

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            finallyNextStep();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div class="square-registration">
            <p className="djdjdjddjk">{error}</p>
            <div onClick={signInWithGoogle} class="button-google_registration">
                <img src="/img/registration/google.svg" alt="" />
                <h1 class="title-registration__button">Google</h1>
            </div>
            <div class="form-registration">
                <div class="form-reg">
                    <div class="div-inpt email">
                        <h1 class="title-input title-email_input">email</h1>
                        <input type="email" class="input__reg email-reg"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="div-inpt password">
                        <h1 class="title-input title-password_input">password</h1>
                        <input type="password" class="input__reg password-reg"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="div-inpt cofirm-password">
                        <h1 class="title-input title-cofirm-password_input">cofirm password</h1>
                        <input type="password" class="input__reg cofirm-password-reg"
                            onChange={(e) => setCofirm(e.target.value)}
                        />
                    </div>
                    <button onClick={signIn} class="submit-btn">Registration</button>
                </div>
            </div>
            <a class="sing-in_button" href="/">Sing in</a>
        </div>
    );
};