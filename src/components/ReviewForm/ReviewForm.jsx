import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router'
import * as productService from '../../services/productService'
import styles from "./ReviewForm.module.css"

const ReviewForm = (props) => {

    const [formData, setFormData] = useState({ 
                                        rating: '',
                                        text: '' 
                                    });

    const { productId, reviewId } = useParams();
    console.log(productId, reviewId);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
          const productData = await productService.show(productId);

          setFormData(productData.reviews.find((review) => review._id === reviewId));
        };
        if (productId && reviewId) fetchProduct();
      }, [productId, reviewId]);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (productId && reviewId) {
            productService.updateReview(productId, reviewId, formData);
            navigate(`/products/${productId}`);
          } else {
            props.handleAddReview(formData);
          }
          setFormData({ rating:'',text: '' });
        };

    return (
        <main className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor='rating'>Your rating: </label>
                        <select 
                            name="rating" 
                            id="rating"
                            required
                            value={formData.rating}
                            onChange={handleChange}
                        >
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Good</option>
                            <option value="3">3 - Neutral</option>
                            <option value="2">2 - Bad</option>
                            <option value="1">1 - Very Bad</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='text-input'>Your review:</label>
                        <textarea
                            required
                            type='text'
                            name='text'
                            id='text-input'
                            value={formData.text}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type='submit'>Submit Review</button>
            </form>
        </main>

    );
};

export default ReviewForm;
