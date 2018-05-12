import React from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'material-ui';

class TodoList extends React.Component {
  static propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }
    
  state = {
    todos: [
      {id: 'aaa', text: 'bbb'},
      {id: 'ccc', text: 'bbb'},
    ]
  }
  render() {
    return (
      <div className="todo-list-wrapper">
        <Card className="todo-list">
          <List>
            {this.state.todos.map(todo =>
                <ListItem
                  key={ todo.id }
                  rightToggle={ <CloseIcon /> }
                >
                  <TextField
                    floatingLabelText="test attribute"
                    floatingLabelFixed={true}
                    defaultValue={ this.props.text }
                  />        
              </ListItem>
            )}
          </List>
        </Card>
      </div>
    );
  }
}

export default TodoList;
