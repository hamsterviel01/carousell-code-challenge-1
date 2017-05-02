/**
 * Created by DrHamsterviel on 29/4/17.
 */
import React from 'react'
import { withRouter } from 'react-router'
import CreateNewPostContainer from '../containers/CreateNewPostContainer'
import TopTrendListContainer from '../containers/TopTrendListContainer'

const { Grid, Row, Col } = require('react-flexgrid');

class HomePageComponent extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col lgOffset={4} lg={4}>
                        <h1>Welcome to Reddit's Clone</h1>
                        <CreateNewPostContainer />
                        <TopTrendListContainer />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withRouter(HomePageComponent);