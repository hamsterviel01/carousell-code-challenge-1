/**
 * Created by DrHamsterviel on 30/4/17.
 */
import { connect } from 'react-redux'
import Immutable from 'immutable'
import TopTrendListComponent from "../components/TopTrendListComponent"
import { getTop20PostsAction } from "../actions"

const mapStateToProps = (state, ownProps) => {
    var state = state.get('app');
    return {
        top20Posts: state.has('top20Posts') ? state.get('top20Posts', Immutable.fromJS([])).toJS() : {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTop20Posts: () => {
            dispatch(getTop20PostsAction())
        }
    }
};

const TopTrendListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopTrendListComponent);

export default TopTrendListContainer;