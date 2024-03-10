import instance from "../core/api";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const signin = () => {
    
}

const solanaConnect = async (network) => {

    const { solana } = window;

    if (!solana) {

      alert("Please Install Solana");

    }

    try {

      const phantom = new PhantomWalletAdapter();
      await phantom.connect();
      const rpcUrl = clusterApiUrl(network);
      const connection = new Connection(rpcUrl, "confirmed");
      const wallet = {

        address: phantom.publicKey.toString(),

      };
        
      if (wallet.address) {
        
        localStorage.setItem('wallet_address', wallet.address)

        await connection.getAccountInfo(new PublicKey(wallet.address), "confirmed");
        return wallet.address

      }

    }
    catch (err) {

      console.log(err);

    }
}

const signup = (body) => {

    const xKey = import.meta.env.VITE_X_API_KEY;
    const url = 'https://api.shyft.to/sol/v1/semi_wallet/create';
    

    const data = JSON.stringify(
        {
        "password": body['password']
        }
    );

    const config = {

        headers: {
          'x-api-key': xKey,
          'Content-Type': 'application/json'
        }

    }

    return instance(url).post('', data, config);
    
}

export {signin, signup, solanaConnect}
