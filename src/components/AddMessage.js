import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {

  static propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
  }

  state = {
    value: ''
  }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.onAddMessage({
      username: this.props.user,
      text: this.state.value
    });
  }

  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div className="input-group-append">
            <button className="btn submit-button" type="submit" value="Submit" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessage;