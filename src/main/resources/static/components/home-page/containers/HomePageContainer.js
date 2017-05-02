/**
 * Created by DrHamsterviel on 30/4/17.
 */
import { connect } from 'react-redux'
import HomePageComponent from '../components/HomePageComponent'

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageComponent);

export default HomePageContainer;