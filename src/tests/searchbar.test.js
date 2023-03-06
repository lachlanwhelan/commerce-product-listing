import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { describe } from 'node:test';
import SearchBar from '../components/searchbar/searchbar.component';


describe("<Searchbar/>", () => {
   
    test("render all searchbar elements", () => {
        render(<SearchBar/>)

        const form = screen.getByTestId("form");
        const input = screen.getByTestId("form-input");
        const button = screen.getByTestId("form-button");

        expect(form).toBeInstanceOf(HTMLFormElement);
        expect(input).toBeInstanceOf(HTMLInputElement);
        expect(button).toBeInstanceOf(HTMLButtonElement);
    })
    
    test("call onSubmit when button is clicked", () => {
        render(<SearchBar/>)

        const button = screen.getByTestId("form-button");

        fireEvent.submit(button);
    })

    test("call onChange when text entered", () => {
        render(<SearchBar/>)
        const input = screen.getByTestId("form-input");

        fireEvent.change(input, {
            value: "test"
        });
    })
})
