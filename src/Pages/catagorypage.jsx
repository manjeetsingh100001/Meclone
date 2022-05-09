import { useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from "./catagorypage.module.css";
import React from "react";
import   "./home.css";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getQuery } from "../Redux/action";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
// function BasicSelect({params}) {
//   const [filter, setFilter] = React.useState("");
//   const dispatch = useDispatch();  
//   const handleChange = (event) => {
//     setFilter(event.target.value);
//     console.log(filter);
//     var qurey = `${params}&_sort=${event.target.value}`
//     dispatch(getQuery(qurey));
//   };

//   return (
//     <Box sx={{ minWidth: 250 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Sort</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={filter}
//           label="Filter"
//           onChange={handleChange}
//         >
//           <MenuItem value={"d_price&_order=asc"}>Price Low-high</MenuItem>
//           <MenuItem value={"d_price&_order=desc"}>Price High-low</MenuItem>
//           <MenuItem value={"rating&_order=desc"}>Rating high-low</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
const Card = ({id,title,price,orignalPrice,url,rating,q})=>{
    return (
//single product
     <Link style={{textDecoration: 'none'}} to={`/${q}/${id}`}>
      <div id="HomeproBox" key={id}>
              <img className="HomeproImg" src={url} alt="" />
              <p className="HomeProHeading box">{title}</p>
              <div className="HomeProPrice">
                <h5>{`₹ ${price}`}</h5>
                <p>{orignalPrice}</p>
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
                <span className="HomeRating1">{rating}*</span>{" "}
                <span className="HomeReviews">214 Reviews</span>
              </div>
       </div>
       </Link>
    )
}
const Category = ()=>{
    const dispatch = useDispatch();
    var arr = [1,2,3,4,5];
    const data = useSelector((state)=>state.content.data);
    const query = useSelector((state)=>state.content.qurey);
    const [count,setCount] = React.useState(1);
//    var result = query.toLowerCase();
  
//     console.log(result)
//     console.log(data)
    //only specfic category as query will be displayed
    const config = {
        method: "GET",
         url:  `https://meesho-all.herokuapp.com/${query}?_page=${count}&_limit=12`
        // https://meesho-all.herokuapp.com/mens?_page=${count}&_limit=12`
          //`https://fake-rjson-server-pro.herokuapp.com/products?category=${query}&_limit=12&_page=${count}`
       
    }
    React.useEffect(()=>{
        dispatch(getData(config))
    },[count,query])
    return (
        <div style={{marginTop:'200px'}}>
        <div className={styles.header}>{data[0]?.category}</div>
        <div className={styles.subheader}>
            <div style={{marginTop:'20px'}}><a  style={{color:'#333D5A',fontWeight:'bold',marginRight:'10px'}}>Showing 1-12</a> out of 168445 Products</div>
            {/* <FilterAltIcon className={styles.filt}/> */}
            {/* <BasicSelect params={data[0]?.category}/> */}
        </div>
         
         <div className={styles.container}>
            {data?.map((item)=>(
                <Card key={item.id} id={item.id} title={item.title} price={item.d_price} orignalPrice={item.price} url={item.img} rating={item.rating} q={query}/>
            ))}
        </div>
        
        <div className={styles.pages}>
            {count!==1?(<span onClick={()=>{setCount((prev)=>prev-1)}}  style={{color:'rgb(244, 51, 151)',cursor:'pointer'}}>PREV</span>):("")}
            {arr.map((item)=>(
                count===item?(<div className={styles.round}>{item}</div>):(
                    <div>{item}</div>
                )
            ))}
            <span onClick={()=>{setCount((prev)=>prev+1)}} style={{color:'rgb(244, 51, 151)',cursor:'pointer'}}>NEXT</span>
        </div>
        </div>
    )
};
export default Category;