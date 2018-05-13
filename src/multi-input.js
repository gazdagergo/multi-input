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

  static getDerivedStateFromProps(nextProps) {
    const { values } = nextProps;
    return { values };
  }

  handleChange = (index, newValue) => {
    this.setState(prevState => {
      const values = prevState.values.map((prevValue, prevIndex) => (
        prevIndex === index ? newValue : prevValue
      ));
      return { values };      
    });
  }

  handleRemove = index => {
    this.setState(prevState => {
      const values = prevState.values.filter((prevValue, prevIndex) => (
        prevIndex !== index
      ))
      return { values };      
    });    
  }

  handleSave = () => {
    this.props.onChange(this.state.values);
  }

  render() {
    return (
      <div className="multi-input-wrapper">
        <Card className="multi-input">
        <div className="multi-input-card-outer">
          <CardTitle subtitle="Test" className="multi-input-card-title" />
            <div className="multi-input-card-inner">
              <List>
                {this.state.values.map((value, i) =>
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
            <FlatButton label="Save" onClick={ this.handleSave } primary />
          </CardActions>            
        </Card>
      </div>
    );
  }
}

export default MultiInput;
