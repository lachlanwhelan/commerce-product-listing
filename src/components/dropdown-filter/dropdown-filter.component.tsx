import React, { FC, useContext } from "react";
import { Form } from "react-bootstrap";
import { ProductsContext } from "../../context/ProductContext";
import { product } from "../../context/ProductContext";

const DropdownFilter: FC = () => {

  const {state, filterByType}  = useContext(ProductsContext);
  const types = [...new Set(state.productList.map((product: product) => product.type))];

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      filterByType(e.target.value)
  }

    return (
      <Form.Group className="dropdown-filter">
          <Form.Label  className="me-2" htmlFor="type-select">Filter by</Form.Label>
          <Form.Select id="type-select" onChange={handleOnChange}>
            <option value="All">All</option>
            {
              types.map((type: string) => {
                return <option key={type} value={type}>{type}</option>
              })
            }
          </Form.Select>
      </Form.Group>
    )
}

export default DropdownFilter;