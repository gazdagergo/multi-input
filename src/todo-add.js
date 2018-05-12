import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { RaisedButton } from 'material-ui';
import TodoDialog from './todo-dialog';
import { addTodo } from './actions';

class AddTodo extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func,
  };

  state = {
    isEditing: false
  }

  handleSave = dialogInputValue => {
    this.setState({ isEditing: false });
    this.props.addTodo(dialogInputValue);
  }

  render() {
    return (
      <Fragment>
        <RaisedButton
          label={ "Új tennivaló" }
          secondary={true}
          className="todo-add-button"
          onClick={ () => this.setState({ isEditing: true }) }
        />
        <TodoDialog 
          title="Tennivaló hozzáadása"
          onClose={ () => this.setState({ isEditing: false }) }
          open={ this.state.isEditing }
          defaultValue=""
          onSave={ this.handleSave }
        />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo);
