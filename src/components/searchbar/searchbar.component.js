import { Button, Form } from "react-bootstrap";

const Searchbar = () => {
    return (
        <Form className="searchbar d-flex">
            <Form.Control
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
    )
}

export default Searchbar;