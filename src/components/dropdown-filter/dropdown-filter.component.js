import { Form } from "react-bootstrap";

const DropdownFilter = ({types}) => {
    return(
      <Form.Group className="dropdown-filter">
          <Form.Label  className="me-2" htmlFor="type-select">Filter by</Form.Label>
          <Form.Select id="type-select">
            <option value="All">All</option>
            {
              types.map(type => {
                return <option key={type} value={type}>{type}</option>
              })
            }
          </Form.Select>
      </Form.Group>
    )
}

export default DropdownFilter;