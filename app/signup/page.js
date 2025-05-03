'use client';
import Image from "next/image"
import signupImage from "@/public/images/signup.jpg"
import Link from "next/link";

export default function SignUp(){

    return <>
    <div className="signupContainer" >
        <Image src={signupImage} alt=""/>
        <div className="right">
            <div className="head">
                <h1>Create an account</h1>
                <p>Already have an account? <Link href="/login">Log in</Link></p>
            </div>

            <form style={{borderWidth: 0}} >
                <fieldset>
                    <label htmlFor="username">User name</label>
                    <input type="text" id="username" name="username" />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" />
                </fieldset>

                <button type="submit" >Register</button>
            </form>
        </div>
    </div>
    </>
}