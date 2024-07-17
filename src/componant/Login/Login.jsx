import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;

      const res = await axiosSecure.post("/login", {
        email: form.email.value,
        pin: form.pin.value,
      });

      Cookies.set("token", res.data.cookie);




    } catch (error) {
      return toast.error(error.response.data);
    }
  };

  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="text-2xl mb-4">লগইন</p>

      <form onSubmit={handleLogin} className="text-xl mt-4">
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
          <p>পিন: (Must be 5 digit)</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="number"
            name="pin"
            required
          />
        </div>
        <button className="w-full py-2 bg-blue-500 rounded text-gray-200 mt-2 hover:bg-blue-400 duration-300">
          লগইন
        </button>
        <button onClick={()=>{
            navigate("/register")
        }} type="button" className="w-full py-2 bg-blue-600 rounded text-gray-200 mt-4 hover:bg-blue-400 duration-300 text-sm">Register Insted</button>
      </form>

    </div>
  );
};

export default Login;
