import navStyle from '../Styles/NavBar.module.css'
import homeStyle from '../Styles/Home.module.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextApi';
import { useContext } from 'react';
import { useState } from 'react';
function NavBar() {

  const { authState, logout } = useContext(AuthContext);
  const [popup, setPopup] = useState(false);
  
   
    
  return (
    <div>

      <div  id={navStyle.slider}>
        <figure>
          <div>Free shipping over 35 ₹</div>
          <div>Subscribe to our Newsletter</div>
          <div>Get Amazing Discounts!</div>
          <div>Get The Special Deals</div>
        </figure>
      </div>


      <header>
        {popup?<div className='popup'>
          <button style={{ backgroundColor: "black", color: "#fff", border: "none" }}
            onClick={() => { setPopup(!popup); logout()}}
          ><i class="fa fa-sign-out" aria-hidden="true"></i>
          </button>
        </div>:<></>}
        <div className={navStyle.account}>
          {/* <a href="#"> <span class="material-symbols-outlined">person </span> </a> */}
          {authState.isAuth ? <button style={{ backgroundColor: "black", color: "#fff", border: "none" }}
          onClick={() =>setPopup(!popup)}
          ><h2>{authState.name}</h2></button>
          : <Link to={'/login'} ><span className="material-symbols-outlined">person</span></Link>}
        </div>

        <div className={navStyle.logo}>
          {/* <h1> <a className={navStyle.header_logo}>HAAN</a> </h1> &nbsp; */}
          <Link to={'/'} > <h1 className={navStyle.header_logo}>HAAN</h1> </Link>&nbsp;
          <span className="material-symbols-outlined" style={{ color: "teal", fontSize: "2.5rem" }}>temp_preferences_eco</span>
        </div>


        <nav className={navStyle.nav}  id="shubhMenu">
          <ion-icon name="close" className={navStyle.header_close} style={{display:"none"}} id="close-menu"></ion-icon>
          <ul className={navStyle.nav_list}>
            <li className={navStyle.nav_item}><Link to={'/product'} className={navStyle.nav_link}>Shop </Link> </li>
            <li className={navStyle.nav_item}><Link to={'#'} className={navStyle.nav_link}>Collections</Link></li>
            <li className={navStyle.nav_item}> <Link to={'#'} className={navStyle.nav_link}>About us</Link></li>
            <li className={navStyle.nav_item}> <Link to={'#'} className={navStyle.nav_link}>Sobremesa Talks</Link> </li>
            <li className={navStyle.nav_item}><Link to={'#'} className={navStyle.nav_link}>Refill Station</Link> </li>

            
            <h1 className={navStyle.nav_item}>
                <a href="" className={navStyle.nav_link}> <ion-icon name="search"></ion-icon> </a>
            </h1>

            <h1 className={`${navStyle.nav_item}${navStyle.heart}`}>
              <a href="" className={navStyle.nav_link}> <ion-icon name="heart"></ion-icon> </a>
            </h1>


            <h1 className={navStyle.nav_item}>
            <Link to={'/cart'} className={navStyle.nav_link}><ion-icon name="cart"></ion-icon></Link> 
            </h1>

          </ul>
        </nav>

        <ion-icon name="menu" className={navStyle.header_toggle} style={{display:"none"}} id="toggle-menu"></ion-icon>
      </header>

      
   










    </div>
  );
}
export default NavBar;
