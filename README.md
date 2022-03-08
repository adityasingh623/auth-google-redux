# Google Authentication Using Firebase, React and Redux

The is a basic application which just demonstrates the ```login``` and ```logout``` functionality using Google's authentication in Firebase.
**Class Based Component Used**.


## Project set-up

Go, to firebase make a project, give your usual steps and make a project, and uder the section ```your apps``` choose ```web application```. 

The easiest way to find you configuration is to your project, then click on ```Project Overview``` on the top-left side and scroll down under section ```your apps``` and you would find your details. 

## Adding Firebase Config

Open your project folder where you have created your react app and install the following dependencies ```redux```, ```react-redux```, ```redux-thunk```, ```firebase``` and ```react-firebase-hooks```, using ```npm install```. 

Create a folder ```src/auth/GoogleAuth``` and create a file named ```firebase-config.js```. 

Remove the default imports and add these following imports 
```javascript
import  firebase  from  'firebase/compat/app';
import  'firebase/compat/auth';
import  'firebase/compat/firestore';
```
Paste your ```firebaseConfig``` object as it is. Later add the following code
```javascript
// Initialize Firebase
const  firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const  db = firebaseApp.firestore();
const  auth = firebase.auth();
const  provider = new  firebase.auth.GoogleAuthProvider();
export { auth, db, provider };
```

Please refer to the file ```src/auth/google/firebase-config.js``` file for this step. Paste your own appropriate ```apiKey```, and ```appId``` which you get from your own project details from Firebase.
## Actions and Reducers

We use Redux for state managment in our application. Redux helps us maintain a app wide state, where we would store in our user details, such as, if the user has logged in or not, if logged in, storing it's username, email, authentication token, etc. Should the user chooses to logout, we would just remove the following information from our redux store. 
The initial state of our application would look something like this, 
```javascript
const  INITIAL_STATE = {
	userFirstName :  '',
	userLastName :  '',
	userEmail :  '',
	userId :  '',
	userAccessToken :  '',
	userIdToken :  '',
	userAuthProvider :  '',
	loginStatus :  false
};
```
Now we have two action creators with ```action.type``` as follows, ```ATTEMPT_SIGN_IN``` which tries to contact google login API to attempt user login, and  ```ATTEMPT_SIGN_OUT``` to attempt user logout. 

Now we use ```redux-thunk``` to make a ```async``` call to google, while processing login and logout functions. The code for which could be found within ```src/actions/index.js```. 

Now please attention to the following code
```javascript
let  loginResponse = {};

await  auth.signInWithPopup(provider)
.then(response  =>  loginResponse = response)
.catch((error) =>  alert(error.message));
```
After sucessfull authentication with Google we would be a ```response``` object, which we later equated to ```loginResponse``` as ```response``` is a local variable inside the method. 

Now you may ```console.log(loginResponse);``` to see what details are being fetched. We use this ```loginResponse``` object to fetch the details of the user from Google's database. After this fetching ```disptach()``` function with appropriate action creator is fired to the reducer. Again refer the ```src/actions/index.js``` file to understand better, and see how the initial state is being updated and the data being used.

The entire logic is to render **sign in** component when the initial state's ```loginStatus === false``` and render **sign out** component when it's ```true```.  

The **reducers** are pretty much self-explanatory, as all they do is take in a ```state``` and a ```action``` and update the ```state```.  Please note that the main code for reducers are in ```src/reducers/userAuthReducer.js```. The main ```index.js``` file in the reducers folder is the one exposed to the app, by importing the ```combineReducers``` from ```redux``` library. 

Now please focus your attention into the line
```javascript
.catch((error) =>  alert(error.message));
```
This project is just to make sure we implement the Google's authentication correctly, hence the ```error``` was just alerted ( is that even a word? ) out. Should you choose you may add your logic here.

The best way to test that is to click on login button and then close the Google's popup window where it asks for user's credential.
## React Component

Now, the entire component which handles and renders the entire process is ```WelcomePage.js``` which is inside ```src/components``` folder. This is a class based component, which uses ```connnect()``` method to connect it to the redux store. 

The actions creators were also imported to initiate an action when the button click event occurs. 

Please look at the component's source to get a clear understanding. 

## UI Library used

Sematic UI was used to provide basic button styling to this project. It was inject into our ```index.html``` file directly.

Should you wish you inject it into your project, just copy and paste the below code into the ```header``` of your ```index.html``` file. 

```html
<link  rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"  integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="  crossorigin="anonymous"  referrerpolicy="no-referrer"  />
```

Thank you!