import React from "react";
import   "./home.css";
import {Link} from 'react-router-dom';
import  { useEffect, useState } from "react";

export const Home = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://meesho-all.herokuapp.com/HomePageImg"
      ).then((d) => d.json());
      setHomeData(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div>
      <div id="HomeSize">
        <div id="HomeBanner0">
          <div id="HomeBannerDiv">
            <div className="HomeBannerHeading">
              <span>
                Lowest Prices <br />
                Best Quality Shopping
              </span>
            </div>
            <div className="HomeBannerHeading1">
              <p className="HomeBannerPaira">
                1 Crore+ Products | 650+ Categories
              </p>
            </div>

            <div className="HomeBannerHeading2">
              <picture>
                <img
                  className="HomeLogoImg"
                  src="https://images.meesho.com/images/pow/playstore-small-icon.webp"
                  alt=""
                />
              </picture>
              <span className="HomeImgSpan">Download the Meesho App</span>
            </div>
          </div>
          <img
            src="https://images.meesho.com/images/marketing/1649759684499.webp"
            alt=""
          />
        </div>

        <div id="HomeHeading">
          <div className="HomeLine"></div>
          <div className="HomeLineHead">Top Categories to choose from</div>
          <p className="HomeLine"></p>
        </div>

        <div id="HomeBanner1">
          <div>
            <img
              src="https://images.meesho.com/images/marketing/1649760442043.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1649760423313.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1649759799809.webp"
              alt=""
            />
          </div>
        </div>

        <div id="HomeBanner2">
          <div className="HomeBanner2Button">
            <h1 className="HomeBanner2">Essentials</h1>
            <button>
              <span>VIEW ALL</span>
            </button>
          </div>
          <div className="HomeBannerImg">
            <img
              src="https://images.meesho.com/images/marketing/1649760808952.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1649760703179.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1649760786763.webp"
              alt=""
            />
          </div>
        </div>

        <div id="HomeBanner3">
          <img
            className="Homecomman"
            src="https://images.meesho.com/images/pow/download_banner_desktop.webp"
            alt=""
          />
        </div>
        <div id="HomeBanner4">
          <img
            className="Homecomman"
            src="https://images.meesho.com/images/pow/supply_banner_desktop.webp"
            alt=""
          />
        </div>
        <h4 className="HomeForYou">Products For You</h4>
        
        <div id="HomeDiv">
          {homeData.map((e) => (
            <Link style={{textDecoration: 'none'}} to={`/HomePageImg/${e.id}`}>
            <div id="HomeproBox" key={e.id}>
              <img className="HomeproImg" src={e.img} alt="" />
              <p className="HomeProHeading box">{e.title}</p>
              <div className="HomeProPrice">
                <h5>{`₹ ${e.d_price}`}</h5>
                <p>{e.price}</p>
                <span>14% off</span>
              </div>
              <div className="HomeDiscount">
                <img src="https://img.icons8.com/ios-glyphs/20/000000/discount--v1.png" />
                <p>₹11 discount on 1st order</p>
              </div>
              <div className="HomeDeliveryDiv">
                <p className="HomeDelivery">Free Delivery</p>
              </div>
              <div className="HomeRating">
                <span className="HomeRating1">{e.rating}*</span>{" "}
                <span className="HomeReviews">214 Reviews</span>
              </div>
            </div>
            </Link>
          ))}
          {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/discount--v1.png"/> */}
          {/* <img src="https://img.icons8.com/ios-glyphs/20/000000/discount--v1.png"/> */}
        </div>
      </div>
    </div>
  );
};
export default Home;