import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'


import ShallowWorld from '../components/ShallowWorld'



describe('<ShallowWorld />', () => {

    it('renders without crashing shalloworld', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShallowWorld />, div);
        ReactDOM.unmountComponentAtNode(div);
    });




});