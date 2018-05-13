import React from 'react';
import MultiInput from './multi-input';
import { mount, shallow, render } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

const muiTheme = getMuiTheme();

const mountWithContext = (node) => mount(node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: PropTypes.object},
});

const findInputs = wrapper => {
  return wrapper
  .find('div.multi-input-list')
  .children()
  .find('label.multi-input-list-item-existing')
  .children()
  .find('input');
}

describe('<MultiInput />', () => {
  it('should be mounted with required props', () => {
    mountWithContext(<MultiInput onChange={ jest.fn() } />);
  });

  it('should be able to be updated at any time via its props', () => {
    const props = {
      onChange: jest.fn(),
      values: ['v0', 'v1'],
    };

    const wrapper = mountWithContext(<MultiInput { ...props } />)
    let inputs = wrapper
      .find('div.multi-input-list')
      .children()
      .find('label.multi-input-list-item-existing')
      .children()
      .find('input');

    expect(inputs.get(0).props.value).toBe('v0');
    expect(inputs.get(1).props.value).toBe('v1');

    wrapper.setProps({ values: ['v2', 'v3'] });
    wrapper.update();

    inputs = findInputs(wrapper);

    expect(inputs.get(0).props.value).toBe('v2');
    expect(inputs.get(1).props.value).toBe('v3');
    // console.log(wrapper.instance());
    
  });

  it('Delete items: clicking on the X', () => {
    const props = {
      onChange: jest.fn(),
      values: ['v0', 'v1'],
    };

    const wrapper = mountWithContext(<MultiInput { ...props } />)
    let inputs = findInputs(wrapper);

    expect(inputs.get(0).props.value).toBe('v0');
    expect(inputs.get(1).props.value).toBe('v1');

    wrapper.find('svg.multi-input-delete').at(1).simulate('click');

    inputs = findInputs(wrapper);

    expect(inputs.get(0).props.value).toBe('v0');
    expect(inputs.get(1)).toBe(undefined);
  });
})