import instance from "./axios.js";
const post = (url,data)=>{
    return new Promise((resolve, reject)=>{
        instance.post(url,data).then(res => {
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}