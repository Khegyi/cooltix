import React, { useEffect, useState } from 'react';

const Footer = ( props ) => {
    const [options, setoptions] = useState([]);

    useEffect(() => {
      }, []);

    return (
        <div className="footer">
            <div className="footer_logo">
                <img src="/cooltix_logo_white.svg" alt="cooltix logo bw" />
            </div>

            <div className="copyright">
               <h4>cooltix © 2021</h4>
                
            </div>
            <div className="socialmedia_icons">
                <div className="sm_icon facebook">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="sm_icon linkedin">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="sm_icon instagram">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="sm_icon email">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
};   
 export default Footer;