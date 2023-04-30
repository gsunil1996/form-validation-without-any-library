import React from 'react'
import { useState } from "react";

const LoginFormValidation = () => {

    const initialValues = { username: "", email: "", password: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        const errors = {};

        const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.username) {
            errors.username = "Username is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regexForEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formValues)
        setFormErrors(validate(formValues))

        if (Object.keys(validate(formValues)).length === 0) {
            // we can make an api call here
            alert("this form is submitted")
        }
    }
    return (
        <div>
            <h1>LoginFormValidation</h1>

            <pre>
                {JSON.stringify(formValues)}
            </pre>

            <div style={{ width: "40%", margin: "auto", padding: "10px", border: "2px solid black" }} >
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    <hr />
                    <div>
                        <div style={{ fontWeight: 600 }} >Username</div>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formValues?.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p style={{ color: 'red', fontSize: "10px" }} >{formErrors?.username}</p>
                    </div>

                    <div style={{ marginTop: "10px" }} >
                        <div style={{ fontWeight: 600 }} >Email</div>
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues?.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p style={{ color: 'red', fontSize: "10px" }}>{formErrors?.email}</p>
                    </div>

                    <div style={{ marginTop: "10px" }} >
                        <div style={{ fontWeight: 600 }} >Password</div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues?.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p style={{ color: 'red', fontSize: "10px" }}>{formErrors?.password}</p>
                    </div>

                    <div>
                        <button type='submit' style={{ marginTop: "10px" }}  >Submit</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginFormValidation