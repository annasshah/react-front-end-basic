import axios from "axios"



const baseurl = process.env.REACT_APP_BASE_URL

export const apiHandle =  () => {

    return axios.create({
        baseURL:baseurl
    })
}


