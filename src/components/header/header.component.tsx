import { FC } from "react";
import { Container } from "react-bootstrap";
import DropdownFilter from "../dropdown-filter/dropdown-filter.component";
import Searchbar from "../searchbar/searchbar.component";

import "./header.style.scss";

const Header: FC = () => {
    return (
        <header data-testid="header" className="header px-2 py-3 bg-light">
            <Container data-testid="header-inner" className="header__inner">
                <h3  data-testid="header-title" className="header__title">Commerce Product Listing</h3>
                <div data-testid="header-group" className="header__group">
                    <Searchbar/>
                    <DropdownFilter />
                </div>
            </Container>
        </header>
    )
}


export default Header;