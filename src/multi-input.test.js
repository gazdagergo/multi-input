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

  it('onChange should be called with an array of the actual items', () => {
    const mockCallback = jest.fn();

    const props = {
      onChange: mockCallback,
      values: ['v4', 'v5'],
    };

    const wrapper = mountWithContext(<MultiInput { ...props } />);
    const saveButton = wrapper.find('button.multi-input-save');
    saveButton.simulate('click');

    expect(mockCallback.mock.calls[0][0]).toMatchObject(['v4', 'v5']);
  });

  it('Add new item: simply clicking into the empty input and typing into it', () => {
    const mockCallback = jest.fn();

    const props = {
      onChange: mockCallback,
      values: ['v6', 'v7'],
    };

    const wrapper = mountWithContext(<MultiInput { ...props } />);
    expect(wrapper.state().values).toMatchObject(['v6', 'v7']);

    const input = wrapper.find('div.multi-input-list-item-add').children().find('input');
    // input.simulate('click');
    // input.simulate('keyDown', { key: 'v' });
    input.simulate('change', { target: { value: 'Hello' } })

    console.log(wrapper.state());

  });
})