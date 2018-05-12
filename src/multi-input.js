import React from 'react';
import PropTypes from 'prop-types';
import { List, Card, ListItem, TextField } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close'

class MultiInput extends React.Component {
  static propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }
    
  state = {
    inputs: [
      {id: 'aaa', text: 'bbb'},
      {id: 'ccc', text: 'bbb'},
    ]
  }
  render() {
    return (
      <div className="multi-input-wrapper">
        <Card className="multi-input">
          <List>
            {this.state.inputs.map(todo =>
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

export default MultiInput;