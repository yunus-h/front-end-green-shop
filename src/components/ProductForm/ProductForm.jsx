import { useState, useEffect } from "react"
import { useParams } from 'react-router'

import * as productService from '../../services/productService'



const ProductForm = (props) => {
    const { productId } = useParams();
    console.log(productId)

    const emptyFormData = {
        title:'',
        subtitle:'',
        category:'Live Plant',
        description:'',
        price:'',
        stock:'',
        productImage:'',
        state:'',
        country:'',
    }

    useEffect(() => {
        const fetchProduct = async () => {
          const productData = await productService.show(productId);
          setFormData(productData);
        };
        if (productId) fetchProduct();
    
        return () => setFormData(emptyFormData);
        
    }, [productId]);

    const [formData, setFormData] = useState(emptyFormData)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productId) {
            props.handleUpdateProduct(productId, formData);
          } else {
            props.handleAddProduct(formData);
          }

    }

    return (
        <main>
            <h1>{productId ? 'Edit Product' : 'New Product'}</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    required
                    name="title"
                    id="title"
                    value={formData.tile}
                    onChange={handleChange}
                />

                <label htmlFor="subtitle">Subtitle: </label>
                <input 
                    type="text" 
                    required
                    name="subtitle"
                    id="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                />

                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="Live Plants">Live Plant</option>
                    <option value="Cutting">Cutting</option>
                    <option value="Seedling">Seedling</option>
                    <option value="Seed">Seed</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Others">Others</option>
                </select>

                <label htmlFor="description">Description: </label>
                <input 
                    type="text" 
                    required
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <label htmlFor="price">Price: </label>
                <input 
                    type="text" 
                    required
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                
                <label htmlFor="stock">Stock: </label>
                <input 
                    type="text" 
                    required
                    name="stock"
                    id="stock"
                    value={formData.stock}
                    onChange={handleChange}
                />

                <label htmlFor="productImage">Image: </label>
                <input 
                    type="text" 
                    name="productImage"
                    id="productImage"
                    value={formData.productImage}
                    onChange={handleChange}
                />

                <button type='submit'>SUBMIT</button>

            </form>
        </main>
    )
}

export default ProductForm