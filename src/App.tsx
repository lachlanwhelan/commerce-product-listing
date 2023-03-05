import { FC, useContext } from "react";
import Header from "./components/header/header.component";
import Loader from "./components/loader/loader.component";
import ProductList from "./components/product-list/product-list.component";
import { ProductsContext } from "./context/ProductContext";


const App: FC = () => {
    const {state} = useContext(ProductsContext);
    const {status} = state;

    if(status === "loading") return <Loader/>
    
    return (
        <div className="App">
            <Header />
            <ProductList/>
        </div>
    )
}

export default App;