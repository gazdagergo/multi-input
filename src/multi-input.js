import React from 'react';
import PropTypes from 'prop-types';
import { List, Card, ListItem, TextField } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close'

class MultiInput extends React.Component {
  static propTypes = {
    values: PropTypes.shape({
      value: PropTypes.string,
      onChange: PropTypes.func,
    })
  }

  state = {
    values: null
  }

  handleChange = (index, newValue) => {
    const prevValues = [ ...this.props.values];
    const newValues = prevValues.map((prevValue, prevIndex) => (
      prevIndex === index ? newValue : prevValue
    ));
    this.props.onChange(newValues);
  }

  render() {
    return (
      <div className="multi-input-wrapper">
        <Card className="multi-input">
          <List>
            {this.props.values.map((value, i) =>
              <ListItem
                key={ i }
                rightToggle={ <CloseIcon /> }
              >
                <TextField
                  floatingLabelText="test attribute"
                  floatingLabelFixed={true}
                  value={ value }
                  onChange={ e => this.handleChange(i, e.target.value) }
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
