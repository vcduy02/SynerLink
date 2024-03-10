import { useState } from "react"
import { HookContext } from "."
import useMessage from "antd/es/message/useMessage";

const Provider = ({ children }) => {

    const [network, setNetwork] = useState('devnet');
    const [messageApi, contextHolder] = useMessage();
    
    return (
        <HookContext.Provider value={{ network, setNetwork, messageApi }}>
            {contextHolder}
            {children}
        </HookContext.Provider>
    )
}

export default Provider