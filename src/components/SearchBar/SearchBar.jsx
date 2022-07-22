import { useState } from "react";

export const Searchbar = ({ onSubmit }) => {    
    const [inputValue, setInputValue] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        handleFormReset();
    }
    
    const handleInputChange = (e) => {
        const { value } = e.currentTarget;
        setInputValue(value);
    }

    const handleFormReset = () => {
        setInputValue('');
    }
  
    return (
        <form onSubmit={handleFormSubmit}>  
            <input
                onChange={handleInputChange}
                name="inputText"
                className="input"
                type="text"
                placeholder="Search images and photos"
                value={inputValue}
            />
            <button type="submit">Search
                {/* <Icon/> */}
            </button>
        </form>
    )
    
}