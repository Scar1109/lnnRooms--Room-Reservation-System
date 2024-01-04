import React, { useState} from "react";


function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const user = {email, password};
        console.log(user);
    }
    

    return <div className="container">
    <div className="row justify-content-center mt-5">
        <div className="col-md-5">
            <h3 style={{fontWeight: 'bold'}}>Sign in</h3>
            <hr/>
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

            <p className="mt-2">Not a member, <a href="/register" >signup</a></p>

            <button className="btn btn-primary" onClick={login}>
                Sign in
            </button>
            
        </div>
    </div>
</div>;
}

export default LoginScreen;
