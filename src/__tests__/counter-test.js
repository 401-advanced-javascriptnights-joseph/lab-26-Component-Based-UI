import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

describe('<Counter />', () => {
  it('is alive at start', () => {
    let component = shallow(<Counter />);
    expect(component.find('span').exists()).toBeTruthy();
  });

  it('counter decrements when minus sign is clicked', () => {
    let component = mount(<Counter />);
    let button = component.find('#decrement');
    button.simulate('click');
    expect(component.state('count')).toBe(-1);
  });

  it('counter increment when plus sign is clicked', () => {
    let component = mount(<Counter />);
    let button = component.find('#increment');
    button.simulate('click');
    expect(component.state('count')).toBe(+1);
  });

  it('counter decrements when minus sign is clicked', () => {
    let component = mount(<Counter />);
    let displayElement = component.find('span');
    expect(displayElement.text()).toContain(`Count:`)
  });

  it('counter increment when plus sign is clicked', () => {
    let component = mount(<Counter />);
    let displayElement = component.find('span');
    expect(displayElement.text()).toContain('Count:')
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});