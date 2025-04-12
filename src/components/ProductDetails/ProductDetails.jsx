import { useParams, Link } from "react-router"
import { useState, useEffect, useContext } from "react"

import * as productService from '../../services/productService'
import ReviewForm from '../ReviewForm/ReviewForm'

import { UserContext } from "../../contexts/UserContext"

import styles from "./ProductDetails.module.css"

import Loading from "../Loading/Loading"

const ProductDetails = (props) => {
    const { productId } = useParams()

    const { user } = useContext(UserContext);

    const [product, setProduct] = useState(null)

    const handleAddReview = async (reviewFormData) => {
        const newReview = await productService.createReview(productId, reviewFormData);
        setProduct({ ...product, reviews: [...product.reviews, newReview] });
    };

    const handleDeleteReview = async (reviewId) => {
        console.log('reviewId:', reviewId);

        await productService.deleteReview(productId, reviewId)

        const changeProduct = product
        product.reviews = product.reviews.filter((review) => review._id !== reviewId)

        setProduct ({...changeProduct})
    };

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await productService.show(productId)
            setProduct(productData)
        }

        fetchProduct()
    },[productId])

    console.log('product state :', product)

    if (!product) return <Loading />
   
    console.log("product", product)

    return (
        <main className={styles.container}>
            <section>
                <header>
                    <p>Category: {product.category.toUpperCase()}</p>
                    <h1>{product.title}</h1>              
                    <h2>{product.subtitle}</h2>                  
                

                    <div className="info">
                        <div>
                            <img src={product.productImage} alt={"product_image_" + product._id} />
                        </div>
                        
                        <div>
                            <h4>Price: {`$ ${product.price}`}</h4>
                            <h4>Stock: {product.stock = 0? ("SOLD OUT"): product.stock}</h4>
                            
                            <br />
                            <h5>Ship from: {product.author.state}, {product.author.country}</h5>
                            <h5>Sell by: {product.author.name}</h5>
                            <h5>added since: {new Date(product.createdAt).toLocaleDateString()}</h5>
                        </div>
                    </div>
                    <br />
                    <p>{product.description}</p>
                    <br />

                    <div>
                        {product.author._id === user._id ? (
                            <>
                                <Link to={`/products/${productId}/edit`}>Edit Product</Link>
                                <button onClick={() => props.handleDeleteProduct(productId)}>
                                    Delete Product
                                </button>
                            </>
                        ) : (
                            <>
                                <button>Add to cart</button>
                            </>
                    )}
                    </div>                  
                </header>
            </section>

            <section>
                <h1>Reviews: </h1>
                {product.author._id !== user._id && (
                    <>
                        <ReviewForm handleAddReview={handleAddReview}/> 
                    </>
                )}

                {!product.reviews.length && <p>There are no reviews</p>}

                {product.reviews.map((review) => (
                <article key={review._id}>

                    <header>
                        <div>                
                            <p>
                                {`${review.author.name} on ${new Date(review.createdAt).toLocaleDateString()}`}
                            </p>
                            <h4>Rating: {review.rating}</h4>
                            <p>{review.text}</p>
                            <section>
                                {review.author._id === user._id && (
                                <>
                                    <Link to={`/products/${productId}/reviews/${review._id}/edit`}>Edit Review</Link>          

                                    <button onClick={() => handleDeleteReview(review._id)}>
                                    Delete Review
                                    </button>
                                </>
                                )}
                            </section>
                        </div>
                        
                        
                    </header>           

                </article>
                ))}
            </section>
        </main>
    )
}

export default ProductDetails