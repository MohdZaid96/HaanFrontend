import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styles from "../Styles/Product.module.css";
import SingleProduct from "./SingleProduct";
<link
  href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
  rel="stylesheet"
/>;

const Product = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [order, setOrder] = useState("");
  const [cat, setCat] = useState(null);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [filterFlag, setFilterFlaf] = useState(false);

  const navigate = useNavigate();
  var category = "category";

  
  const handleFilter=async(src)=>{
    setIsLoading(false)
    setPage(1);
    const res = await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/product/filter?category=${src}&page=${page}&limit=6`);
    console.log(res);
    setData(res.data.data);
    setIsLoading(true)
  }
  const handleSearch=async()=>{
    setIsLoading(false)
    setPage(1);
    const res = await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/product/search?q=${search}&page=${page}&limit=6`);
    console.log(res);
    setData(res.data.data);
    setIsLoading(true)
  }
  const handleSort=async()=>{
    setIsLoading(false)
    setPage(1);
    const res = await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/product/sort?sort=price&order=${order}&page=${page}&limit=6`);
    console.log(res);
    setData(res.data.data);
    setIsLoading(true)
  }

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/product?page=${page}&limit=6`);
      console.log(res);
      setData(res.data.data);
    };
    getData();
  }, []);

  async function postData(elem) {
    const { _id,img, name, discounted_price, price, pack, description, category } =
      elem;

    try {
      await axios.post("https://agreeable-rose-rugby-shirt.cyclic.cloud/cart", {
        _id,
        img,
        name,
        discounted_price,
        price,
        pack,
        description,
        category,
        quantity:1
      });
      alert("Added to Cart")
    } catch (error) {
      console.log(error);
    }
  }
  const handleRedirect = (id) => {
    // console.log(id);
    // navigate(`/product/${id}`);
  };

  //   function fnOn1y() {
  //     var a = arrbakery.filter(function (ele) {
  //         return ele.brand === "On1y";
  //     });

  //     console.log(a);
  //     document.getElementById("parent").innerHTML="";
  //     display(a);
  // };
  // function fnls20() {
  //     var a = arrbakery.filter(function (ele) {
  //         return ele.mrp > 0 && ele.mrp <= 20;
  //     });

  // styles////
  const handleSingle = (ele) => {
    return (
      <SingleProduct
        ele={ele}
        cart={cart}
        setCart={setCart}
        wishList={wishList}
        setWishList={setWishList}
      />
    );
  };

  const priceStyle = {
    textDecoration: "line-through",
    color: "crimson",
  };

  return (
    <div>
      <img
        className={styles.image}
        src="https://www.alancrew.com/wp-content/uploads/2019/05/Haan-by-Alancrew2-1.jpg"
        alt="Image"
      />

      <h4 className={styles.text}>
        Lift Up your Journeys: Natural essentials for your daily adventures
      </h4>

      <div className={styles.Function}>
        <div className={styles.filterDiv}>
          <h2>
            
            Filter <ion-icon
              name="filter-outline"
              class="ion-icon"
            ></ion-icon>{" "}
          </h2>
          <label>
            <input
              value="sanitizer"
              type="checkbox"
              checked={check1}
              onChange={()=>handleFilter("sanitizer")}
            />
            <span style={{ paddingLeft: "10px" }}>Sanitizer</span>
          </label>
          <label>
            <input
              value="case"
              type="checkbox"
              checked={check2}
              onChange={()=>handleFilter("sanitizer")}
            />
            <span style={{ paddingLeft: "10px" }}>Case</span>
          </label>
        </div>

        <div className={styles.searchDiv}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {

              setSearch(e.target.value);
              handleSearch();
            }}
          />
        </div>
        <div className={styles.sortDiv}>
          <h2> Sort </h2>
          <select
            onChange={(e) => {
              if (e.target.value !== "") {
                setSort(true);
                setOrder(e.target.value);
                handleSort();
              } else {
                setSort(false);
              }
            }}
          >
            <option value="">All</option>
            <option value="asc">Price - Low to High</option>
            <option value="desc">Price - High to Low</option>
          </select>
          {/* <div>
            <input value = {600} type = "checkbox" onChange = {()=>setCat("sanitizer")} />
            <span> Less Than 600 </span>
        </div>
        <div>
            <input value = "case" type = "checkbox" onChange = {()=>setCat("case")} />
            <span> 2 </span>
        </div> */}
          {/* <div>
            <input value = {cat} type = "checkbox" onChange = {handleChange} />
            <span> 3 </span>
        </div> */}
        </div>
      </div>
      <div className={styles.mainCard}>
        {isLoading?
          data?.map((ele) => (
          <div>
            <div className={styles.card}>
              {/* <Link
                to={`/product/${ele.id}`}
                style={{
                  textDecoration: "none",
                  textDecorationColor: "none",
                }}
              /> */}
              <div
                className={styles.cardImage}
                onClick={() => navigate(`/product/${ele._id}`)}
              >
                <img src={ele.img} alt={`${ele.id}_image`} />
              </div>
              <div className={styles.bottom}>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ height: "70px" }}>{ele.name}</h4>
                  <div className={styles.p}>
                  <p>₹{ele.discounted_price}</p>
                  <p style={priceStyle}>₹{ele.price}</p>
                  </div>
                </div>
                
                <div className={styles.divBottom}>
                  <div className={styles.purchase}>
                    <button onClick={() => postData(ele)}>Add to Cart</button>
                    <button onClick={() => postData(ele)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )):""};
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          className={styles.button}
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={data.length === 0 || data.length < 6}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
