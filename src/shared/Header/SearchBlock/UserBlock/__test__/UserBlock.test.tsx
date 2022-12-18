import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {UserBlock} from "../UserBlock";

Enzyme.configure({adapter: new Adapter()});

describe("UserBlock",()=>{
  test("Should render without props",()=>{
    const wrapper = shallow(<UserBlock />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('Icon').isEmptyRender()).toBeFalsy();
  })
  test("Should render with props",()=>{
    const wrapper = shallow(<UserBlock avatarSrc={"http://test"}/>);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('img').isEmptyRender()).toBeFalsy();
  })
})
