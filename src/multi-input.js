import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, List, ListItem, TextField } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import './multi-input.css';

class MultiInput extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
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

  handleRemove = index => {
    const prevValues = [ ...this.props.values];
    const newValues = prevValues.filter((prevValue, prevIndex) => (
      prevIndex !== index
    ))
    this.props.onChange(newValues);
  }

  render() {
    return (
      <div className="multi-input-wrapper">
        <Card className="multi-input">
          <CardTitle subtitle="Test" className="multi-input-card-title" />
          <div className="multi-input-card-inner">  
            <List>
              {this.props.values.map((value, i) =>
                <ListItem
                  key={ i }
                  className="multi-input-list-item"
                  rightToggle={(
                    <CloseIcon
                      className="multi-input-delete"
                      onClick={ () => this.handleRemove(i) }
                    />
                  )}
                >
                  <TextField
                    floatingLabelText="test attribute"
                    floatingLabelFixed={true}
                    value={ value }
                    onChange={ e => this.handleChange(i, e.target.value) }
                    fullWidth
                  />        
                </ListItem>
              )}
            </List>
          </div>
        </Card>
      </div>
    );
  }
}

export default MultiInput;
