import React from 'react';
import BlogCard from '../Component/BlogCard';
const Blogs = () => {
    return (
        <>
            <div className="blogs">
                <div className="container">
                    <div className="blogs-left">
                        <div className="category">
                            <h3>Shop by category</h3>
                            <div className="menu">
                                <p>Home</p>
                                <p>Our Store</p>
                                <p>Blogs</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="blogs-right">
                        <div className="blog">
                            <BlogCard image="images/blog-6.avif" />
                            <BlogCard image="images/blog-2.avif" />
                            <BlogCard image="images/blog-3.avif" />
                            <BlogCard image="images/blog-4.avif" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
