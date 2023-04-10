import React from 'react';
import { BsFillHouseFill, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.0960068130544!2d105.78394800822988!3d21.017003584218315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab54df748467%3A0xbce19e4662752253!2sInterContinental%20Hanoi%20Landmark!5e0!3m2!1svi!2s!4v1678328122497!5m2!1svi!2s"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="contact-wrapper">
                        <div className="form-contact">
                            <p>Contact</p>
                            <form className="form">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Phone number" />
                                <textarea name="" id="" placeholder="Comment"></textarea>
                            </form>
                            <button className="button">Submit</button>
                        </div>
                        <div className="with-us">
                            <p>Get In Touch With Us</p>
                            <div className="with-us-infor">
                                <p>
                                    <BsFillHouseFill className="logo" />
                                    Quynh Tho, Quynh Phu, Thai Binh, Viet Nam, Pincode : 11062000
                                </p>
                                <p>
                                    <BsFillTelephoneFill className="logo" />
                                    +84 375050478
                                </p>
                                <p>
                                    <AiFillMail className="logo" />
                                    nvdiep11062000@gmail.com
                                </p>
                                <p>
                                    <MdWork className="logo" />
                                    Monday - Friday 8AM - 5PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
