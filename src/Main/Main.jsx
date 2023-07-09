import { Outlet } from "react-router-dom";
import Header from "../shareit/Header/Header";
import Footer from "../shareit/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;