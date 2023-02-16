import axios from "axios";
axios.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.NEXT_PUBLIC_API_URL;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    // if(user?.isLoggedIn){
    //   // config.headers.common.Authorization = `Bearer ${user.token}`;
    // }

    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  axios: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
