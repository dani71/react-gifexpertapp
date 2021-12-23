import React from 'react';
import { shallow } from "enzyme"
import { GifExperApp } from "../GifExpertApp"
// import { GifGrid } from '../components/GifGrid';

describe('Pruebas sobre <GifExperApp />', () => {

    test('Debe coincidir con el snapshot', () => {

        const wrapper = shallow(<GifExperApp />);
        expect(wrapper).toMatchSnapshot();        
    });

    test('debe mostrar una lista de categorías ', () => {

        const categories = ['One punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExperApp defaultCategories={categories}/>);
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
