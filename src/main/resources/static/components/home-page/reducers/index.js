/**
 * Created by DrHamsterviel on 30/4/17.
 */

export const getTop20PostsReducer = (state, args) => {
    return state.set('top20Posts', args.top20Posts);
}
