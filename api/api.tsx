import axios from 'axios';

const baseUrl = 'http://localhost:3000/api'


function signIn(username:string , password:string){
    axios.get(baseUrl + '' , {})
    .then((res)=> {
        console.log(res)
        return res;
    })
    .catch((err)=> {

    })
}

function registerAsCollect(obj:any){
   return axios.post(baseUrl + '', obj , {})
        .then((res) => {
            return res;
        })
}

function registerAsResident(obj:any){
  axios.post(baseUrl + '', obj , {})
        .then((res) => {
            return res;
        })
}

function forgotPassword(email:string){
    axios.get(baseUrl + '' , {})
    .then((res)=> {
        console.log(res)
        return res;
    })
    .catch((err)=> {

    })
}


export const Api =  {
    signInFn:signIn,
    registerRes:registerAsResident,
    registerCollect:registerAsCollect,
    forgetPass:forgotPassword
}

