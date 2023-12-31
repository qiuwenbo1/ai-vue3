import axios from "axios";
import {ElMessage} from "element-plus";

// 1. 创建axios实例
const instance = axios.create({
    baseURL: "/api",
    timeout: 500000
})
// 2. 请求拦截
instance.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem('token')
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    error => {

    }
)

//3. 响应拦截
instance.interceptors.response.use(
    res=>{
        return res
    },error => {
        if (error &&error.response){
            const status = error.response.status
            switch (status){
                case 400:
                case 401:
                case 403:
                case 404:
                case 408:
                case 500:
                case 501:
                case 502:
                case 503:
                case 504:
                case 505:
                    ElMessage.error("网络超时")
                    break
                default:
                    ElMessage.error("请求失败")
            }
        }else {
            if (JSON.stringify(error).includes("timeout")) {
                ElMessage.error("服务器响应超时，请刷新页面")
            }
            ElMessage.error("连接服务器失败")
        }
        return Promise.reject(error)
    }
)

export default instance;
