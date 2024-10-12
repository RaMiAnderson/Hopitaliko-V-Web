import decode from "../utils/decodeToken"
import axios from "axios"
import { useState } from "react";

const getDataUser = async (token) => {
    let [username, setUsername] = useState(decode(token).username);
    const res = await axios.post("http://localhost:8011/api/auth/verifyUser", {username});
    return res.data;
}

export default {
    getDataUser
}