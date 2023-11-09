import foot from "../Styles/Footer.module.css";

function Footer() {
  return (
    <footer className={foot.footer}>
      <div id={foot.first}>
        <div className={foot.firstFooterHeading}>

          <h1 style={{marginTop:"10%"}}>HAAN</h1>
          <h1>Subscribe Our Newsletters</h1>

          <form id={foot.border}>
            <input
              id="Email"
              type="email"
              placeholder="  Enter your Email Address"
            />

            <button>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

        <div id={foot.left} className={foot.footerNavigationsHeadings}>
          <h5 class="menu-option">SHOP</h5>
          <div class="menu-box">
            <p class="menu-item">Hand Sanitizer</p>
            <p class="menu-item">Cream</p>
            <p class="menu-item">Body Lotion</p>
            <p class="menu-item">Gift Card</p>
            <p class="menu-item">Earn Gifts</p>
          </div>
        </div>

        <div id={foot.help} className={foot.footerNavigationsHeadings}>
          <h5 class="menu-option">HELP</h5>
          <div class="menu-box">
            <p class="menu-item">Newsletters</p>
            <p class="menu-item">Stockist</p>
            <p class="menu-item">Return Policy</p>
            <p class="menu-item">Hotels</p>
            <p class="menu-item">FAQs</p>
          </div>
        </div>

        <div id={foot.company} className={foot.footerNavigationsHeadings}>
          <h5 class="menu-option">COMPANY</h5>
          <div class="menu-box">
            <p class="menu-item">About HAAN</p>
            <p class="menu-item">Read Our Blog</p>
            <p class="menu-item">Security</p>
            <p class="menu-item">Terms of Service</p>
            <p class="menu-item">Privacy Policy</p>
            <p class="menu-item"> Affiliate</p>
          </div>
        </div>
      </div>

      <div className={`${foot.lowestdiv} ${foot.lowestdivBox}`}>
        <div id={foot.card}>
          <div id={foot.second}>
            <div>
              <h3>Ready to stay in touch?</h3>
            </div>
            <div className={foot.social}>
              <i class="fa fa-facebook"></i>
            </div>
            <div className={foot.social}>
              <i class="fa fa-twitter"></i>{" "}
            </div>
            <div className={foot.social}>
              <i class="fa fa-instagram"></i>
            </div>
            <div className={foot.social}>
              <i class="fa fa-youtube-play"></i>
            </div>
            <div className={foot.social}>
              <i class="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div id={foot.rights}>
          <p>© 2023 Imagine Marketing Limited. All Rights Reserved.</p>
          <p>
            A natural personal care brand that focuses its activity on defining
            a better <br /> future for the planet and humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
