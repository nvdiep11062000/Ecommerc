import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image }) => {
    return (
        <>
            <div className="blog-card">
                <div className="card-img">
                    <img src={image} alt="" />
                </div>
                <div className="content">
                    <p className="time"></p>
                    <h3 className="title"> A beautiful sunday Morning renaissance</h3>
                    <p className="describe">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ipsum facilis optio quo
                        tempora velit.
                    </p>
                    <Link className="button">Read More</Link>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
