import React, { InputHTMLAttributes } from 'react';
import { Container } from './style';
import {FiSearch} from "react-icons/fi"

interface SearchInputProps {
    name: string;
    placeHolder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ name, placeHolder: placeHold}) => {
    return (
        <Container>
            <FiSearch />
            <input type="text" name={name} placeholder={placeHold} />
        </Container>
    );
};

export default SearchInput;
