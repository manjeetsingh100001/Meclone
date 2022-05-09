import axios from "axios";
import { useState } from "react";
// import {DropdownButton,Dropdown} from 'react-bootstrap'
import "./sellerData.css";


const Form = () => {
  const [sellerData, setSellerData] = useState({
    id: "",
    title: "",
    price: "",
    d_price: "",
    rating: "",
    img: "",
    size: [""],
    seller: "",
    details: {
      fabric: "",
      pattern: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //    if(e.target.name === "id"){
    //        setSellerData({
    //            ...sellerData,
    //             // three dots is spread, it will copy whole data into this obj
    //             id: e.target.value,
    //             //so, from whole data we want id, so call here.
    //        })
    //    }

    setSellerData({
      ...sellerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(sellerData);
    // fetch("https://localhost:8080/HomePageImg", {
    //   method: "POST",
    //   body: JSON.stringify(sellerData),
    // });
    axios
      .post("https://meesho-all.herokuapp.com/beauty", sellerData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
 // window.alert("Product Added")
  return (
    <form onSubmit={handleSubmit} className="whole_form">
      {/* <input
        onChange={handleChange}
        value={sellerData.id}
        type="text"
        placeholder="id"
        name="id"
      /> */}
       
      <input
        onChange={handleChange}
        value={sellerData.title}
        required={true}
        type="text"
        placeholder="Title"
        className="box"
        name="title"
      />

      <input
        onChange={handleChange}
        value={sellerData.price}
        type="number"
        placeholder="Price of Product"
        className="box"
        name="price"
      />
      <input
        onChange={handleChange}
        value={sellerData.d_price}
        type="number"
        required={true}
        placeholder="Discount Price"
        className="box"
        name="d_price"
      />
      {/* <input
        onChange={handleChange}
        value={sellerData.rating}
        type="number"
        className="box"
        placeholder="Initial Rating"
        name="rating"
      /> */}
      <input
        onChange={handleChange}
        value={sellerData.img}
        type="text"
        required={true}
        placeholder="Image link"
        className="box"
        name="img"
      />
      <input
        onChange={handleChange}
        value={sellerData.size}
        type="number"
        required={true}
        placeholder="Size"
        className="box"
        name="size"
      />
      <input
        onChange={handleChange}
        value={sellerData.seller}
        type="text"
        required={true}
        placeholder="Name of seller"
        className="box"
        name="seller"
      />
      <input
        onChange={handleChange}
        value={sellerData.fabric}
        type="text"
        required={true}
        placeholder="Fabric of Material"
        className="box"
        name="fabric"
      />
      <input
        onChange={handleChange}
        value={sellerData.pattern}
        type="text"
        required={true}
        placeholder="Pattern"
        className="box"
        name="pattern"
      />
      {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
<button>
      <input type="submit" value="submit" className="submit_btn" />
      </button>
    </form>
  );
};
export default Form;
