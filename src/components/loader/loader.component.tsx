import { FC } from "react";
import { Spinner } from "react-bootstrap";

import "./loader.style.scss";

const Loader : FC = () => {
    return (
        <div className="loader-container d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
        </div>
    )
}


export default Loader;