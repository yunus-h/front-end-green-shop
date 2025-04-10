import { hydrateRoot } from "react-dom/client"
import { Link } from "react-router"

const ProductList = (props) => {

    return (
        <main>
            {props.products.map((product) => 
             <Link key={product._id} to={`/products/${product._id}`}>
                <article>
                    <header>
                        
                        <h2>{product.title}</h2>
                        <img src={product.productImage} alt={"product_image_" + product._id} />
                        <p>{product.subtitle}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}.00</p>
                        <p>Stock: {product.stock}</p>  

                    </header>
                </article>
             </Link>
            )}
        </main>
    )
}

export default ProductList