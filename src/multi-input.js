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
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    values: [],
  }

  state = {
    values: null,
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

  handleAddNew = e => {
    const { value } = e.target;
    const { length } = this.state.values;
    this.setState(prevState => {
      const values = prevState.values.concat(value);
      return { values };
    }, () => this['input' + length].focus());
  }

  setInputRef = (ref, i) => {
    this['input' + i] = ref;
  }

  setNewInputRef = ref => {
    this.newInput = ref;
  }

  render() {
    return (
      <div className="multi-input-wrapper">
        <Card className="multi-input">
        <div className="multi-input-card-outer">
          <CardTitle subtitle="Test" className="multi-input-card-title" />
            <List className="multi-input-list">
              {this.state.values.map((value, i) =>
                <ListItem
                  key={ i }
                  className="multi-input-list-item multi-input-list-item-existing"
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
                    ref={ ref => {
                      this.setInputRef(ref, i);
                    } }
                  />
                </ListItem>
              )}
              <ListItem
                className="multi-input-list-item multi-input-list-item-add"
                disabled
              >
                <TextField
                  hintText="test attribute"
                  fullWidth
                  ref={ this.setNewInputRef }
                  onChange={ this.handleAddNew }
                  value=""
                />
              </ListItem>                
            </List>
          </div>
          <CardActions className="multi-input-card-actions">
            <FlatButton label="Cancel" disabled />
            <FlatButton label="Save" className="multi-input-save" onClick={ this.handleSave } primary />
          </CardActions>            
        </Card>
      </div>
    );
  }
}

export default MultiInput;
