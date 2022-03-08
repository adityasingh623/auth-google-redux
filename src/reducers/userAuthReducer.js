import { ATTEMPT_SIGN_IN, ATTEMPT_SIGN_OUT } from "../actions";

const INITIAL_STATE = {
    userFirstName : '',
    userLastName : '',
    userEmail : '',
    userId : '',
    userAccessToken : '',
    userIdToken : '',
    userAuthProvider : '',
    loginStatus : false
};

export default (state = INITIAL_STATE, action) => {

    if(action.type === ATTEMPT_SIGN_IN){
        return { 
            ...state, 
            userFirstName : action.payload.userFirstName,
            userLastName : action.payload.userLastName,
            userEmail : action.payload.userEmail,
            userId : action.payload.userId,
            userAccessToken : action.payload.userAccessToken,
            userIdToken : action.payload.userIdToken,
            userAuthProvider : action.payload.userAuthProvider,
            loginStatus : true
        };
    }

    if(action.type === ATTEMPT_SIGN_OUT){
        return {
            ...state,
            userFirstName : '',
            userLastName : '',
            userEmail : '',
            userId : '',
            userAccessToken : '',
            userIdToken : '',
            userAuthProvider : '',
            loginStatus : false
        };
    }

    return state;
};