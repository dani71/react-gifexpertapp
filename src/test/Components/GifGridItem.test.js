import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';

// import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'http://localhost/algo.jpg'

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente', () => {
        // const wrapper = shallow(<GifGridItem title={title} url={url} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el título', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tene la imagen igual al url y al de los propos ', () => {

        const img = wrapper.find('img');
        // console.log(img.html())
        // console.log(img.props())
        // console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener la clase animate__fadeIn', () => {

        const div = wrapper.find('div')
        const className = div.prop('className');

        expect(div.prop('className')).toContain('animate__fadeInDown');
        expect(className.includes('animate__fadeInDown')).toBe(true);       //es lo mismo pero de otra manera
    });

});
