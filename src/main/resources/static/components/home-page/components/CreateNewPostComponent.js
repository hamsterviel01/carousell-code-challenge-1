/**
 * Created by DrHamsterviel on 30/4/17.
 */
import React from 'react'

require('react-flexgrid/less/flexgrid.less');

const VALIDATION_MESSAGE_0_CHAR = 'Please write something ...';
const VALIDATION_MESSAGE_255_CHAR = 'Oops! Post is too long (exceeding 255 characters) ...';

class CreateNewPostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            validationMessage: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleSubmit() {
        const content = this.state.content;
        if (content.length > 0 && content.length <= 255) {
            this.setState({
                content: '',
                validationMessage: ''
            });
            this.props.handleSubmit(content);
        } else if (content.length === 0) {
            this.setState({
                content: content,
                validationMessage: VALIDATION_MESSAGE_0_CHAR
            })
        } else {
            this.setState({
                content: content,
                validationMessage: VALIDATION_MESSAGE_255_CHAR
            })
        }
    }

    onChange(e) {
        const content = e.target.value;
        if (content.length > 0 && content.length <= 255) {
            this.setState({
                content: content,
                validationMessage: ''
            });
        } else if (content.length === 0) {
            this.setState({
                content: content,
                validationMessage: VALIDATION_MESSAGE_0_CHAR
            })
        } else {
            this.setState({
                content: content,
                validationMessage: VALIDATION_MESSAGE_255_CHAR
            })
        }
    }

    onBlur(e) {
        if (this.state.validationMessage === VALIDATION_MESSAGE_0_CHAR) {
            this.setState({
                validationMessage: ''
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Let post something!</h2>
                <div>
                    <p>
                        <textarea
                            title="What's on your mind?"
                            className="create-new-post-text-area"
                            placeholder="What's on your mind?"
                            value={this.state.content}
                            onChange={(e) => this.onChange(e)}
                            onBlur={(e) => this.onBlur(e)}>
                        </textarea>
                    </p>
                    <p class='validation-message'
                         style={
                             this.state.validationMessage == '' ? {display: 'none'} : {color: '#d95e40'}
                         }
                    >
                        {this.state.validationMessage}
                    </p>
                    <p style={{marginTop: 0}}>
                        <button className="button accept" style={{marginTop: 0}} onClick={() => this.handleSubmit()}>Post</button>
                    </p>
                </div>
            </div>
        )
    }
}

export default CreateNewPostComponent;