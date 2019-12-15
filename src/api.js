import axios from "axios";
import {protocolHTTP, url} from "./config";

export async function getData(type) {
    return await axios.get(protocolHTTP + url + /api/ + type + '.json')
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return []
        });
}
