import React from "react";
import "./login_input.css";

const login_input = () => {
  return (
    <>
      <div className="container1">
        <div className="leftBox">
          <div>
            <h2>
            Sell online to 10 Cr+ <br/>customers at<br/>
 with <b className="commission">0% Commission </b>
            </h2>
          </div>
          <div>
            <p>
              Sell your products online and reach crores of customers through
              Meesho’s selling tools for suppliers
            </p>
          </div>

          <div>
            <form>
              <label>
                <input 
                className="input_area"
                  type="text"
                  name="number"
                  placeholder="+91 Enter your mobile number"
                />
              </label>
              <input className="submit_btn" type="submit" value="Start Selling" />
            </form>
          </div>
        </div>

        <div className="rightBox"></div>
      </div>

      <div className="container2">
        <div className="Sec_box1">
          <h1>4 lakh+</h1>
          <b>Trust Meesho to sell online</b>
        </div>
        <div className="Sec_box1">
          <h1>10 lakh+</h1>
          <b>Customers buying across India</b>
        </div>
        <div className="Sec_box1">
          <h1>27000+</h1>
          <b>Pincode Supported for delivery</b>
        </div>
        <div className="Sec_box1">
          <h1>700+</h1>
          <b>Categories to sell online</b>
        </div>
      </div>

      <div className="container3"> 
        <div className="Left_sec">
          <h3><b>Why Suppliers Love Meesho</b></h3>
          <p>
            All the benefits that come with selling on Meesho<br/>
            are designed to help you sell more, and make it easier to grow <br/>
            your business.</p>
        </div>
        <div className="Right_sec">
          <div>
            <b>0% Commission Fee</b>
            <p>
              Suppliers selling on Meesho keep 100% of their profit by not<br/>
              paying any commission
            </p>
            < hr/>
          </div>
          <div>
            <b> 0 Penalty Charges</b>
            <p>
              0 Penalty Charges Sell online without the fear of order
              cancellation charges with 0<br/> Penalty for late dispatch or order
              cancellations.
            </p>
            < hr/>
          </div>
          <div>
            <b>Growth for Every Supplier</b>
            <p>
              From small to large and unbranded to branded, all suppliers<br/> have
              grown their businesses on Meesho
            </p>
           < hr/>
          </div>
          <div>
            <b>Ease of Doing Business</b>
            <p>
              Easy Product Listing t Lowest Cost Shipping t 7-Day Payment Cycle
              from the delivery date
            </p>
            < hr/>
          </div>
        </div>
      </div>

      <div className="container4">
        <div className="Left_sec2">
          <h3><b>Exclusive Supplier+ < br/>
            Rewards for the first 30 < br/>
            days</b></h3>
        </div>
        <div className="Right_sec2">
        
          <div class="row row-cols-1 row-cols-md-2 g-0">
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h5 class="card-title">Free catalog visibility of ₹1200</h5>
        <p class="card-text">Run advertisements for your catalogs to increase the visibility of your products and get more orders</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">Dedicated Catalog Manager</h5>
        <p class="card-text">Clear all your cataloging doubts like how to upload catalogs, correct quality check errors and more</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Free Return Shipping</h5>
        <p class="card-text">Send out your orders stress-free with zero fees on return shipping for the first month</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h5 class="card-title">No Order Cancellation Charges</h5>
        <p class="card-text">Cancel orders that you can’t fulfil for unforeseen reasons without worrying about penalties”</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      <div className="container5">
        <div className="Left_sec5">
          <h3><b>Experiences suppliers love to talk about</b></h3>
        </div>
        <div className="Right_sec5">
        <div className='container_video'>
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/pWahNIMRxR0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">
                <b>Saurabh Anand</b>
                <p>Bazinga Media, Bengaluru</p>
              </h5>

              <p class="card-text">
                Meesho’s low commission rates and lowest shipping charges have
                helped me increase my earnings and also provide better prices to
                my customers.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <iframe
              src="https://www.youtube.com/embed/pWahNIMRxR0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">
                <b>Manjira Roy</b>
                <p>Samvita, Bengaluru</p>
              </h5>

              <p className="card-text">
                Meesho has helped me in increasing the reach of my brand to more
                customers. Today, I receive orders for my products from all over
                India.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <iframe
              src="https://www.youtube.com/embed/pWahNIMRxR0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="card-body">
              <h5 class="card-title">
                <b>Rahul Goel</b>
                <p>Trendyfrog, New Delhi</p>
              </h5>

              <p class="card-text">
                Meesho's support team constantly helps me with suggestions for
                what to sell and at what price to sell. I don't get that
                anywhere else. .
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container6">
        <div>
          <b>Create Account</b>
          <p>All you need this:</p>
          <ul>
            <li>GSTIN</li>
            <li>Bank Account</li>
          </ul>
        </div>
        <div>
          <b>List Products</b>
          <p>List the products you want to sell in your supplier panel</p>
        </div>
        <div>
          <b>Get Orders</b>
          <p>
            Start getting orders from crores of Indians actively shopping on our
            platform.
          </p>
        </div>
        <div>
          <b>Lowest Cost Shipping</b>
          <p>Products are shipped to customers at lowest costs</p>
        </div>
        <div>
          <b>Receive Payments</b>
          <p>
            Payments are deposited safely to your< br/> bank account on the 15th day
            of order delivery
          </p>
        </div>
      </div>

      {/* <div className="container7">
        <h2>
          <b>meesho |</b>
          <p>Supplier</p>
        </h2>
        <b>Learning</b>
        <p>Hub</p>
        <div>
          <h1>Learn how to sell and grow your business on Meesho</h1>
        </div>
        <div>
          <button>Visit Learning Hub</button>
        </div>
      </div> */}

      <div className="container8">
        <div className="Left">
          <div>
            <h3><b>Grow Your Business<br/> With Meesho</b></h3>
          </div>
        </div>
        <div className="Right__box">
           <div class="row row-cols-1 row-cols-md-2 g-0">
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h5 class="card-title">Lowest Shipping Costs</h5>
        <p class="card-text">Sign up for the quick Next Day Dispatch (NDD) Program and get higher visibility and your own Account Manager</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">Next Day Dispatch Program</h5>
        <p class="card-text">Sign up for the quick Next Day Dispatch (NDD) Program and get higher visibility and your own Account Manager</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Dedicated Catalog Manager</h5>
        <p class="card-text">sClear all your cataloging doubts like how to upload catalogs, correct quality check errors and more
</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h5 class="card-title">No Order Cancellation Charges</h5>
        <p class="card-text"><br/>Cancel orders that you can’t fulfil for unforeseen reasons without worrying about penalties”</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      <div className="container5">
        <div className="Left_sec5">
          <h3><b>Experiences suppliers love to talk about</b></h3>
        </div>
        <div className="Right_sec5">
        <div className='container_video'>
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/pWahNIMRxR0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">
                <b>Saurabh Anand</b>
                <p>Bazinga Media, Bengaluru</p>
              </h5>

              <p class="card-text">
                Meesho’s low commission rates and lowest shipping charges have
                helped me increase my earnings and also provide better prices to
                my customers.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <iframe
              src="https://www.youtube.com/embed/pWahNIMRxR0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">
                <b>Manjira Roy</b>
                <p>Samvita, Bengaluru</p>
              </h5>

              <p className="card-text">
                Meesho has helped me in increasing the reach of my brand to more
                customers. Today, I receive orders for my products from all over
                India.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <iframe
              src="https://www.youtube.com/embed/pWahNIMRxR0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="card-body">
              <h5 class="card-title">
                <b>Rahul Goel</b>
                <p>Trendyfrog, New Delhi</p>
              </h5>

              <p class="card-text">
                Meesho's support team constantly helps me with suggestions for
                what to sell and at what price to sell. I don't get that
                anywhere else. .
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      

      <div className="container9">
        <div className="Left">
          <h3>
            <b>Meesho Supplier Support Available 24/7</b>
          </h3>
        </div>
        <div className="Right">
          <div>
            <p>
              Available 24/7 Meesho supplier support is available to solve all
              your doubts and issues before and after you start your online
              selling business.
            </p>
          </div>
          <div>
            <p>Email You can reach out to</p>
            <a href="sell@meesho.com">sell@meesho.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default login_input;
