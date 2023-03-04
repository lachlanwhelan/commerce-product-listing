import { Container } from "react-bootstrap";
import Product from "../product/product.component";


const ProductList = ({products}) => {
    return (
        <Container>
            <section className="d-flex justify-content-center flex-wrap py-4">
                {
                    products.map(product => {
                        /* TODO: create unique key for each product. Should not use product index.*/
                        return <Product key={product.index} {...product}/>
                    })
                }
            </section>
        </Container>
    )
}

export default ProductList;