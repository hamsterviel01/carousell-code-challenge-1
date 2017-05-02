/**
 * Created by DrHamsterviel on 29/4/17.
 */
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    top20Posts: [
        {
            id: 123,
            content: 'abc',
            upvote: 12,
            downvote: 10
        }
    ]
});

const reducer = (state = initialState, action) => {
    if(action.handler){
        var nextState = action.handler(state, action.args);
        return (nextState) ? (nextState): state;
    }

    else return state;
}


export default combineReducers({
    app: reducer
});