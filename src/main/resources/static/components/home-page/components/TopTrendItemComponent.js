/**
 * Created by DrHamsterviel on 30/4/17.
 */
import React from 'react';
import TopTrendItemContainer from '../containers/TopTrendItemContainer'

require('react-flexgrid/less/flexgrid.less');

class TopTrendItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote() {
        this.props.handleUpvote(this.props.id);
    }

    handleDownvote() {
        this.props.handleDownvote(this.props.id);
    }

    render() {
        return (
            <div className="top-trend-item">
                <p>{this.props.content}</p>
                <p style={{marginTop: -15, marginBottom: 20}}>
                    <button className="button accept" onClick={() => this.handleUpvote()}>{this.props.upvote} {this.props.upvote > 1 ? 'upvotes' : 'upvote'}</button>
                    <button className="button reject" onClick={() => this.handleDownvote()}>{this.props.downvote} {this.props.downvote > 1 ? 'downvotes' : 'downvote'}</button>
                </p>
            </div>
        );
    }
}

export default TopTrendItemComponent;