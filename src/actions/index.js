import _ from 'lodash';
import json from '../api/json';

export const fetchPosts = () => async (dispatch) => {
    const response =  await json.get('/posts');

    dispatch({  type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => (dispatch) =>  _fetchUser(id, dispatch);


const _fetchUser = _.memoize(async(id, dispatch) => {
    const response =  await json.get(`/users/${id}`);
    
    dispatch({  type: 'FETCH_USER', payload: response.data });

});
