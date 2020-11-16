import API from '../../utils/api';

export const postMessage=(msg) => {
    return dispatch=> {
        API.postMessage(msg, res=>{
            dispatch({
                type: 'ADD_MESSAGE',
                payload: res.data
            })
        })
    }
}

export const getMessage=(token) => {
    return dispatch=> {
        API.getMessage(token, res=>{
            dispatch({
                type: 'GOT_MESSAGE',
                payload: res.data
            })
        })
    }
}

export const getEducation=(token)=>{
    return dispatch => {
        API.getEducation(token,res =>{
            dispatch({
                type: 'GOT_EDUCATION',
                payload: res.data
            })
        })
    }
}

export const getExperience=(token)=>{
    return dispatch =>{
        API.getExperience(token,res=>{
            dispatch({
                type:'GOT_EXPERIENCE',
                payload: res.data
            })
        })
    }
}

export const getPosts = (skip) => {
    return dispatch => {
        API.getSitePosts(skip, res => {
            dispatch({
                type: 'GOT_SITE_POSTS',
                payload: res.data,
                skip: skip
            })
        })
    }
}

export const getPostCount = () => {
    return dispatch => {
        API.getPostCount(res => {
            dispatch({
                type: 'GOT_POST_COUNT',
                payload: res.data.count
            });
        })
    }
}

export const setPostData = (post) => {
    return dispatch => {
        dispatch({
            type: 'SET_DEFAULT_POST_DATA',
            payload: post
        });
    }
}


export const getPostByTitle = (title, token) => {
    return dispatch => {
        API.getPostByTitle(title, token, res => {
            dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: res.data
            })
        })
    }
}