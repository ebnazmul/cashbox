import { useContext, useState } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Sendmoney = () => {
  const { user } = useContext(AuthContexts);
  const [amount, setAmount] = useState(0);
  const axiosSecure = useAxiosSecure();

  const handleSendmoney = async (e) => {
    e.preventDefault();
    if (user.balance < amount) {
      toast.error("Insufficiant balance");
    }

    try {
      const res = await axiosSecure.post("/sendmoney", {
        amount,
        receiver: e.target.phone.value,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto mt-10 border p-20">
      <form onSubmit={handleSendmoney} className="text-xl">
        <div className="mb-2">
          <p className="mb-1">Recivers Number:</p>
          <input
            className="outline-none rounded-md px-2 py-1 bg-gray-200"
            type="number"
            name="phone"
            required
          />
        </div>
        <div className="mb-2">
          <p className="mb-1">Amount:</p>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="outline-none rounded-md px-2 py-1 bg-gray-200"
            type="number"
            name="amount"
            required
          />
        </div>
        <p>Estemeted Fee: {amount > 100 ? 5 : 0}</p>
        <button className="py-2 px-4 bg-blue-500 rounded text-gray-200 mt-2 hover:bg-blue-400 duration-300">
          Send Money
        </button>
      </form>
    </div>
  );
};

export default Sendmoney;
