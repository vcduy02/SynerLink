import axios from "axios";

const instance = (url) => {
    return axios.create({
        baseURL: url
    })
}

export default instance;