import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom'; //para tener la ayuda en el expect
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas sobre <GifGrid />', () => {

    const category = 'One Punch'

    test('Debe ser igual al snapshot ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imágenes con useFecthGifs', () => { //deben ser pruebas unitarias, sin mezclarse con otros elementos => con un mock

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: ' cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    // si está en false no debería existir el párrafo    
    test('si loading está en false no debería existir el párrafo ', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: ' cualquier cosa'
        }, {
            id: 'ABCsasdfas',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: ' cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})
