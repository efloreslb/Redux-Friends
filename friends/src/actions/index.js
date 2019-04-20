import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
   dispatch({type: LOGIN_START});

   return axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
         localStorage.setItem('token', res.data.payload);
         dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
      })
      .catch(err => {
         console.log("login error:", err);
         // if (err.response && err.response.status === 403) {
         //    localStorage.removeItem('token');
         // }
         dispatch({type: LOGIN_FAILURE, payload: err});
      })
}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getFriends = () => dispatch => {
   dispatch({type: FETCH_START});
   axios.get('http://localhost:5000/api/friends', {headers: {authorization: localStorage.getItem('token')}})
      .then(res => {
         console.log(res);
         dispatch({type: FETCH_SUCCESS, payload: res.data})
      })
      .catch(err => {
         console.log(err);
         // if (err.response.status === 403) {
         //    localStorage.removeItem('token')
         // }
         dispatch({type: FETCH_FAILURE, payload: err})
      });
}

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postFriend = friend => dispatch => {
   dispatch({type: POST_START});
   axios.post('http://localhost:5000/api/friends', friend, {headers: {authorization: localStorage.getItem('token')}})
      .then(res => {
         dispatch({type: POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: POST_FAILURE, payload: err})
      })
}