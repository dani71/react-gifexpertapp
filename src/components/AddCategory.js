import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //const [inputValue, setInputValue] = useState();// esto da error, porque es undefined
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
        // console.log('HandelInputChange llamado');
    }

    const handleSubmit = (e) => {  
        e.preventDefault();
        if (inputValue.trim().length > 2) { //evita la categoría vacía
            // console.log(setCategories)
            //setCategories((c) => {[...c, e]});
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue(''); // evita el escribir dos veces lo mismo initencionadamente
        };

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}