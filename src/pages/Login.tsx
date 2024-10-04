import { useNavigate } from "react-router-dom"
import InputField from "../components/InputField"
import { useContext, useState } from "react";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const navigate = useNavigate();
    const authType = useContext(AuthContext);
    const {Login} = authType;
    const handleLogin = () => {
        if (email === "jee@gmail.com" && password === "1234") {
            Login();
            navigate("/home");
        } else if (email === "" && password === "") {
            alert("Please fill the details!!!");
        } else {
            alert("Please provide correct email and password")
        }
    }
    return (
        <>
            <div className="bg-cover bg-center bg-fixed">
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <InputField className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email"
                                    placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}></InputField>
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <InputField className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></InputField>
                                <a className="text-gray-600 hover:text-gray-800" href="#">Forgot your password?</a>
                            </div>
                            <div>
                                <Button className="mt-2 rounded"
                                 name="Login" onClick={handleLogin}></Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login