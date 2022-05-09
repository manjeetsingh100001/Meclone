import React from "react";
import './Footer_seller.css';
import {
  FaFacebook,
  FaInstagramSquare,
 
} from 'react-icons/fa';


export default function footer() {
  return (
      <div>
    <div className="container_footer">
      <div className="box1">
        <div>
          <h1><b> Meesho</b></h1>
        </div>
        <div>
          <p className="footer_text_clr">
          Sell your products to crores of customers on<br/> Meesho at 0% commission
          </p>
        </div>
      
      </div>

         <div className="box3">
             <div className="footer_text_clr">
                 <b>Sell on Meesho</b>
             </div>
             <div className="footer_text_clr">
                 <p>Pricing & Commission</p>
             </div>
             <div className="footer_text_clr">
                 <p>How it works</p>
             </div>
             <div className="footer_text_clr">
                 <p>Grow Your Business</p>
             </div>
             <div className="footer_text_clr">
                 <p>Learning Hub</p>
             </div>
         </div>


         <div className="box4">
           <div><h3><b>Contact Us</b></h3></div>
             <div className="socialMedia">
                 

             <a
              href='https://www.instagram.com/meeshoapp/'
            target="_blank">
              <FaInstagramSquare size={30} />
            </a>

                 <a
              href='https://www.facebook.com/meeshosupply'
            target="_blank">
              <FaFacebook size={30} />
            </a>
                
             </div>
         </div>


    </div>            
            
    </div>
  );
}


