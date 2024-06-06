import React, { useContext } from "react";
import UserContext from "../context/UserContext"; 

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <button
                onClick={() => {
                    setUser({ username, password });
                }}>
            Login
            </button>
        </div>
    );
}

export default Login;
