import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'material-ui';
import TodoListItem from './todo-list-item';

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
              <Fragment key={todo.id}>
                <TodoListItem
                  {...todo}
                  onUpdate={text => this.handleUpdate(todo.id, text)}
                  onRemove={() => this.handleRemove(todo.id)}
                />
              </Fragment>
            )}
          </List>
        </Card>
      </div>
    );
  }
}

export default TodoList;
