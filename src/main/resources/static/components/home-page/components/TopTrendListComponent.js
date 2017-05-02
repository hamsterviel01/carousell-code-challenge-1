/**
 * Created by DrHamsterviel on 30/4/17.
 */
import React from 'react';
import TopTrendItemContainer from '../containers/TopTrendItemContainer'

require('react-flexgrid/less/flexgrid.less');

class TopTrendListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.getTop20Posts();
    }

    render() {
        return (
            <div>
                <h2>Trending Now</h2>
                {
                    this.props.top20Posts.map((post) =>
                        <TopTrendItemContainer id={post.id} content={post.content} upvote={post.upvote} downvote={post.downvote}/>
                    )
                }
            </div>
        );
    }
}

export default TopTrendListComponent;