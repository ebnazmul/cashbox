import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const [registerAs, setRegisterAs] = useState("user");
  const axiosSecure = useAxiosSecure();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.get("agent")) {
      setRegisterAs("agent");
    } else {
      setRegisterAs("user");
    }
  }, [searchParams]);

  const handleSubmit = async(e) => {

    e.preventDefault();
    const form = e.target;
    if (form.pin.value < 9999) {
      return toast.error("Pin must be minimum 5 digit");
    }

    const res = await axiosSecure.post("/register", {
      role: registerAs,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      pin: form.pin.value,
    })

    console.log(res);

  };

  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="text-2xl mb-4">রেজিস্টার</p>
      <div className="*:px-2 *:py-2 text-xl font-bold *:rounded">
        <button
          onClick={() => {
            setRegisterAs("user");
            setSearchParams("");
          }}
          className={`mr-2 ${
            registerAs === "user" ? "bg-blue-100" : "bg-gray-300"
          }`}>
          USER
        </button>
        <button
          onClick={() => setRegisterAs("agent")}
          className={`${
            registerAs === "agent" ? "bg-blue-100" : "bg-gray-300"
          }`}>
          AGENT
        </button>
      </div>
      <form onSubmit={handleSubmit} className="text-xl mt-4">
        <div className="mb-2">
          <p>নাম:</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-2">
          <p>ইমেইল:</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mb-2">
          <p>ফোন:</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="number"
            name="phone"
            required
          />
        </div>
        <div className="mb-2">
          <p>পিন: (Must be 5 digit)</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="number"
            name="pin"
            required
          />
        </div>
        <button className="w-full py-2 bg-blue-500 rounded text-gray-200 mt-2 hover:bg-blue-400 duration-300">
          রেজিস্টার
        </button>
        <button onClick={()=>{
            navigate("/login")
        }} type="button" className="w-full py-2 bg-blue-400 rounded text-gray-200 mt-4 hover:bg-blue-500 duration-300 text-sm">Login Insted</button>
      </form>
    </div>
  );
};

export default Register;
