import { FC, useContext } from "react";
import { Container } from "react-bootstrap";
import { ProductsContext } from "../../context/ProductContext";
import Product from "../product/product.component";
import { product } from "../../context/ProductContext";
/* type product = {
    index: number,
    isSale: boolean,
    price: string,
    productImage: string,
    productName: string,
    type: string
} */

const ProductList: FC = () => {

    const {state} = useContext(ProductsContext);
    
    const {filteredList} = state;

    return (
        <Container>
            <section className="d-flex justify-content-center flex-wrap py-4">
                {
                    filteredList.length === 0

                    ? <h2>Couldn't find that product. Try again.</h2>

                    : filteredList.map((product: product) => {
                        /* TODO: create unique key for each product. Should not use product index.*/
                        return <Product key={product.index} {...product}/>
                    })
                }
            </section>
        </Container>
    )
}

export default ProductList;