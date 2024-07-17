import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center my-10 text-xl">
        <p className="text-gray-800">হাই, Nazmul Islam</p>
        <button className="border px-4 py-2 rounded bg-gray-300">৳ 400</button>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-4 *:py-2 *:px-4 *:bg-gray-500 flex flex-wrap gap-4 text-gray-200 *:rounded-md">
        <button onClick={() => navigate("/dashboard/sendmoney")}>
          সেন্ড মানি
        </button>
        <button>ক্যাশ ইন</button>
        <button>ক্যাশ আউট</button>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
