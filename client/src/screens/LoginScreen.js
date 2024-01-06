import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Swal from "sweetalert2";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function login() {
        const user = { email, password };
        try {
            setLoading(true);
            await axios.post(
                "api/users/login",user
            ).then((res) => {
                console.log(res);
                if (res.data) {
                    localStorage.setItem("currentUser", JSON.stringify(res.data));
                    window.location.href = "/home";
                }
            }, (error) => {
                console.log(error);
                Swal.fire({
                    title: "Invalid Credentials!",
                    html: `Please enter valid credentials or <a href="#">customer support</a>`,
                    icon: "error",
                })
            });
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div className="container">
            {console.log("error", error)}
            {loading ? (
                <Loader />
            ) : error ? (
                <Error />
            ) : (
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5">
                        <h3 style={{ fontWeight: "bold" }}>Sign in</h3>
                        <hr />
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

                        <p className="mt-2">
                            Not a member, <a href="/register">signup</a>
                        </p>

                        <button className="btn btn-primary" onClick={login}>
                            Sign in
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginScreen;
