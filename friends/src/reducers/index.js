import {LOGIN_START, 
   LOGIN_SUCCESS, 
   LOGIN_FAILURE, 
   FETCH_START, 
   FETCH_SUCCESS, 
   FETCH_FAILURE,
   POST_START,
   POST_SUCCESS,
   POST_FAILURE} from '../actions';


const initialState = {
   friends: [],
   fetchingFriends: false,
   loggingIn: false,
   error: "",
   errorStatusCode: null
}

export default (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_START: {
         return {
            ...state,
            loggingIn: true
         }
      }
      case LOGIN_SUCCESS: {
         return {
            ...state,
            loggingIn: false
         }
      }
      case LOGIN_FAILURE: {
         return {
            ...state,
            loggingIn: false
         }
      }
      case FETCH_START: {
         return {
            ...state, 
            error: "",
            fetchingFriends: true
         }
      }
      case FETCH_SUCCESS: {
         return {
            ...state, 
            error: "",
            fetchingFriends: false,
            friends: action.payload
         }
      }
      case FETCH_FAILURE: {
         return {
            ...state, 
            errorStatusCode: action.payload
         }
      }
      case POST_START: {
         return {
            ...state,
            fetchingFriends: true,
            friends: action.payload
         }
      }
      case POST_SUCCESS: {
         console.log(action.payload);
         return {
            ...state,
            fetchingFriends: false,
            friends: action.payload
         }
      }
      case POST_FAILURE: {
         return {
            ...state,
            error: action.payload,
            fetchingFriends: false
         }
      }
      default:
         return state;
   }
}