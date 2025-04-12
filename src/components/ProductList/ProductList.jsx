import { hydrateRoot } from "react-dom/client"
import { Link } from "react-router"

import styles from "./ProductList.module.css"

const ProductList = (props) => {

    return (
        <main className={styles.container}>
            {props.products.map((product) => 
             <Link key={product._id} to={`/products/${product._id}`}>
                <article>
                    <header> 
                        <img src={product.productImage} alt={"product_image_" + product._id} />
                        <div className="detail">
                            <h2>{product.title}</h2>
                            <br />
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                            <p>Stock: {product.stock}</p>  
                            <p>Sell by: {product.author.name}</p>
                        </div>        
                    </header>
                    <p>{product.subtitle}</p>                 
                </article>
             </Link>
            )}
        </main>
    )
}

export default ProductList