import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';
const ProductCart = ({ brand, rateValue, image, price }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className="product-cart">
                <div className="heart">
                    <BsHeart />
                </div>
                <div className="img-product">
                    <img src={image} alt="" />
                </div>
                <div className="infor-product">
                    <p className="brand">{brand}</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value={rateValue}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <h3 className="name-product">Kid Headphone Bulk 10 Pack Color for...</h3>
                    <p className="price">{price}</p>
                </div>
                <div className="action-bar">
                    <Link>
                        <img src="images/prodcompare.svg" alt="" />
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="" />
                    </Link>
                    <Link>
                        <img src="images/add-cart.svg" alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCart;
