import React, { FC, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ProductsContext } from "../../context/ProductContext";

import './searchbar.style.scss';

const Searchbar: FC = () => {
  const [searchText, setSearchText] = useState('');

  const {filterByName} = useContext(ProductsContext);

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if(e.target.value === '') filterByName('');
  }

  const handleOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterByName(searchText.toLocaleLowerCase());
  }

  return (
      <Form data-testid="form" className="searchbar d-flex" onSubmit={handleOnSubmit}>
          <Form.Control
          className="searchbar__input me-2"
            data-testid="form-input"
            type="text"
            placeholder="Search products by name"
            aria-label="Search"
            onChange={handleOnChange}
            value={searchText}
          />
          <Button data-testid="form-button" type='submit' variant="primary">Search</Button>
      </Form>
  )
}

export default Searchbar;