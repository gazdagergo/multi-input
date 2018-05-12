import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Dialog,
  FlatButton,
} from 'material-ui';

class TodoDialog extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    defaultValue: PropTypes.string,
    onSave: PropTypes.func,
    title: PropTypes.string,
  };

  state = {
    inputValue: null
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  };

  render() {
    return (
      <Dialog
        title={ this.props.title }
        actions={[
          <FlatButton
            key="1"
            label="Mégsem"
            onClick={ this.props.onClose }
          />,
          <FlatButton
            key="2"
            label="Mehet"
            primary
            onClick={ () => this.props.onSave(this.state.inputValue) }
          />,
        ]}
        modal={ false }
        open={ this.props.open }
        onRequestClose={ this.props.onClose }
      >
        <TextField
          className="todo-list-item-modal-textfield"
          defaultValue={ this.props.defaultValue }
          onChange={ this.handleChange }
          id="modal-text"
          onKeyPress={ e => e.key === 'Enter' && this.props.onSave(this.state.inputValue) }
        />
      </Dialog>       
    )
  }
}

export default TodoDialog;
