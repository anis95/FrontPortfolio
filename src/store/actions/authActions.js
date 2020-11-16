import API from '../../utils/api';

export const login = (email, pass) => {
    return dispatch =>{
        API.login(email, pass, res => {
            console.log("RES", res);
            if(res.status === 200){
                dispatch({
                    type: 'LOGIN',
                    payload:{
                        email: email,
                        token: res.data.id,
                        userId: res.data.userId
    
                    }
                })
            }else{
                if(res){
                    dispatch({
                        type: 'SHOW_ERROR',
                        payload: 'There was an error.  Do you already have an account?'
                    })
                }
            }
        })
    } 
}

export const logout = () => {
    return dispatch => {
        dispatch({
            type:'LOGGEDOUT',
            payload: null
        })
    }
}