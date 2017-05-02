/**
 * Created by DrHamsterviel on 30/4/17.
 */
import { connect } from 'react-redux'
import TopTrendItemComponent from "../components/TopTrendItemComponent"
import { handleUpvoteAction, handleDownvoteAction } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        content: ownProps.content,
        upvote: ownProps.upvote,
        downvote: ownProps.downvote
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpvote: (id) => {
            dispatch(handleUpvoteAction(id))
        },
        handleDownvote: (id) => {
            dispatch(handleDownvoteAction(id))
        }
    }
};

const TopTrendItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopTrendItemComponent);

export default TopTrendItemContainer;