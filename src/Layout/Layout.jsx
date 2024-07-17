import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
          <div className="min-h-[100vh] bg-blue-300">
          <Outlet/>
          </div>
            
        </div>
    );
};

export default Layout;