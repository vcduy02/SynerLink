import Context from "./Context";
import { useContext } from "react";

export const useStore = () => {
    const state = useContext(Context);

    return state
}