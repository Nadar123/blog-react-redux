import _ from 'lodash';
import json from '../api/json';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
   const userIds =  _.uniq(_.map(getState().posts, 'userId'));
   userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
    const response =  await json.get('/posts');

    dispatch({  type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response =  await json.get(`/users/${id}`);
    
    dispatch({  type: 'FETCH_USER', payload: response.data });
   
};


// const _fetchUser = _.memoize(async(id, dispatch) =>{
//     const response =  await json.get(`/users/${id}`);
    
//     dispatch({  type: 'FETCH_USER', payload: response.data });

// });