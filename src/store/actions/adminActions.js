import API from '../../utils/api';

export const ADDEducation=(post,token) =>{

    return dispatch =>{
        API.ADDEducation(post,token, res=>{
            dispatch({
                type: 'ADD_EDUCATION',
                payload: res.data
                    
                
            })
                
            
        })
    }

}

export const getEducation = (token) =>{
    return dispatch => {
        API.getEducation(token, res =>{
            dispatch({
                type: 'GET_EDUCATION',
                payload: res.data
            })
        })
    }

}

export const UpdateEducation = (post,token) => {
    return dispatch => {
        API.UpdateEducation(post,token,res=>{
            dispatch({
                type: 'EDIT_EDUCATION',
                payload: res.data
            })
        })
    }
}

export const getSingleEducation = (id , token) => {
    return dispatch =>{
        API.getSingleEducation(id, token, res =>{
            dispatch({
                type: 'GOT_SINGLE_EDUCATION',
                payload: res.data
            })
        })
    }
}

export const ADDExperience = (exp,token) =>{
    return dispatch =>{
        API.ADDExperience(exp,token, res=>{
            dispatch({
                type: 'ADD_EXPERIENCE',
                payload: res.data
                    
                
            })
                
            
        })
    }

}

export const getExperience = (token) =>{
    return dispatch =>{
        API.getExperience(token, res=>{
            dispatch({
                type: 'GOT_EXPERIENCE',
                payload: res.data
            })
        })
    }
}

export const UpdateExperience = (exp,token) => {
    return dispatch => {
        API.UpdateExperience(exp, token, res => {
            dispatch({
                type: 'EDIT_EXPERIENCE',
                payload : res.data
            })
        })
    }
}

export const getSingleExperience = (id, token) => {
    return dispatch => {
        API.getSingleExperience(id, token, res=>{
            dispatch({
                type: 'GOT_SINGLE_EXPERIENCE',
                payload: res.data
            })
        })
    }
}

export const getPosts = (token) => {
    return dispatch => {
        API.getPosts(token, res=> {
            dispatch({
                type: 'GOT_POSTS',
                payload: res.data
            })
        })
    }
}

export const ADDPost = (post, token) => {
    return dispatch => {
        API.ADDPost(post,token, res => {
            dispatch({
                type: 'ADD_POST',
                payload: res.data
            })
        })
    }
}

export const UpdatePost = (post,token) => {
    return dispatch => {
        API.UpdatePost(post, token, res =>{
            dispatch({
                type:'EDIT_POST',
                payload: res.data
            })
        })
    }
}

export const getSinglePost= (id, token)=>{
    return dipatch => {
        API.getSinglePost(id, token, res=>{
            dipatch({
                type: 'GOT_SINGLE_POST',
                payload: res.data
            })
        })
    }
}

export const uploadImage = (data, token, postId, userId) =>{
    return (dispatch) => {
        API.uploadImage(data, token, postId, userId, res => {
            dispatch({
                type: 'UPLOADED_IMAGE',
                payload: res.data
            })
        } )
    }
}
