import { push } from 'react-router-redux';
import { endPoint } from '../components/Api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOADING_FEED = 'LOADING_FEED';
export const RECEIVED_FEED = 'RECEIVED_FEED';
export const LOGOUT = 'LOGOUT';

export const initialLogin = data => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    data,
  });
  dispatch(push('/inbox'));
};

const wait = () => {
return new Promise(res => setTimeout(x => res(),1000))
}

export const doLogout = () => async( dispatch, getState) => {
  const { user: { name: user, token} } = getState().inbox;
  const body = { user, token };

  try {
    await (await fetch(`${endPoint}/logout`,{
       method: 'POST',
       body: JSON.stringify(body),
     })).json();
  } finally {
    dispatch({
      type: LOGOUT,
    });
  }
  dispatch(push('/'));
}

export const fetchFeed = id => async (dispatch, getState) => {
  const { user: { name: user, token } } = getState().inbox;
  const body = { user, token };
  try {
    const res = await fetch(`${endPoint}/read/${id}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    const { data, error } = await res.json();
    if (error) {
      // Not good, token dead?
      throw new Error(error.name);
    } else {
      dispatch({
        type: RECEIVED_FEED,
        data,
        id,
      });
    }
  } catch (e) {
    // Might need to check varius API Errors here
    // or forward to caller
   throw e;
 }
  return true;
};
