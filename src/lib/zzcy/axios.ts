import axios, {AxiosStatic} from "axios";

export interface IJhipsterUtils {
  axios: AxiosStatic;
  get: (url: string, opts?: object | URLSearchParams) => Promise<object>;
  post: (url: string, opts?: object | URLSearchParams) => Promise<object>;
}

axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.post["Hell-Word"] = "Freeze";
axios.defaults.baseURL = "https://www.baidu.com/";
// axios.defaults.withCredentials = true

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const get = (url: string, params?: object | URLSearchParams) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
};

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const post = (url: string, params?: object | URLSearchParams) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
};

const utils: IJhipsterUtils = {
  axios,
  get,
  post,
};
export default utils;
