import { useContext, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AuthContexts } from "../../Context/AuthContext";

const Home = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContexts);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="grid place-items-center py-10">
      <img className="h-40" src="/cashbox.png" alt="" />
      <h2 className="text-2xl my-4">ক্যাশবক্সে আপনাকে স্বাগতম!</h2>
      <button
        onClick={() => navigate("/login")}
        className="uppercase px-4 py-2 rounded-xl bg-gray-300 text-xl flex justify-center gap-2">
        লগইন
        <CiLock />
      </button>
      <p className="mt-4 text-xl flex justify-center gap-2 items-center">
        অ্যাকাউন্ট নেই ?
        <button
          onClick={() => navigate("/register")}
          className="uppercase px-4 py-2 rounded-xl bg-gray-300 flex justify-center gap-2">
          রেজিস্টার
        </button>
      </p>
      <button
        onClick={() => navigate("/register?agent=true")}
        className="uppercase px-4 py-2 rounded-xl bg-gray-400 text-xl flex justify-center gap-2 mt-4">
        এজেন্ট রেজিস্ট্রেশান
      </button>
    </div>
  );
};

export default Home;
