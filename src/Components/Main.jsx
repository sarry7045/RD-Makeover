import React from "react";
import "../Components/Main.css";
import Zoom from "react-reveal/Zoom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RD-Makeovers | Makeup Artist | Hairstylist</title>
        <link rel="canonical" href="https://www.rdmakeovers.com" />
        <meta
          name="description"
          content="Professional Makeup artist and Hairstylist."
        />
        <meta
          name="keywords"
          content="rd makeovers, rd makeovers mumbai, makeup, hair artist, makeup artist, hair artist, haircut, eyebrow design, makeup artist mumbai, hairstylist mumbai, hair style for girls"
        />
        <meta property="og:site_name" content="RD Makeover" />
      </Helmet>
      <header className="header" id="header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="navbar"
        >
          <div className="logo">
            {/* <img src="/img/logo.svg" /> */}
            <h2> RD-Makeovers</h2>
          </div>
          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="/" className="nav-link active">
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  about
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  services
                </a>
              </li>
              {/* <li>
                <a href="#package" className="nav-link">
                  package
                </a>
              </li> */}
              <li>
                <a href="#gallery" className="nav-link">
                  gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </motion.div>
      </header>
      {/* Start Home Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="home"
      >
        <div className="container">
          <div className="home-img">
            <img src="Images/home-img.png" alt="homepage" />
            {/* <img src="/img/mainpage.jpg" /> */}
          </div>
          <div className="home-content">
            <h1>
              Your big day
              <br />
              <span>in style</span>
            </h1>
            <p>
              Come see our bride's corner and take the opportunity to schedule
              your date.
            </p>
            <a href="tel: 9004043671" className="btn btn-outline">
              <i className="fa fa-phone"></i>
              Schedule your time
            </a>
          </div>
        </div>
      </motion.section>
      {/* End Home Section */}
      {/* Start About Section */}
      <Zoom>
        <section className="about" id="about">
          <div className="container">
            <div className="section-title">
              <h1>our story</h1>
              <span>RD-Makeovers</span>
            </div>
            <div className="about-detail">
              <div className="about-detail-content">
                <div className="about-img">
                  <img src="Images/rdmakeovers.jpeg" alt="rdmakeovers" />
                </div>
                <div className="about-description">
                  <p>
                    Freelance Makeup artist and Hairstylist Based in Mumbai. 
                  </p>
                  <br />
                  <p>
                    Specialized in Bridal and occasion Makeup, using best
                    quality products.
                  </p>
                  <br />
                  <p>
                    RD Makeovers Makeup & Hair styling in Mumbai offer best in
                    Bridal Makeup, Party, Occasion, and Fashion Makeup in Normal
                    and HD. The services are available all over India and the
                    World.
                  </p>

                  <br />
                  <p>We guarantee you will look your best ever!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Zoom>
      {/* End About Section */}
      {/* Start Services Section */}
      <Zoom>
        <section className="services" id="services">
          <div className="container">
            <div className="section-title">
              <h1>services</h1>
              <span>what we do</span>
            </div>
            {/* <div className="services-content-description">
              <div className="box">
                <div className="inner">
                  <img src="/img/services/manicure.png" alt="img" />
                  <p>manicure</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/pedicure.png" alt="img" />
                  <p>padicure</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/makeup.png" alt="img" />
                  <p>makeup</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/hairstyle.png" alt="img" />
                  <p>hairstyle</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/haircut.png" alt="img" />
                  <p>haircut</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/eyebrow design.png" alt="img" />
                  <p>eyebrow design</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/waxing.png" alt="img" />
                  <p>waxing</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="/img/services/skin cleansing.png" alt="img" />
                  <p>skin cleansing</p>
                </div>
              </div>
            </div> */}
            {/* try 2 */}
            <div className="service-provide">
              <div class="cardss-grid" style={{ marginTop: "15px" }}>
                <div class="cardss">
                  <img
                    class="cardss__icon"
                    src="Images/bridalmakeup.png"
                    alt="bridalmakeup"
                    style={{ height: "270px", width: "220px" }}
                  />
                  <div class="cardss__body">
                    <h4 class="cardss__head">Bridal Makeup</h4>
                  </div>
                </div>
                <div class="cardss">
                  <img
                    class="cardss__icon"
                    src="Images/receptionmakeup.jpeg"
                    alt="receptionmakeup"
                    style={{ height: "265px", width: "220px" }}
                  />
                  <div class="cardss__body">
                    <h4 class="cardss__head">Reception Makeup</h4>
                  </div>
                </div>
                <div class="cardss">
                  <img
                    class="cardss__icon"
                    src="Images/partymakeup.jpeg"
                    alt="partymakeup"
                    style={{ height: "270px", width: "240px" }}
                  />
                  <div class="cardss__body">
                    <h4 class="cardss__head">Party Makeup</h4>
                  </div>
                </div>
              </div>
              <div class="cardss-grid">
                <div class="cardss">
                  <img
                    style={{ height: "270px", width: "225px" }}
                    class="cardss__icon"
                    src="Images/sidermakeup.jpeg"
                    alt="sidermakeup"
                  />
                  <div class="cardss__body">
                    <h4 class="cardss__head">Siders Makeup</h4>
                  </div>
                </div>
                <div class="cardss">
                  <img
                    class="cardss__icon"
                    src="Images/engagementmakeup.jpeg"
                    alt="engagementmakeup"
                    style={{ height: "275px", width: "230px" }}
                  />
                  <div class="cardss__body">
                    <h4 class="cardss__head">Engagement Makeup</h4>
                  </div>
                </div>
                <div class="cardss">
                  <img
                    style={{ height: "270px", width: "250px" }}
                    class="cardss__icon"
                    src="Images/weddingmakeup.jpeg"
                    alt="weddingmakeup"
                  />
                  <div class="cardss__body">
                    <h4 class="cardss__head">Pre Wedding Makeup</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* try 2 */}
          </div>
        </section>
        {/* <section> */}

        {/* try 2 */}
        <div className="service-provide" style={{ marginTop: "-7rem" }}>
          <div class="cardss-grid">
            <div class="cardss">
              <img
                style={{ height: "270px", width: "225px" }}
                class="cardss__icon"
                src="Images/babyshowermakeup.jpeg"
                alt="babyshowermakeup"
              />
              <div class="cardss__body">
                <h4 class="cardss__head">Baby Shower Makeup</h4>
              </div>
            </div>
            <div class="cardss">
              <img
                class="cardss__icon"
                src="Images/modelingmakeup.jpeg"
                alt="modelingmakeup"
                style={{ height: "275px", width: "230px" }}
              />
              <div class="cardss__body">
                <h4 class="cardss__head">Modeling Makeup</h4>
              </div>
            </div>
            <div class="cardss">
              <img
                style={{ height: "270px", width: "250px" }}
                class="cardss__icon"
                src="Images/hairstyle.jpeg"
                alt="hairstyle"
              />
              <div class="cardss__body">
                <h4 class="cardss__head">All Types of Hairstyle</h4>
              </div>
            </div>
          </div>
        </div>
        {/* try 2 */}

        {/* </section> */}
      </Zoom>
      {/* End Services Section */}
      {/* Start Package Section */}
      {/* <Zoom>
        <section className="package" id="package">
          <div className="section-title">
            <h1>promotional packages</h1>
            <span>for your bride's day</span>
          </div>
          <div className="package-cards">
            <div className="card">
              <div className="card-title">
                <h1>Bronze</h1>
              </div>
              <div className="card-items">
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>Hairstyle</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>makeup</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    nails<span>(traditional french)</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>hair removal</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>eyebrow design</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>skin cleansing</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>reserved bridal room</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>table fruit</span>
                  </p>
                </div>
                <button className="btn">&#x20B9; 500</button>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h1>Silver</h1>
              </div>
              <div className="card-items">
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>Hairstyle</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>makeup</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    nails<span>(traditional french)</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>hair removal</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>eyebrow design</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>skin cleansing</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>reserved bridal room</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>table fruit</span>
                  </p>
                </div>
                <button className="btn">&#x20B9; 2000</button>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h1>Gold</h1>
              </div>
              <div className="card-items">
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>Hairstyle</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>makeup</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    nails<span>(traditional french)</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>hair removal</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>eyebrow design</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>skin cleansing</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>reserved bridal room</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-times-square x-icon"></i>
                  <p className="not">
                    <span>table fruit</span>
                  </p>
                </div>
                <button className="btn">&#x20B9; 1500</button>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h1>Diamond</h1>
              </div>
              <div className="card-items">
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>Hairstyle</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>makeup</p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    nails<span>(traditional french)</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>hair removal</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>eyebrow design</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>skin cleansing</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>reserved bridal room</span>
                  </p>
                </div>
                <div className="item">
                  <i className="far fa-check-square check-icon"></i>
                  <p>
                    <span>table fruit</span>
                  </p>
                </div>
                <button className="btn"> &#x20B9; 2000</button>
              </div>
            </div>
          </div>
        </section>
      </Zoom> */}
      {/* End Package Section */}
      {/*  Start Gallery Section  */}
      {/* <Zoom> */}
      <section className="gallery" id="gallery" style={{ marginTop: "-1rem" }}>
        <div className="gallery-content">
          <div className="section-title">
            <h1>gallery</h1>
            <span>the princesses of our instagram</span>
          </div>
          {/* <div className="gallery-list-img">
              <div className="gallery-img">
                <img src="Images/photo1.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo2.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo3.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo4.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo5.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo6.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo7.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="Images/photo8.png" alt="Img" />
              </div>
            </div> */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            class="galleryy galleryy__content--flow"
          >
            <figure>
              <img
                src="Images/engagementmakeupp.jpg"
                alt="engagementmakeupp"
                title="Photo by Giacomo Lucarini for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
                {/* <h1 class="title title--secondary">6 years old</h1> */}
              </figcaption>
            </figure>

            <figure>
              <img
                src="Images/bridalmakeupp.jpg"
                alt="bridalmakeupp"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>
            <figure>
              <img
                src="Images/babyshowermakeupp.jpg"
                alt="babyshowermakeupp"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>

            <figure>
              <img
                src="Images/receptionmakeupp.jpg"
                alt="receptionmakeupp"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>
            <figure>
              <img
                src="Images/eyebrow.jpeg"
                alt="eyebrow"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>
            <figure>
              <img
                src="Images/partymakeupp.jpg"
                alt="partymakeupp"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>
            <figure>
              <img
                src="Images/partymakeuppp.jpg"
                alt="partymakeuppp"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>
            <figure>
              <img
                src="Images/couple.jpg"
                alt="couple"
                title="Photo by Sergey Semin for Unsplash"
              />
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">@rd_makeovers._</h1>
              </figcaption>
            </figure>
          </motion.main>
          {/* <button className="btn">see more</button> */}
        </div>
      </section>
      {/* </Zoom> */}
      {/* End Gallery Section */}
      {/* Start Footer Section */}
      <Zoom>
        <footer className="footer" id="contact" style={{ marginTop: "-6rem" }}>
          <div className="footer-list">
            <div className="footer-data">
              <h1>
                <a href="/">
                  {/* <img src="/img/logo.svg" /> */}
                  <h2>RD-Makeovers</h2>
                </a>
              </h1>
              <div className="footer-data-social">
                <a
                  href="https://www.instagram.com/invites/contact/?i=10jbx16cgw3o6&utm_content=mxqgqk5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-data">
              <h2>address</h2>
              <p>
                Yagnik Nagar, Near Network Building, Amboli, Andheri
                (W) 400058
              </p>
            </div>
            <div className="footer-data">
              <h2>We Opened</h2>
              <p>
                Everyday <br /> From 10:00 am To 8:00 pm
              </p>
            </div>
            <div className="footer-data">
              <h2>Contact</h2>
              <p>
                <a style={{ textDecoration: "none" }} href="tel: 9004043671">
                  <p> +91 9004043671</p>
                </a>
              </p>
              <p>
                <a
                  href="mailto: rdmakeovers2022@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  rdmakeovers2022@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="copy">
            <p>&copy; All Rights Reserved</p>
            <span>
              Created by 🤎{" "}
              <a
                href="https://surajyadav.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Suraj Yadav
              </a>
            </span>
          </div>
        </footer>
      </Zoom>
      {/*  End Footer Section */}{" "}
    </>
  );
};

export default Main;
