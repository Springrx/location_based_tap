import fetch from "../component/fetch";
export function addPost(post){
    debugger
    return fetch({
        url:'/api/post',
        method:'post',
        data:post
    })
}

export function addPostImage(url, post_id) {
    const info = {url,post_id};
    return fetch({
      url: '/api/postImage',
      method: 'post',
      data: info,
    })
}

export function getPost(position){
    return fetch({
        url:'/api/post',
        params:position
    })
}
export function getUsernameAndAva(user_id){
    return fetch({
        url:'/api/user/info',
        params:user_id
    })
}
export function getPostImage(post_id){
    return fetch({
        url:'/api/postImage',
        params:post_id
    })
}