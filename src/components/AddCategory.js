import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setcategories,categories}) => {
    const [inputValue, setinputValue] = useState('')
    const handleChange=(e)=>{
setinputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();  
     
      if(inputValue!==""){
        setcategories([inputValue,...categories]);
        setinputValue('')
      }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={inputValue}
            onChange={handleChange}
            />
        </form>

    )
}

AddCategory.propTypes={
   setcategories:PropTypes.func.isRequired
}