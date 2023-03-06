import { FC, useContext } from "react";
import Header from "./components/header/header.component";
import Loader from "./components/loader/loader.component";
import ProductList from "./components/product-list/product-list.component";
import { ProductsContext } from "./context/ProductContext";


const App: FC = () => {
    const {state} = useContext(ProductsContext);
    const {status} = state;

    if(status === "loading") return <Loader/>

    if(status === 'failed') return <h1>Something went wrong</h1>
    
    return (
        <div className="App" data-testid="app">
            <Header/>
            <ProductList/>
        </div>
    )
}

export default App;