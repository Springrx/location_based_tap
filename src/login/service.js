import fetch from "../component/fetch";
export function register(userInfo){
    return fetch({
        url:'/api/user/register',
        method:'post',
        data:userInfo
    })
}
export function validUserName(username){
    return fetch({
        url:'/api/user/valid',
        params:{
            username
        }
    })
}
export function login(user){
    return fetch({
        url:'/api/user/login',
        method:'post',
        data:user
    })
}