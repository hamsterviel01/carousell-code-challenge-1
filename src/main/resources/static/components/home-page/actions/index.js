/**
 * Created by DrHamsterviel on 30/4/17.
 */
import 'whatwg-fetch'
import Immutable from 'immutable'
import { getTop20PostsReducer } from '../reducers/index'

const BASE_URL = '/carousell-code-challenge/postController/';

export const getTop20PostsAction = () => {
    return (dispatch) => {
        return fetch(BASE_URL + 'returnTop20Posts', {
            method: 'GET'
        }).then(response => response.json()).then(data => {
            dispatch(dispatchGetTop20PostsReducer(data));
        });
    }
};

export const createNewPostHandleSubmitAction = (content) => {
    return (dispatch) => {
        return fetch(BASE_URL + 'createNewPost', {
            method: 'POST',
            body: JSON.stringify({
                content: content
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            dispatch(dispatchGetTop20PostsReducer(data));
        });
    }
};

export const dispatchGetTop20PostsReducer = (data) => {
    return {
        handler: getTop20PostsReducer,
        type: 'GET_TOP_20_POSTS',
        args: {
            top20Posts: Immutable.fromJS(data)
        }
    }
};

export const handleUpvoteAction = (id) => {
    return (dispatch) => {
        return fetch(BASE_URL + 'upvote?id=' + id, {
            method: 'POST'
        }).then(response => response.json()).then(data => {
            dispatch(dispatchGetTop20PostsReducer(data));
        });
    }
};

export const handleDownvoteAction = (id) => {
    return (dispatch) => {
        return fetch(BASE_URL + 'downvote?id=' + id, {
            method: 'POST'
        }).then(response => response.json()).then(data => {
            dispatch(dispatchGetTop20PostsReducer(data));
        });
    }
};