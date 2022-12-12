import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Dropdown} from "../Dropdown";

Enzyme.configure({adapter: new Adapter()});

describe('Dropdown', () => {
  test('Should render', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('button').isEmptyRender()).toBeFalsy();
  })

  test('should render(snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>);
    expect(wrapper).toMatchSnapshot();
  })
})