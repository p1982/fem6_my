import React, {useState} from 'react';
import './App.css';
import AddProductForm from './client/AddProductForm/component/AddProductForm';
import ProductList from './client/AddProductForm/component/ProductList';

function App() {
  const [products, setProducts] = useState([])
  
  const addProduct =(newProduct)=> {
      setProducts([...products, newProduct])
  }
  console.log(products);
  return (
    <>
   <AddProductForm addProduct={addProduct}/>
   <ProductList products={products}/>
   </>
  );
}

export default App;
