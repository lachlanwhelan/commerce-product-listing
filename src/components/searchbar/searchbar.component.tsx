import React, { FC, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ProductsContext } from "../../context/ProductContext";

const Searchbar: FC = () => {
  const [searchText, setSearchText] = useState('');

  const {filterByName} = useContext(ProductsContext);

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const handleOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterByName(searchText.toLocaleLowerCase());
  }

  return (
      <Form className="searchbar d-flex" onSubmit={handleOnSubmit}>
          <Form.Control
            type="text"
            placeholder="Search products"
            className="me-2"
            aria-label="Search"
            onChange={handleOnChange}
            value={searchText}
          />
          <Button type='submit' variant="primary">Search</Button>
        </Form>
  )
}

export default Searchbar;