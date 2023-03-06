import React from 'react'
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import Header from '../components/header/header.component';

describe("<Header/>", () => {
   
    test("render all header elements", () => {
        render(<Header/>)

        const header = screen.getByTestId("header");
        const headerInner = screen.getByTestId("header-inner");
        const headerTitle = screen.getByTestId("header-title");
        const headerGroup = screen.getByTestId("header-group");

        expect(header).toBeInstanceOf(HTMLElement);
        expect(headerInner).toBeInstanceOf(HTMLDivElement);
        expect(headerTitle).toBeInstanceOf(HTMLHeadingElement);
        expect(headerGroup).toBeInstanceOf(HTMLDivElement);
    })
})
