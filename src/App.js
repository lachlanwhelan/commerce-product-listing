import Header from "./components/header/header.component";
import ProductList from "./components/product-list/product-list.component";


const App = ({products}) => {

    const types = [...new Set(products.map(product => product.type))];

    return (
        <div className="App">
            <Header types={types}/>
            <ProductList products={products}/>
        </div>
    )
}

export default App;