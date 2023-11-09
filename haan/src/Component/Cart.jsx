import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import gstImg from '../Media/gst.png';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextApi"

const Cart = () => {
  const navigate=useNavigate();
  const { authState } = useContext(AuthContext);
  const [productsData, setProductsData] = useState([]);
  const [quantity, setQuantity] = useState(1); 
  const [isOverlayOpen, setIsOverlayOpen] = useState(true); 

  const getData = async () => {
    try {
      let res = await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/cart`);
      console.log(res.data.data);
      setProductsData(res.data.data);
  
    } catch (error) {
      console.log("error while fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(prevQuantities => ({
        ...prevQuantities,
        [productId]: newQuantity
      }));
    }
  };

  const handleInc = async(_id) => {
    try {
      let res = await axios.put(`https://agreeable-rose-rugby-shirt.cyclic.cloud/cart`,{
        _id,
        quantity:quantity
      });
        console.log(res.data);
        setProductsData(res.data.data);
    } catch (error) {
      console.log(error)
    }
   
  };

  const handleDec = async(_id) => {
    try {
      let res = await axios.put(`https://agreeable-rose-rugby-shirt.cyclic.cloud/cart`,{
        _id,
        quantity:quantity
      });
        console.log(res.data);
        setProductsData(res.data.data);
    } catch (error) {
      console.log(error)
    }
   
  };

  const calculateTotal = () => {
    var total=0;
    productsData.map((elem)=>{
      total+=elem.price
    })
    return total;
  };

  const handleDelete = async (productId) => {
      try {
        await axios.delete(`https://agreeable-rose-rugby-shirt.cyclic.cloud/cart/${productId}`);
        getData();
      } catch (error) {
        console.log(error);
      }      
    }
    const handleCount=(_id)=>{
      const data=productsData.filter((elem)=>{
        return elem._id=== _id
      })
      return data.quantity;
    }
  

    const closeNav = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div>
      { /* ... (existing code) ... */ }
      
      {/* Overlay */}
      {isOverlayOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button className={styles.closeBtn} style={{fontSize:'larger'}} onClick={closeNav}>&times;</button>
            
            {/* here is cart div */}
            <div className={styles.wholeCart}>
              <div className={styles.initialCart}>
                <img className={styles.image} src={gstImg} alt="gst"/>
              </div>
              <div className={`${styles.mainCartDiv} ${styles.scrollableContainer}`}>
                {productsData.map((ele) => (
                  <div className={styles.cardDiv} key={ele._id}>
                    <div className={styles.imgDiv}>
                      <img style={{ width: '120px', height: '120px' }} src={ele.img} alt='product' />
                    </div>
                    <div className={styles.detailsDiv}>
                        <h4>{ele.name}</h4>
                      <p>{ele.price} Rs. </p>
                      <div className={styles.btnDiv}>
                        <button onClick={() => {
                          setQuantity(quantity-1);
                          handleDec(ele._id)
                        }} style={{fontSize:'larger'}}>-</button>
                        <p style={{marginBottom:'0'}}>{quantity}</p>
                        <button onClick={() => {
                          setQuantity(quantity+1);
                          handleInc(ele._id)
                        }} disabled={ele.quantity=== 10} style={{fontSize:'larger'}}>+</button>
                        <button onClick={() => handleDelete(ele._id)}>Delete</button>
                      </div>
                     
                        {/* <button onClick={() => handleDelete(ele.id)}>Delete</button> */}
                        <hr className={styles.hrLine}/>
                     
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.checkoutDiv}>
                <h4>Total : {calculateTotal()} Rs.</h4>
                <button id='checkoutBtn' onClick={()=>{  navigate("/payment")}}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

