import { useParams, Link } from "react-router"
import { useState, useEffect, useContext } from "react"

import * as productService from '../../services/productService'
import ReviewForm from '../ReviewForm/ReviewForm'

import { UserContext } from "../../contexts/UserContext"

const ProductDetails = (props) => {
    const { productId } = useParams()

    const { user } = useContext(UserContext);

    const [product, setProduct] = useState(null)

    //

    const handleAddReview = async (reviewFormData) => {
        const newReview = await productService.createReview(productId, reviewFormData);
    setProduct({ ...product, reviews: [...product.reviews, newReview] });
    };

  

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await productService.show(productId)
            setProduct(productData)
        }

        fetchProduct()
    },[productId])

    console.log('product state :', product)

    if (!product) return <main>Loading...</main>

    return (
        <main>
            <section>
                <header>
                    <p>Product Category: {product.category.toUpperCase()}</p>
                    <h1>{product.title}</h1>
                    <h2>{product.subtitle}</h2>
                    <p>Sell by: {product.author.name}</p>
                    <p>since: {new Date(product.createdAt).toLocaleDateString()}</p>
                </header>
                <img src={product.productImage} alt={"product_image_" + product._id} />
                <p>{product.description}</p>
                <p>Price: {`$${product.price}.00`}</p>
               
                <p>Stock: {product.stock = 0? ("SOLD OUT"): product.stock}</p>
                <p>Ship from: {product.author.state}, {product.author.country}</p>

                {/* {product.author._id === user._id && (
                    <>
                        <button onClick={() => props.handleDeleteProduct(productId)}>
                            Delete This Product
                        </button>
                    </>
                )} */}

                <div>
                    {product.author._id === user._id ? (
                        <>
                            <Link to={`/products/${productId}/edit`}>Edit</Link>

                            <button onClick={() => props.handleDeleteProduct(productId)}>
                                Delete This Product
                            </button>
                        </>
                    ) : (
                        <>
                            <button>Add to cart</button>
                        </>
                )}
                </div>
                


            </section>

            <section>
                {product.author._id !== user._id && (
                    <>
                        <h2>Review: </h2>
                        <ReviewForm handleAddReview={handleAddReview}/> 
                    </>
                )}

                {!product.reviews.length && <p>There are no reviews</p>}

                {product.reviews.map((review) => (
                <article key={review._id}>
                    <header>
                        <p>
                        {`${review.author.name} on ${new Date(review.createdAt).toLocaleDateString()}`}
                        </p>
                        </header>
                        <p>Rating: {review.rating}</p>
                        <p>{review.text}</p>
                </article>
                ))}
            </section>
        </main>
    )
}

export default ProductDetails