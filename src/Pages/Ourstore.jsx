import React from 'react';
import ProductCart from '../Component/ProductCart';
import ReactStars from 'react-rating-stars-component';
const Ourstore = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className="our-store">
                <div className="container">
                    <div className="our-store-left">
                        <div className="category">
                            <h3>Shop by category</h3>
                            <div className="menu">
                                <p>Home</p>
                                <p>Our Store</p>
                                <p>Blogs</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="filter">
                            <h3>Filter By</h3>
                            <div className="availability">
                                <p>Availability</p>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>In stock (21)</span>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>Out of stock (1)</span>
                                </div>
                            </div>
                            <div className="price">
                                <p>Price</p>
                                <div className="form">
                                    <div className="form-price">
                                        <label>$</label>
                                        <input type="text" placeholder="From" />
                                    </div>
                                    <div className="form-price">
                                        <label>$</label>
                                        <input type="text" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                            <div className="colors">
                                <p>Color</p>
                                <div className="color">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="size">
                                <p>Size</p>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>S (2)</span>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>M (0)</span>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>L (0)</span>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>XL (3)</span>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="" />
                                    <span>XXL (7)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-tags">
                            <p>Product Tag</p>
                            <div className="tag">
                                <label>Headphone</label>
                                <label>Laptop</label>
                                <label>Mobbile</label>
                                <label>Watch</label>
                                <label>Computer</label>
                                <label>Samsung</label>
                                <label>Apple</label>
                            </div>
                        </div>
                        <div className="random-product">
                            <p>Random Product</p>
                            <div className="random">
                                <img src="images/headphone.jpg" alt="pic" />
                                <div className="infor-product">
                                    <h3 className="name-product">Kid Headphone Bulk 10 Pack Color for...</h3>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="price">$3000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-store-right">
                        <div className="our-store-right-top">
                            <div className="sort-by">
                                Sort by :
                                <select name="Best selling" id="1">
                                    <option value="Best Selling">Best Selling</option>
                                </select>
                            </div>
                            <div className="count-product">21 product</div>
                        </div>
                        <div className="our-store-right-bottom">
                            <ProductCart image="images/watch.jpg" brand="Sony" rateValue="3" price="$3000" />
                            <ProductCart image="images/tab.jpg" brand="Hublot" rateValue="4" price="$2000" />
                            <ProductCart image="images/tab3.jpg" brand="Sony" rateValue="5" price="$1500" />
                            <ProductCart image="images/tab1.jpg" brand="Samsung" rateValue="3" price="$3000" />
                            <ProductCart image="images/watch.jpg" brand="Sony" rateValue="2" price="$5000" />
                            <ProductCart image="images/watch.jpg" brand="Apple" rateValue="4" price="$3500" />
                            <ProductCart image="images/watch.jpg" brand="Sony" rateValue="3" price="$3000" />
                            <ProductCart image="images/tab.jpg" brand="Hublot" rateValue="4" price="$2000" />
                            <ProductCart image="images/tab3.jpg" brand="Sony" rateValue="5" price="$1500" />
                            <ProductCart image="images/tab1.jpg" brand="Samsung" rateValue="3" price="$3000" />
                            <ProductCart image="images/watch.jpg" brand="Sony" rateValue="2" price="$5000" />
                            <ProductCart image="images/watch.jpg" brand="Apple" rateValue="4" price="$3500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ourstore;
