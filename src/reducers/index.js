import { combineReducers } from 'redux';
import postReducers from './postResducers';
import usersResducers from './usersResducers';

export default combineReducers({ 
    posts: postReducers,
    users: usersResducers
});