import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { useRef } from 'react';
const Header = () => {
    const nav_link = [
        {
            display: 'Home',
            path: '/',
        },
        {
            display: 'Our store',
            path: '/ourstore',
        },
        {
            display: 'Blogs',
            path: '/blogs',
        },
        {
            display: 'Contact',
            path: '/contact',
        },
    ];
    const menuRight = useRef(null);
    return (
        <>
            <header className="header">
                <header className="header-top">
                    <div className="container">
                        <div className="header-top-left">
                            <p>Free shipping over $100 & free return</p>
                        </div>
                        <div className="header-top-right">
                            <p>Hotline : +84 0375050478</p>
                            <p>
                                English <AiOutlineDown />
                            </p>
                            <p>
                                USD $ <AiOutlineDown />
                            </p>
                        </div>
                    </div>
                </header>
                <header className="header-bottom">
                    <div className="container">
                        <div className="header-bottom-logo">
                            <h2>
                                <Link>
                                    Shop<label>Tech</label>
                                </Link>
                            </h2>
                        </div>
                        <div className="header-bottom-search">
                            <input type="text" placeholder="Search something here ..." />
                            <button type="submit">
                                <BsSearch />
                            </button>
                        </div>
                        <div className="header-bottom-links">
                            <div>
                                <Link>
                                    <img src="images/compare.svg" alt="compare" />
                                    <p>
                                        Compare
                                        <br /> products
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src="images/wishlist.svg" alt="wishlist" />
                                    <p>
                                        Favourite
                                        <br /> wishlist
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src="images/user.svg" alt="user" />
                                    <p>
                                        Login
                                        <br />
                                        My Account
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src="images/cart.svg" alt="cart" />
                                    <div className="count">
                                        <div className="amount">1</div>
                                        <p>$100.00</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <header className="header-menu">
                    <div className="container">
                        <div className="dropdown">
                            <img src="images/menu.svg" alt="" />
                            <span className="select">Shop categories</span>
                            <AiOutlineDown />
                        </div>
                        <div className="menu" ref={menuRight}>
                            {nav_link.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className={(navClass) => (navClass.isActive ? 'active_menu' : '')}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </header>
            </header>
        </>
    );
};

export default Header;
