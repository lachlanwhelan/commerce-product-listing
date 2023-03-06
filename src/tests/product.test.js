import React from 'react'
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import Product from '../components/product/product.component';

describe("<Product/>", () => {
   
    test("render all product elements", () => {
        render(<Product/>)

        const img = screen.getByTestId("product-img");
        const name = screen.getByTestId("product-name");
        const price = screen.getByTestId("product-price");

        expect(img).toBeInstanceOf(HTMLImageElement);
        expect(name).toBeInstanceOf(HTMLDivElement);
        expect(price).toBeInstanceOf(HTMLParagraphElement);
    })


    
})
