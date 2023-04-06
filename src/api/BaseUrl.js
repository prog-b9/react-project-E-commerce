import axios from "axios";

// this is decalre url Domin the project from palce one
const baseURL = axios.create({ baseURL: "http://127.0.0.1:8000" });
// and use any api (getAllCategory , getAllProdcuts , createGategory)
// use  => baseURL/api/v1/getAllCategory

export default baseURL;
