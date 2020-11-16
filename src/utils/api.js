import axios from 'axios';

let host;
if(process.env.NODE_ENV === 'development'){
    host = 'http://localhost:8080';
}else{
    host = 'http://www.anisabaki.com';
}
const API = {
makeFileURL: (url, token) => {
        return host + url + "?access_token=" + token;
},
 login:(email, pass, success) => {
    axios.post(`${host}/api/Users/login`,{email:email, password: pass}).then(res=>{
        success(res);
    });
},
ADDEducation:(post, token, success)=>{
    axios.post(`${host}/api/education?access_token=${token}`, post).then(res=>{
        success(res);
    })
},
getEducation: (token, success)=>{
    axios.get(`${host}/api/education?access_token=${token}`).then(res =>{
        success(res);
    })
},
UpdateEducation: (post, token, success) =>{
    axios.patch(`${host}/api/education/${post.id}?access_token=${token}`, post)
        .then(res => {
            success(res);
        })
},
getSingleEducation: (id, token, success) => {
    axios.get(`${host}/api/education/${id}?access_token=${token}`)
    .then(res => {
        success(res);
    });
},
ADDExperience:(exp, token, success)=>{
    axios.post(`${host}/api/experiences?access_token=${token}`, exp).then(res=>{
        success(res);
    })
},
getExperience:(token, success) =>{
    axios.get(`${host}/api/experiences?access_token=${token}`).then(res =>{
        success(res);
    })
},
UpdateExperience: (exp, token, success) => {
    axios.patch(`${host}/api/experiences/${exp.id}?access_token=${token}`, exp).then(res =>{
        success(res);
    })
},
getSingleExperience: (id, token, success)=> {
    axios.get(`${host}/api/experiences/${id}?access_token=${token}`).then(res=>{
        success(res);
    })
},
postMessage:(msg, success)=>{
    axios.post(`${host}/api/messages`,msg).then(res=>{
        success(res);
    })
},
getPosts: (token, success)=>{
    axios.get(`${host}/api/posts?access_token=${token}`).then(res=>{
        success(res);
    })
},
ADDPost: (post, token, success)=>{
    axios.post(`${host}/api/posts?access_token=${token}`, post).then(res=>{
        success(res);
    })
},
UpdatePost: (post,token, success)=>{
    axios.patch(`${host}/api/posts/${post.id}?access_token=${token}`,post).then(res=>{
        success(res);
    })
},
getSinglePost: (id, token, success)=>{
    axios.get(`${host}/api/posts/${id}?access_token=${token}`).then(res=>{
        success(res);
    })
},
getMessage:(token, success) => {
    axios.get(`${host}/api/messages?access_token=${token}`).then(res => {
        success(res);
    })
},
uploadImage: (data, token, postId, userId, success) => {
    axios.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
    .then(res => {
        success(res);
    })
},
getSitePosts: (skip, success) => {
    axios.get(`${host}/api/posts`, {
        params: {
            filter: {
                skip: skip,
                limit: 5,
                include: 'PostImage',
                fields: {
                    id: true,
                    title: true,
                    content: true
                }
                
            }
        }
    })
    .then(res => {
        success(res);
    })
},
getPostCount: (success) => {
    axios.get(`${host}/api/posts/count`)
    .then(res => {
        success(res);
    })
},
getPostByTitle: (title, token, success) => {
    axios.get(`${host}/api/posts/findOne?access_token=${token}`, {
        params: {
            filter: {
                where: {title: title}
            }
        }
    }).then(res => {
        success(res);
    })
}

}

export default API;