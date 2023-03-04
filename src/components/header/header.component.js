import { Container } from "react-bootstrap";
import DropdownFilter from "../dropdown-filter/dropdown-filter.component";
import Searchbar from "../searchbar/searchbar.component";

import "./header.style.scss";

const Header = ({types}) => {
    return (
        <header className="header px-2 py-3 bg-light">
            <Container className="header__inner">
                <h3 className="header__title">Commerce Product Listing</h3>
                <div className="header__group">
                    <Searchbar/>
                    <DropdownFilter types={types}/>
                </div>
            </Container>
        </header>
    )
}


export default Header;