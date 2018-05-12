import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleTodo, updateTodo, removeTodo, fetchTodos } from "./actions";
import { List, Card, Divider } from 'material-ui';
import TodoListItem from './todo-list-item';
import AddTodo from './todo-add';

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }
    
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <Card className="todo-list">
          <List>
            {this.props.todos.map((todo, i) =>
              <Fragment key={todo.id}>
                <TodoListItem
                  {...todo}
                  onCheck={isChecked => this.props.toggleTodo(todo.id, isChecked)}
                  onUpdate={text => this.props.updateTodo(todo.id, text)}
                  onRemove={() => this.props.removeTodo(todo.id)}
                />
                { this.props.todos.length > i + 1 && <Divider /> }
              </Fragment>
            )}
          </List>
        </Card>
        <AddTodo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () =>  dispatch(fetchTodos()),
  toggleTodo: (id, isChecked) => dispatch(toggleTodo(id, isChecked)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
