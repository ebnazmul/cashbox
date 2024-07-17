import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const [registerAs, setRegisterAs] = useState("user");
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    if(searchParams.get("agent")){
        setRegisterAs("agent")
    }
    else{
        setRegisterAs("user")
    }
  },[searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
}


  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="text-2xl mb-4">রেজিস্টার</p>
      <div className="*:px-2 *:py-2 text-xl font-bold *:rounded">
        <button
          onClick={() => setRegisterAs("user")}
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
            name=""
            id=""
            placeholder=""
          />
        </div>
        <div className="mb-2">
          <p>ইমেইল:</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="text"
            name=""
            id=""
            placeholder=""
          />
        </div>
        <div className="mb-2">
          <p>ফোন:</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="text"
            name=""
            id=""
            placeholder=""
          />
        </div>
        <div className="mb-2">
          <p>পিন: (Must be 5 digit)</p>
          <input
            className="outline-none rounded-md px-2 py-1"
            type="number"
            name=""
            id=""
            placeholder=""
          />
        </div>
        <button className="w-full py-2 bg-blue-500 rounded text-gray-200 mt-2">
          রেজিস্টার
        </button>
      </form>
    </div>
  );
};

export default Register;
