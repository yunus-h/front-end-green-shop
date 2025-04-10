import { Routes, Route, useNavigate } from 'react-router' ;


import { useContext, useState, useEffect } from 'react';

import NavBar from './components/Navbar/Navbar';
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Mode from './components/Mode/Mode';
import { UserContext } from './contexts/UserContext'; 
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductForm from './components/ProductForm/ProductForm';

import * as productService from './services/productService'


const App = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async() => {
      const productsData = await productService.index()
      setProducts(productsData)
    }

    if (user) fetchAllProducts()

  }, [user])

  const handleAddProduct = async(productFormData) => {
    const newProduct = await productService.create(productFormData)

    setProducts([newProduct, ...products])
    navigate('/products');
  }

  const handleDeleteProduct = async (productId) => {
    console.log('productId', productId);
    setProducts(products.filter((product) => product._id !== productId));
    navigate('/products');
  };

  const handleUpdateProduct = async (productId, productFormData) => {
    const updatedProduct = await productService.update(productId, productFormData);
    setProducts(products.map((product) => (productId === product._id ? updatedProduct : product)));
    navigate(`/products/${productId}`);
  };

  return (
    <>
      <Header />
      <Mode />
      <NavBar />
 
      <Routes>
        
        <Route path='/' element={user? <Dashboard /> : <Landing />} />
        {user? (
          <>
            <Route 
              path='/products' 
              element={<ProductList products={products}/>} 
            />

            <Route 
              path='/products/:productId' 
              element={<ProductDetails />} 
            />

            <Route 
              path='/products/new' 
              element={<ProductForm handleAddProduct={handleAddProduct}/>} 
            />

            <Route 
              path='/products/:productId'
              element={<ProductDetails handleDeleteProduct={handleDeleteProduct}/>} 
            />

            <Route
              path='/products/:productId/edit'
              element={<ProductForm handleUpdateProduct={handleUpdateProduct}/>}
            />
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}

      </Routes>
    </>
  );
};

export default App;