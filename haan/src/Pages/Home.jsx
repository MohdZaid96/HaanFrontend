import React, { useEffect, useState } from "react";
import homeStyle from "../Styles/Home.module.css";
import axios from "axios"

const Home = () => {
  // let arr=['../Media/HAAN-img/c2.jpg','../Media/HAAN-img/c3.jpg','../Media/HAAN-img/c4.jpg','../Media/HAAN-img/c5.jpg']
  const [data, setData] = useState([]);

  // const[slider, setSlider]=useState(arr);
  // const[slideShow, setSlideShow]=useState("../Media/HAAN-img/c1.jpg");

  useEffect(() => {
    fetch(`https://agreeable-rose-rugby-shirt.cyclic.cloud/product`)
      .then((res) => res.json())
      .then((res) => {console.log(res.data);setData(res.data)})
      .catch((ans) => console.log(ans));
  }, []);

  const handleCart=async(elem)=>{
    
    const {_id,img,name,discounted_price,price,pack,category,description}=elem;
    try {
      const res= await axios.post(`https://agreeable-rose-rugby-shirt.cyclic.cloud/cart`,{_id,img,name,discounted_price,price,pack,category,description})
   console.log(res);
    } catch (error) {
      console.log("frontend post failed");
      console.log(error);
    }
   
  }

  // useEffect(()=>{
  // let i = 0;
  // function sliderShows() {
  //     setSlideShow(slider[i])
  //     if (i < slider.length - 1) {
  //         i++;
  //     } else {
  //         i=0;
  //     }
  // }
  // setInterval(sliderShows, 3000)
  // },[])

  return (
    <div>
      {/* <NavBar /> */}

      <section>
        <div className={homeStyle.circle}></div>
        <div className={homeStyle.content}>
          <div className={homeStyle.textBox}>
            <h2>Buy Once, Use For Life</h2>
            <p>
              Our aim is to inspire people to adopt sustainable practices and
              make conscious choices for a greener future. You're now one step
              further to forget the excessive use of plastic and join a
              conscious and sustainable lifestyle.
            </p>
            <a href="#">All Refills Up To 50%</a>
          </div>
        </div>
      </section>




      <div className={homeStyle.msg}>
        <p>
          <strong>
            Lift Up your Journeys: Natural essentials for your daily adventures
          </strong>
        </p>
      </div>

      <div className={homeStyle.TopHeadingAndBtn}>
        <h1>Top Products</h1>
        <p>
          <span id={homeStyle.leftBtn}>&#60;</span>
          <span id={homeStyle.rightBtn}>&#62;</span>
        </p>
      </div>

      <div className={homeStyle.productCard}>
        {data?.map((elem) => {
          return (
            <div key={elem._id} className={homeStyle.cardChild}>
              <div>
                <img src={elem.img} alt={elem.name} />
              </div>
              <div className={homeStyle.cardDetails}>
                <h3>{elem.name}</h3>
                <p>
                  <strike>Rs.{elem.discounted_price}</strike>
                  <span>Rs.{elem.price}</span>
                </p>
              </div>
              <button onClick={()=>{handleCart(elem)}} >Add-Cart</button>
            </div>
          );
        })}
      </div>

      <h1 style={{ width: "94%", margin: "auto" }}>New Arrivals </h1>
      <div className={homeStyle.bannerSlider}>
        
      <div className={homeStyle.silderImg}>
          <img
            src="https://bymini.se/cdn/shop/files/Banner_Header_Hand_Sanitizer_DM.jpg?v=1660854528&width=1500"
            alt="Slider Img"
          />
        </div>


         <div className={homeStyle.silderImg}>
          <img
            src="https://smileconceptstore.eu/wp-content/uploads/2023/01/haan-novi-banner.png"
            alt="Slider Img"
          />
        </div>

        <div className={homeStyle.silderImg}>
          <img
            src="https://1799451109.rsc.cdn77.org/media/catalog/category/HAAN2_banner.png"
            alt="Slider Img"
          />
        </div>

        
        
        <div className={homeStyle.silderImg}>
          <img
            src="https://www.pinalli.it/cdn/shop/collections/HAAN_banner_1920x780_Pinalli_800x.jpg?v=1686127549"
            alt="Slider Img"
          />
        </div>
      </div>






      <div className={homeStyle.ssContainer}>
      <img src="https://static.vecteezy.com/system/resources/previews/015/724/425/original/virus-precaution-banner-sanitizer-and-liquid-soap-wash-disinfect-hands-use-face-mask-icon-coronavirus-prevention-silhouette-icon-set-sign-for-medical-poster-isolated-illustration-vector.jpg" alt="" />
      </div>
      <br/>


      <div className={homeStyle.aboutContainer}>
        <div className={homeStyle.abt}>
          <div className={homeStyle.aboutImg}>
            <img src="https://cdn.shopify.com/s/files/1/0436/1768/1558/articles/ls_haan_brand_info_kv.jpg" alt=""/>
          </div>

          <div className={homeStyle.aboutContent}>
            <h2>Design meets Sustainability</h2>
            <p>Refill and Reuse. Save up to 89% plastic by refilling your favorite products</p>

            <a href="#" class="shopNow" className={homeStyle.shopNow}>Shop Now</a>
          </div>

        </div>
      </div>
    
    </div>
  )
}

export default Home;
