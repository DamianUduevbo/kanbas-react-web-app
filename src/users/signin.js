import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({ username: "thor_odinson", password: "mjolnir123" });
    const navigate = useNavigate();
    const signin = async () => {
        console.log("credentials", credentials);
        await client.signin(credentials);
        navigate("/Kanbas/Account");
    };

    return (
        <div>
            <h1>Signin</h1>
            <input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <input value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <button onClick={signin}> Signin </button>
        </div>
    );
}

export default Signin;
