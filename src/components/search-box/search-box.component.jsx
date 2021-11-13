import React from 'react';


const SearchBox = ({placeholder,handleChange}) => (
    <form>
        <input type="search" name="search" className="form-control-search"  placeholder={placeholder}  onChange={handleChange} required/>
    </form>
)

export default  SearchBox;