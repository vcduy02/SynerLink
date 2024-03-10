import {  Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/HomePage";
import CreateNFT from "../pages/CreateNFT";
import {Profile} from "../pages/manager";
import PrivateRouter from "../components/PrivateRouter"



const Routers = () => {
    // console.log(address);
    return (
        <>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="createNFT" 
                    element={
                        <PrivateRouter>
                            <CreateNFT/>
                        </PrivateRouter>
                    }/>
                    <Route path="profile" 
                    element={
                        <PrivateRouter>
                            <Profile/>
                        </PrivateRouter>
                    }/>
                </Route>
            </Routes>
        </>
    )
}

export default Routers;