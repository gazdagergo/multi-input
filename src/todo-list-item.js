import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  TextField,
} from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

class TodoListItem extends React.Component {
  static propTypes = {
    onRemove: PropTypes.func,
    onCheck: PropTypes.func.isRequired,
    completed: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  state = {
    isEditing: false,
  };

  render() {
    return (
      <ListItem
        className="todo-list-item"
        rightToggle={ <CloseIcon /> }
      >
          <TextField
            floatingLabelText="test attribute"
            floatingLabelFixed={true}
            defaultValue={ this.props.text }
          />        
      </ListItem>
    );
  }
}

export default TodoListItem;