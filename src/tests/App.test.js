import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import ShallowWorld from '../components/ShallowWorld'



describe('<App />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <App  />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('should render 2 Shalloworld components', () => {
        const wrapper = shallow(<App name="app"/>);

            expect(wrapper.find(ShallowWorld)).toHaveLength(2);
    });
    describe('should render 1 components', () => {
        const component = shallow(<App name="app"/>);
        console.log(component.instance().props);
        expect(component.instance().props.name).toBe('app');
    });


});