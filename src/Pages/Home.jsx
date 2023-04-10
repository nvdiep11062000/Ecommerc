import React from 'react';
import Marquee from 'react-fast-marquee';
import BlogCard from '../Component/BlogCard';
import ProductCart from '../Component/ProductCart';
const Home = () => {
    const data_ads_product = [
        {
            status: 'supercharged for prods',
            title: 'special sale',
            description: 'From $999.00 or 41.62/mo. for 24 mo. Footnote',
            src: 'images/main-banner.jpg',
        },
        {
            status: 'best sale',
            title: 'laptop max',
            description: 'From $1699.00 or 64.62/mo.',
            src: 'images/catbanner-01.jpg',
        },
        {
            status: '15% off',
            title: 'smart watch 7',
            description: 'Shop the latest band styles and colors',
            src: 'images/catbanner-02.jpg',
        },
        {
            status: 'new arrivial',
            title: 'buy ipad air',
            description: 'From $599 or 49.91/mo. for 12 mo.',
            src: 'images/catbanner-03.jpg',
        },
        {
            status: 'free engraving',
            title: 'airpod max',
            description: 'High-fidhelity playback & ultra low distortion',
            src: 'images/catbanner-04.jpg',
        },
    ];
    const data_product = [
        {
            name: 'computers & laptop',
            quantity: '8 items',
            src: 'images/laptop.jpg',
        },
        {
            name: 'cameras & videos',
            quantity: '10 items',
            src: 'images/camera.jpg',
        },
        {
            name: 'computers & laptop',
            quantity: '8 items',
            src: 'images/laptop.jpg',
        },
        {
            name: 'smart television',
            quantity: '12 items',
            src: 'images/tv.jpg',
        },
        {
            name: 'watch',
            quantity: '13 items',
            src: 'images/laptop.jpg',
        },
        {
            name: 'gaming',
            quantity: '8 items',
            src: 'images/laptop.jpg',
        },
        {
            name: 'computers & laptop',
            quantity: '8 items',
            src: 'images/laptop.jpg',
        },
        {
            name: 'computers & laptop',
            quantity: '8 items',
            src: 'images/laptop.jpg',
        },
        // {
        //     name: 'computers & laptop',
        //     quantity: '8 items',
        //     src: 'images/laptop.jpg',
        // },
        // {
        //     name: 'computers & laptop',
        //     quantity: '8 items',
        //     src: 'images/laptop.jpg',
        // },
    ];
    const data_brand = [
        {
            src: 'images/brand-01.png',
        },
        {
            src: 'images/brand-02.png',
        },
        {
            src: 'images/brand-03.png',
        },
        {
            src: 'images/brand-04.png',
        },
        {
            src: 'images/brand-05.png',
        },
        {
            src: 'images/brand-06.png',
        },
        {
            src: 'images/brand-07.png',
        },
        {
            src: 'images/brand-08.png',
        },
    ];
    return (
        <>
            <div className="home-wrapper-1">
                <div className="container">
                    {data_ads_product.map((item, index) => (
                        <div key={index} className="ads-product">
                            <img src={item.src} alt="" />
                            <div className="infor">
                                <h4>{item.status}</h4>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-wrapper-2">
                <div className="container">
                    <div className="home-services">
                        <div className="home-service">
                            <img src="images/service.png" alt="service" />
                            <div className="service-des">
                                <h5>Free Shipping</h5>
                                <p>From all orders over 100$</p>
                            </div>
                        </div>
                        <div className="home-service">
                            <img src="images/service-02.png" alt="service" />
                            <div className="service-des">
                                <h5>Daily Suprise Offers</h5>
                                <p>Save up to 25% off</p>
                            </div>
                        </div>
                        <div className="home-service">
                            <img src="images/service-03.png" alt="service" />
                            <div className="service-des">
                                <h5>Support 24/7</h5>
                                <p>Shop with an exxpert</p>
                            </div>
                        </div>
                        <div className="home-service">
                            <img src="images/service-04.png" alt="service" />
                            <div className="service-des">
                                <h5>Affordable Prices</h5>
                                <p>Get factory direct price</p>
                            </div>
                        </div>
                        <div className="home-service">
                            <img src="images/service-05.png" alt="service" />
                            <div className="service-des">
                                <h5>Secure Payment</h5>
                                <p>100% protected payment</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-products">
                        {data_product.map((item, index) => (
                            <>
                                <div className="home-product">
                                    <div className="infor-product">
                                        <h5>{item.name}</h5>
                                        <p>{item.quantity}</p>
                                    </div>
                                    <img src={item.src} alt="pic" />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="featured-collection">
                        <div className="section-heading">
                            <p>Feature Collections</p>
                        </div>
                        <div className="product">
                            <ProductCart image="images/watch.jpg" brand="Sony" rateValue="3" price="$3000" />
                            <ProductCart image="images/tab.jpg" brand="Hublot" rateValue="4" price="$2000" />
                            <ProductCart image="images/tab3.jpg" brand="Sony" rateValue="5" price="$1500" />
                            <ProductCart image="images/tab1.jpg" brand="Samsung" rateValue="3" price="$3000" />
                            <ProductCart image="images/watch.jpg" brand="Sony" rateValue="2" price="$5000" />
                            <ProductCart image="images/watch.jpg" brand="Apple" rateValue="4" price="$3500" />
                        </div>
                    </div>
                    <div className="special-product">
                        
                    </div>
                </div>
            </div>
            <div className="home-wrapper-3">
                <div className="container">
                    <Marquee className="home-brands">
                        {data_brand.map((item, index) => (
                            <>
                                <div className="brand">
                                    <img src={item.src} alt="brand" />
                                </div>
                            </>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className="blog-wrapper">
                <div className="container">
                    <div className="section-heading">
                        <p>Our Latest Blogs</p>
                    </div>
                    <div className="blog">
                        <BlogCard image="images/blog-6.avif" />
                        <BlogCard image="images/blog-2.avif" />
                        <BlogCard image="images/blog-3.avif" />
                        <BlogCard image="images/blog-4.avif" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
