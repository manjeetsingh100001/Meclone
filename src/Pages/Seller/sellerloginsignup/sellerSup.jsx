import React from 'react';
import { useState } from "react";
import "./sellerSup.css"

 const SellerSup = () =>{

    const [eml,setEml] = useState("");

    const [pss,setPss] = useState("")

    console.log(eml,pss)

    const handlecreate = () =>{


        const payload = {

            

        }


    }

    return(
        <div className="ssupmn">
            <div className="ssupwpr">
                <div className="ssupnv">

                    <div>
                        <img src="https://supplier.meesho.com/panel/v2/new/static/fonts/MeeshoLogo.svg" alt="" />
                    </div>

                    <button>Login</button>

                </div>

                <div className="ssupcnt">

                    <div className="ssuplt">
                        <div className="ltwpr">
                            <h3>Welcome to Meesho</h3>
                            <p>Create your account to start selling</p>

                            <div className="ltinps">
                                <input type="number" placeholder="Mobile Number" />
                                <input type="text" placeholder="Email id" onChange={(e)=>{setEml(e.target.value)}}/>
                                <input type="text" placeholder="Set Password" onChange={(e)=>{setPss(e.target.value)}} />
                            </div>
                            <div className="inpgd">
                                <div className="gdlt">
                                    <div>
                                        <div className="dgot"></div>
                                        <p>Minimum 8 characters </p>
                                    </div>
                                    <div>
                                        <div className="dgot"></div>
                                        <p>1 Specific Character  </p>
                                    </div>
                                </div>
                                <div className="gdrt">

                                <div>
                                        <div className="dgot"></div>
                                        <p>1 Capital letter </p>
                                    </div>
                                    <div>
                                        <div className="dgot"></div>
                                        <p>1 Number  </p>
                                    </div>

                                </div>
                            </div>

                            <div className="inpbtn">
                                <div>
                                    <input type="checkbox" />
                                    <p>I want to receive important updates on <b>WatsApp</b></p>
                                </div>
                                <button onClick={handlecreate} >Create account</button>
                                <p>By clicking you agree our <a href="#">Terms & conditions</a> and <a href="#">Privacy Policy</a></p>
                            </div>

                        </div>
                    </div>
                    <div className="ssuprt">

                        <div className="rtone">
                            <div>
                                <h3>Grow your Business faster by selling on Meesho</h3>
                                <div className="suppflxit">
                                    <div>
                                        <div className="suppcard">
                                            <img src="https://supplier.meesho.com/panel/v2/new/static/fonts/ResellerIcon.svg" alt="" />
                                            <div>
                                                <h3>4 lakh+</h3>
                                                <p>Suppliers and selling commision-fee</p>
                                            </div>
                                        </div>
                                        <div className="suppcard">
                                            <img src="https://supplier.meesho.com/panel/v2/new/static/fonts/Customer_icon.svg" alt="" />
                                            <div>
                                                <h3>10 Crore+</h3>
                                                <p>Customers buy across India</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="suppcard">
                                            <img src="https://supplier.meesho.com/panel/v2/new/static/fonts/Pincode_icon.svg" alt="" />
                                            <div>
                                                <h3>27,000+</h3>
                                                <p>Pincodes supported for delivery</p>
                                            </div>
                                        </div>
                                        <div className="suppcard">
                                            <img src="https://supplier.meesho.com/panel/v2/new/static/fonts/Category_Icon.svg" alt="" />
                                            <div>
                                                <h3>700+</h3>
                                                <p>Categories to sell</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rtow">
                            <div>
                                <h3>All you need to sell on Meesho is</h3>
                                
                                <div>
                                    <p>GSTIN</p>
                                    <p>Bank Account</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );

}

export default SellerSup