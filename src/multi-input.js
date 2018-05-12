import React from 'react';
import PropTypes from 'prop-types';
import { List, Card, ListItem, TextField } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close'

class MultiInput extends React.Component {
  static propTypes = {
    values: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    })
  }

  render() {
    return (
      <div className="multi-input-wrapper">
        <Card className="multi-input">
          <List>
            {this.props.values.map(input =>
                <ListItem
                  key={ input.id }
                  rightToggle={ <CloseIcon /> }
                >
                  <TextField
                    floatingLabelText="test attribute"
                    floatingLabelFixed={true}
                    defaultValue={ input.value }
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
