import { SET_USER, FAIL_USER, GET_USER } from './types';

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const failUser = () => ({ type: FAIL_USER });
export const getUser = () => ({ type: GET_USER });