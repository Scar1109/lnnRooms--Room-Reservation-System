import React, { useState } from "react";

function RegistrationPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    function register() {
        if (password === cPassword) {
            const user = { firstName, lastName, username, email, password, cPassword };
            console.log(user);
        } else {
            alert("Password does not match");
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <h3 style={{fontWeight: 'bold'}}>Register</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control inputs"
                                placeholder="First Name"
                                onChange={(e) => {
                                    setFirstName(e.target.value);}
                                }
                            />
                        </div>
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control inputs"
                                placeholder="Last Name"
                                onChange={(e) => {
                                    setLastName(e.target.value);}
                                }
                            />
                        </div>
                    </div>

                    <input
                        type="text"
                        className="form-control inputs"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />

                    <input
                        type="email"
                        className="form-control inputs"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <input
                        type="password"
                        className="form-control inputs"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />

                    <input
                        type="password"
                        className="form-control inputs"
                        placeholder="Confirm Password"
                        value={cPassword}
                        onChange={(e) => {
                            setCPassword(e.target.value);
                        }}
                    />

                    <p className="mt-2">Already have an account, <a href="/login" >login</a></p>

                    <button className="btn btn-primary" onClick={register}>
                        Register
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
