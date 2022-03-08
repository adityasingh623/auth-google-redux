import { auth, provider } from '../auth/google/firebase-config';

export const ATTEMPT_SIGN_IN = 'ATTEMPT_SIGN_IN';
export const ATTEMPT_SIGN_OUT = 'ATTEMPT_SIGN_OUT';


export const trySignIn = () => {
    const userLogin = async (dispatch) => {
        let loginResponse = {};

        await auth.signInWithPopup(provider)
            .then(response => loginResponse = response)
            .catch((error) => alert(error.message));

        console.log(loginResponse.additionalUserInfo.profile.name);

        dispatch({
            type : ATTEMPT_SIGN_IN,
            payload : {
                userFirstName : loginResponse.additionalUserInfo.profile.given_name,
                userLastName : loginResponse.additionalUserInfo.profile.family_name,
                userEmail : loginResponse.additionalUserInfo.profile.email,
                userId : loginResponse.additionalUserInfo.profile.id,
                userAccessToken : loginResponse.credential.accessToken,
                userIdToken : loginResponse.credential.idToken,
                userAuthProvider : loginResponse.providerId,
                loginStatus : true
            }
        });
    };

    return userLogin;
};

export const trySignOut = () => {
    const userLogOut = async (dispatch) => {
        await auth.signOut();

        dispatch({
            type : ATTEMPT_SIGN_OUT,
            payload : {
                userFirstName : '',
                userLastName : '',
                userEmail : '',
                userId : '',
                userAccessToken : '',
                userIdToken : '',
                userAuthProvider : '',
                loginStatus : false
            }
        });
    }

    return userLogOut;
};