import React from 'react'
import "./sellerlgin.css"

 const Sellerin = () =>{

    return(
        <div className="lgmn">
            <div className="lglt">
                <img src="https://static.meeshosupply.com/supplier-new/meesho-logo-web.svg" alt="" />
            </div>
            <div className="lgfm">
                <div className="fminp">
                    <div className="inpwpr">
                        <h3>Login to your Supplier panel</h3>

                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="password" />

                        <div>
                            <a href="#">Forgot Password?</a>
                            <button>Log in</button>
                        </div>

                    </div>
                    <div className="supbt">

                            <button>Create your Supplier Account</button>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Sellerin;