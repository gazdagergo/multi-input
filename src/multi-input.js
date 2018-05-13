import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardActions,
  List,
  ListItem,
  TextField,
  FlatButton,
} from 'material-ui';
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
        <div className="multi-input-card-outer">
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
          </div>
          <CardActions className="multi-input-card-actions">
            <FlatButton label="Cancel" disabled />
            <FlatButton label="Save" primary />
          </CardActions>            
        </Card>
      </div>
    );
  }
}

export default MultiInput;
