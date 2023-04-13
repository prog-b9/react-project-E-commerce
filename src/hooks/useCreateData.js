import baseURL from "../api/BaseUrl";

const useCreateDataWithImage = async (apiUrl, param) => {
  const configHeader = {
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  const res = await baseURL.post(apiUrl, param, configHeader);
  return res;
};

const useCreateData = async (apiUrl, param) => {
  const res = await baseURL.post(apiUrl, param);
  return res;
};

export { useCreateData, useCreateDataWithImage };
