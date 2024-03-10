import instance from "../core/api";

export const getALLNFT = async (network) => { 

    const xKey = import.meta.env.VITE_X_API_KEY;
    const wallID = localStorage.getItem('wallet_address');


    const requestOptions = {
        headers: {
          "x-api-key": xKey,
        },
    }

    try{

        const response = await instance(`https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}`).get(``, requestOptions)
        console.log(response.data);
        return response.data

    }catch(error){

        console.log(error);

    }

}