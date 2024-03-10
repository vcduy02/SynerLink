import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const address = localStorage.getItem('wallet_address');

    if(!address){
        return(
            <Navigate to={"/"} replace/>
        )
    }
    return children;
}

export default PrivateRouter