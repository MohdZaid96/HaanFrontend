import React from 'react'
import styles from './Payment.module.css'
import axios from 'axios';
import thankyouPic from '../Media/thankyouPic.gif';
import { useState, useEffect } from 'react';
const Payment = () => {

  const[orderedProduct, setOrderedProduct] = useState([]);

  const[openForm, setOpenForm] = useState(false);

  const[otpPage, setOtpPage] = useState(false);

  const[thankyouPage, setThankyouPage] = useState(false);


  const formSubmit=(event)=>{
    event.preventDefault();
    setOpenForm(true);
    setOtpPage(false);
    console.log("form is submited");
    console.log(openForm);
  }

  const closeForm=()=>{
    setOpenForm(false);
  }

  const fetchData = async() => {
    try{
        let res = await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/cart`);
        console.log(res.data);
        setOrderedProduct(res.data.data);
    }
    catch(error){
        console.log("error while fetching data");
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const redirectToOtp=()=>{
    setOtpPage(true);
    console.log(otpPage);
  }

  const redirectToWelcomePage=()=>{
    setThankyouPage(true);
    console.log(thankyouPage);
  }


  // Slider Function
  const orderSummary = document.querySelector(".productOrderSummary");
  
  const upScroll = () => {
      orderSummary.scrollBy(0, -200);
  }
  
  const downScroll = () => {
      orderSummary.scrollBy(0, 200);
  }
  window.upScroll = upScroll;
  window.downScroll = downScroll;


  const calculateSubtotal=()=>{
    const total = orderedProduct.reduce((total, product)=>{
        return total + product.price;   //quantity is come as a prop from cart page so instead of this write--> return total + product.price*quantity;
    },0);
    return total;
  };

  const calculateTotal=()=>{
    return calculateSubtotal()-discount()+parseInt(250);
  }
  const discount=()=>{
    return calculateSubtotal()/parseInt(10);
  }

  return (
    <>
    {thankyouPage ? (
    <div className={styles.thankyouPage} style={{textAlign:'center', marginTop:'50px'}}>
        <img src={thankyouPic} alt="thankyou"/>
        <p><span style={{fontWeight:'bold'}}>Order ID</span> : HAAN0034546435345</p>
        <button className={styles.continueShoppingBtn}>Continue Shopping</button>
    </div>) : (
        <div className={styles.paymentDiv}>
        <div className={styles.addressDiv}>
                <h1>Contact & Shipping Address</h1>
                <form className={styles.addressDetailsDiv}>
                    <label>Name: </label>
                    <br/>
                    <input placeholder='Name' type='text' name='name' required/>
                    <br/>
                    <br/>
                    <label>Email: </label>
                    <br/>
                    <input placeholder='Email' type='text' name='email' required/>
                    <br/>
                    <br/>
                    <label>Address: </label>
                    <br/>
                    <input placeholder='Address' type='text' name='address' required/>
                    <br/>
                    <br/>
                    <label>City: </label>
                    <br/>
                    <input placeholder='City' type='text' name='city' required/>
                    <br/>
                    <br/>
                    <label>State: </label>
                    <br/>
                    <input placeholder='State' type='text' name='state' required/>
                    <br/>
                    <br/>
                    <label>Zip code: </label>
                    <br/>
                    <input placeholder='Zip code' type='text' name='code' required/>
                    <br/>
                    <br/>
                    <label>Country: </label>
                    <br/>
                    <input placeholder='Country' type='text' name='country' required/>
                    <br/>
                    <br/>
                    <button onClick={formSubmit}>Pay Now</button>
                </form>
        </div>
        <div className={styles.productPaymentSummaryDiv}>
                <div className={`${styles.productOrderSummary} ${styles.scrollableContainer}`}>
                    {/* product details */}
                    {orderedProduct.map((ele)=>(
                        <div className={styles.productOrderSummaryCart} key={ele.id}>
                            <div className={styles.imgAndTitle}>
                                <img style={{width:'120px', height:'120px', borderRadius:'10px'}} src={ele.img} alt={ele.title}/>
                                <h2>{ele.name}</h2>
                            </div>
                            <p>{ele.price} Rs.</p>
                        </div>
                    ))}
                </div>
                <hr style={{color:'black', width:'100%'}}/>
                <div className={styles.paymentSummaryDetailsDiv}>
                    <div className={styles.subtotal}>
                        <h3>Subtotal : </h3>
                        <p>{calculateSubtotal()} Rs.</p>
                    </div>
                    <div className={styles.shipping}>
                        <h3>Shipping : </h3>
                        <p>+250 Rs.</p>
                    </div>
                    <div className={styles.discount}>
                        <h3>Discount : </h3>
                        <p>-{discount()} Rs.</p>
                    </div>
                    <div className={styles.total}>
                        <h3>Total : </h3>
                        <p>{calculateTotal()} Rs.</p>
                    </div>

                </div>
        </div>
        {openForm ? (
        <div className={styles.paymentPageDiv}>
            <div>
                <div className={styles.paymentPageDivNavbar}>
                <button>H</button>
                <h3>HAAN</h3>  
                </div>
                <button onClick={closeForm}>&times;</button>
            </div>
            {otpPage ? (
                    <div className={styles.otpPageDiv}>
                        <p>Enter OTP</p>
                        <input maxLength={4} placeholder='OTP'/>
                        <p>Resend OTP</p>
                    </div>
            ) : (
            <div className={styles.paymentPageDivMainContent}>
                <div>
                    <p>Card Number</p>
                    <input maxLength={16} placeholder='Enter your card number'/>
                </div>
                <div>
                    <p>Expiry</p>
                    <input maxLength={5} placeholder='MM / YY'/>
                </div>
                <div>
                    <p>Card Holder's name</p>
                    <input placeholder="Card Holder's name"/>
                </div>
                <div>
                    <p>CVV</p>
                    <input maxLength={3} placeholder='CVV'/>
                </div>
                <div>
                    <input type="checkbox" id="save-card" value="Save card securely for future payments" />
                    <label for="save-card"> Save card securely for future payments</label><br/>
                </div>
            </div>
            )}
            {otpPage ? (
                <div className={styles.otpPageContinueBtn}>
                <button onClick={redirectToWelcomePage} style={{width:'100%', margin:'auto', marginBottom:'5px'}}>Continue</button>
            </div>
            ) :(
                <div className={styles.paymentPageDivSubtotalAndSubmit}>
                    <div>
                        <p>Rs. {calculateTotal()}</p>
                        <p style={{color:'grey'}}>View Details</p>
                    </div>
                    <button onClick={redirectToOtp}>Pay Now</button>
                </div>
                )}
        </div>
        ):""}
        </div>
    )}    
    </>
  )
}

export default Payment
