import baseURL from "../api/BaseUrl";

const useGetData = async (apiUrl, param) => {
  const response = await baseURL.get(apiUrl, param);
  return response;
};

export default useGetData;
