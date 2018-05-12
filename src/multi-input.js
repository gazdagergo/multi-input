import React from 'react';
import PropTypes from 'prop-types';
import { List, Card, ListItem, TextField } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close'

class MultiInput extends React.Component {
  static propTypes = {
    toggleinput: PropTypes.func.isRequired,
    updateinput: PropTypes.func.isRequired,
    removeinput: PropTypes.func.isRequired,
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
            {this.state.inputs.map(input =>
                <ListItem
                  key={ input.id }
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
