import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { describe } from 'node:test';
import DropdownFilter from '../components/dropdown-filter/dropdown-filter.component';


describe("<DropdownFilter/>", () => {
   
    test("render all dropdown filter elements", () => {
        render(<DropdownFilter/>)

        const label = screen.getByTestId("form-label");
        const select = screen.getByTestId("form-select");

        expect(label).toBeInstanceOf(HTMLLabelElement);
        expect(select).toBeInstanceOf(HTMLSelectElement);
    })

    test("call onChange when option is selected", () => {
        render(<DropdownFilter/>)

        const select = screen.getByTestId("form-select");

        fireEvent.change(select, {
            target: {value: "Beer"}
        });
    })
})
