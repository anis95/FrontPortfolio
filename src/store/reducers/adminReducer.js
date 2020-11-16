const defaultState = {
    educations:[],
    education: {},
    experiences: [],
    experience: {},
    post:{},
    posts: []
}


const admin= (state =defaultState, action)=> {
    switch(action.type){
        case 'ADD_EDUCATION':
            return{
                ...state,
                educations : state.educations.concat(action.payload),
                education: action.payload 
            }
        case 'GET_EDUCATION' :
            return {
                ...state,
                educations: action.payload
            }
        case 'EDIT_EDUCATION':
            return{
                ...state,
                education:{
                ...state.education,
                ...action.payload
                },
                educations: state.educations.map(p => {
                    if (p.id === action.payload.id){
                        // this is the existing post in redux that is have been updated
                        // and currently in action.payload
                        return {
                            ...p,
                            ...action.payload
                        }
                    }else {
                        return p;
                    }
                })

            }
        case 'GOT_SINGLE_EDUCATION' :
            return {
                ...state,
                education : action.payload
            }
        case 'ADD_EXPERIENCE':
            return {
                ...state,
                experiences : state.experiences.concat(action.payload),
                experience: action.payload
            }
        case 'GOT_EXPERIENCE' : 
            return {
                ...state,
                experiences: action.payload
            }
        case 'EDIT_EXPERIENCE':
            return {
                ...state,
                experience: {
                    ...state.experience,
                    ...action.payload
                },
                experiences: state.experiences.map(p => {
                    if (p.id === action.payload.id){
                        // this is the existing post in redux that is have been updated
                        // and currently in action.payload
                        return {
                            ...p,
                            ...action.payload
                        }
                    }else {
                        return p;
                    }
                })
            }
        case 'GOT_SINGLE_EXPERIENCE':
            return {
                ...state,
                experience: action.payload
            }
        case 'GOT_POSTS':
            return{
                ...state,
                posts: action.payload
            }
        case 'ADD_POST':
            return{
                ...state,
                posts : state.posts.concat(action.payload),
                post: action.payload
            }
        case 'EDIT_POST':
            return{
                ...state,
                post:{
                    ...state.post,
                    ...action.payload
                },
                posts: state.posts.map(p => {
                    if (p.id === action.payload.id){
                        // this is the existing post in redux that is have been updated
                        // and currently in action.payload
                        return {
                            ...p,
                            ...action.payload
                        }
                    }else {
                        return p;
                    }
                })
            }
        case 'GOT_SINGLE_POST':
            return{
                ...state,
                post : action.payload
            }
        case 'UPLOADED_IMAGE':
            return {
                ...state,
                post: {
                    ...state.post,
                    PostImage: [action.payload]
                        }
                    }
        default:
            return state

    }


}

export default admin;