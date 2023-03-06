import { Card } from "react-bootstrap"
import { product } from "../../context/ProductContext";

const Product : React.FC<product> = ({ productName, isSale, price, productImage}: product) => {
    return (
        <Card className="m-2 position-relative" style={{ width: '19rem', overflow: 'hidden'}}>
            {isSale === true && <span className="position-absolute bg-danger text-white py-1 px-2">SALE</span>}
            <Card.Img data-testid="product-img" variant="top" src={`/images/${productImage}`} alt={productImage} />
            <Card.Body>
                <Card.Title data-testid="product-name">{productName}</Card.Title>
                <Card.Text data-testid="product-price"> {price} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;