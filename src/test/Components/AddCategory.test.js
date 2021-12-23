import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom'; //para tener la ayuda en el expect



describe('Pruebas en <AddCategory />', () => {

    // const dummyFunc = () => { ; }
    const setCategories = jest.fn(); //así jest permite escribir menos códgio, porque no tengo que saber de donde viene y como esta función
    let wrapper;// = shallow(<AddCategory setCategories={setCategories} />); //hay que mandar una función, antes dummyFunc

    beforeEach( () => { //inicializa antes de casa test
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente, snapshot ', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto ', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo'

        input.simulate('change', { target: { value: value } });
    });

    // si no hay posteo de información no se debe llamar a las funciones...
    test('No de postear la información con submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        // NO hemos mandado ningún valor, así que NO se tiene que disparar inputValue NI diparar serCategory. Para estos sirve jest.fn()
        expect(setCategories).not.toHaveBeenCalled();
    });

    //tarea: 
    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
        // 1. simular el inputChange
        const input = wrapper.find('input')
        const value = 'sobrasada'; // tiene que ser de longitud mayor a 2 para disparar la llamada

        input.simulate('change', { target: { value: value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { inputValue:value} });

        // 3. deben haber llamado al setCategories
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function)); //Que sea una función cualquiera.

        // 4. el value debe de estar ''
        // console.log('algo', input.text());

        expect( input.text()).toBe('');
        expect( wrapper.find('input').prop('value')).toBe(''); //equivalente

    });
});
