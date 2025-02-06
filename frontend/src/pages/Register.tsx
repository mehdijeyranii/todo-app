import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      username,
      password,
    });
    alert("ثبت نام با موفقیت انجام شد");
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        className="border p-2"
        placeholder="نام کاربری"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mt-2"
        placeholder="کلمه عبور"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 mt-4"
        onClick={handleRegister}
      >
        ثبت نام
      </button>
    </div>
  );
};

export default Register;
