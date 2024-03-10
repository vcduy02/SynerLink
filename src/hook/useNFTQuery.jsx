import { useQuery } from '@tanstack/react-query'
import { getALLNFT } from '../services/NFT';
import { useStore } from './hooks';

const useNFTQuery = () => {
    const {network} = useStore()
    
    const {data, isLoading, isError} = useQuery({
        queryKey: ['NFT'],
        queryFn: async () => getALLNFT(network)
    })

    return {data, isLoading, isError}
}

export default useNFTQuery