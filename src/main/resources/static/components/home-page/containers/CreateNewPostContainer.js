/**
 * Created by DrHamsterviel on 30/4/17.
 */
import { connect } from 'react-redux'
import CreateNewPostComponent from "../components/CreateNewPostComponent"
import { createNewPostHandleSubmitAction } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (content) => {
            dispatch(createNewPostHandleSubmitAction(content))
        }
    }
};

const CreateNewPostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNewPostComponent);

export default CreateNewPostContainer;