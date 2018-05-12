import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Checkbox,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';
import TodoDialog from './todo-dialog';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

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

  handleUpdate = dialogInputValue => {
    this.setState({ isEditing: false });
    this.props.onUpdate(dialogInputValue);
  }

  render() {
    return (
      <ListItem
        className="todo-list-item"
        leftCheckbox={ (
          <Checkbox
            onCheck={ (e, isChecked) => this.props.onCheck(isChecked) }
            checked={ !!this.props.completed }
          />
        ) }
        rightIconButton={ (
          <IconMenu iconButtonElement={ iconButtonElement }>
            { !this.props.completed && (
              <MenuItem
                onClick={ () => this.setState({ isEditing: true }) }
              >
                Szerkeszt
              </MenuItem>
            )}
            <MenuItem
              onClick={ this.props.onRemove }
            >
              Töröl
            </MenuItem>          
          </IconMenu>          
        ) }
        style={ { color: this.props.completed ? grey400 : 'inherit' } }
      >
        <div className="todo-list-item-text">
          { this.props.text }
        </div>
        <TodoDialog 
          title="Tennivaló szerkesztése"
          onClose={ () => this.setState({ isEditing: false }) }
          open={ this.state.isEditing }
          defaultValue={ this.props.text }
          onSave={ this.handleUpdate }
        />
      </ListItem>
    );
  }
}

export default TodoListItem;