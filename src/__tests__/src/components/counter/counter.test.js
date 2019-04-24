import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter.js';

describe('<Counter />', () => {
    it('is alive at application startup', () => {
        let app = shallow(<Counter />);
        expect(app.find('a').exists()).toBeTruthy();
    });

    it('subtracts on a down click event', () => {
        let app = mount(<Counter />);
        let button = app.find('.down');
        let number = app.find('span');
        button.simulate('click');
        expect(app.state('count')).toEqual(-1);
        expect(number.text()).toContain(-1);
    });

    it('adds on an up click event', () => {
        let app = mount(<Counter />);
        let button = app.find('.up');
        let number = app.find('span');
        button.simulate('click');
        expect(app.state('count')).toEqual(1);
        expect(number.text()).toContain(1);
    });

    it('renders to the DOM correctly', () => {
        let tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});