import axios from 'axios';
export const ASSIST_LIST = 'ASSIST_LIST'

export const getAllAssist = () => {
    const request = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return {
        type: ASSIST_LIST,
        payload: request
    }
}
