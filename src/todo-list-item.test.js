import React from 'react';
import TodoListItem from './multi-input-item';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

const muiTheme = getMuiTheme();

const mountWithContext = (node) => mount(node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: PropTypes.object},
});

describe('<TodoListItem />', () => {
  const props = {
    id: 0,
    completed: true,
    text: 'waaa',
    onUpdate: jest.fn(),
    onCheck: jest.fn(),
  };
  
  it('should be mounted with required props', () => {
    mountWithContext(
      <TodoListItem { ...props } />
    );
  });

  it('should show the text', () => {
    const wrapper = shallow(<TodoListItem { ...props } />);
    expect(wrapper.find('div.multi-input-item-text').exists()).toBe(true); 
    expect(wrapper.find('div.multi-input-item-text').text()).toBe('waaa');
  });

  it('checkbox should show the completed prop', () => {
    const wrapper = mountWithContext(<TodoListItem { ...props } />);
    expect(wrapper.find('input[type="checkbox"]').instance().checked).toBe(true); 
    wrapper.setProps({ completed: false });
    expect(wrapper.find('input[type="checkbox"]').instance().checked).toBe(false); 
  });

  it('onUpdate should be called with id and new input value', () => {
    const onUpdate = jest.fn();

    const props = {
      id: 0,
      completed: true,
      text: 'waaa',
      onUpdate,
      onCheck: jest.fn(),
    };
    const wrapper = mountWithContext(<TodoListItem { ...props } />);
    const instance = wrapper.instance();
    instance.handleUpdate('new value');
    expect(onUpdate.mock.calls[0]).toMatchObject(['new value']);
  });
});
