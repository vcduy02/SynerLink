import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/auth";

const useAuthMutation = (action) => {

    const {mutate, ...rest} = useMutation({
        mutationFn: async (body) => {
            switch(action){
                case "SIGNUP": 
                return await signup(body);
                default:
                    return null;
            }
        },
        onSuccess: (data) => {
            console.log(data);
            localStorage.setItem('wallet_address', data.result.wallet_address)
        }
    });

    const onSubmit = (body) => {
        mutate(body);
    }

    return {onSubmit, rest}
};

export default useAuthMutation;