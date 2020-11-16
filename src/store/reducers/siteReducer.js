const defaultState= {
    contacts:[],
    contact:{},
    educations:[],
    experiences:[],
    posts: [],
    post: {},
    postCount: 0
}

const site = (state = defaultState, action)=>{
        switch(action.type){
            case 'ADD_MESSAGE':
                return {
                    ...state,
                    contact: action.payload
                }
            case 'GOT_MESSAGE':
                return {
                    ...state,
                    contacts: action.payload
                }
            case 'GOT_EDUCATION':
                return{
                    ...state,
                    educations: action.payload
                }
            case 'GOT_EXPERIENCE':
                return {
                    ...state,
                    experiences: action.payload
                }
            case 'GOT_POST_COUNT':
                    return {
                        ...state,
                        postCount: action.payload
                    }
            case 'GOT_SITE_POSTS':
                    return {
                        ...state,
                        posts: action.skip ? state.posts.concat(action.payload) : action.payload
                    }
            case 'SET_DEFAULT_POST_DATA':
                    return {
                        ...state,
                        post: action.payload
                    }
            case 'SET_FULL_POST_DATA':
                    return {
                        ...state,
                        post: {
                        ...state.post,
                        ...action.payload
                            }
                    }
            default:
                return state
        }
}

export default site;