import React from "react";
import "../Components/Main.css";
import Zoom from "react-reveal/Zoom";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RD-MakeOver | Makeup Artist | Hairstylist</title>
        <link rel="canonical" href="https://www.rdmakeovers.com" />
        <meta
          name="description"
          content="Professional Makeup artist and Hairstylist"
        />
        <meta
          name="keywords"
          content="rd makeovers, rd makeovers mumbai,makeup,hair artist, makeup artist, hair artist, haircut, eyebrow design, makeup artist mumabi, hairstylist mumbai, hair style for girl  "
        />
        <meta property="og:site_name" content="RD Makeover" />
      </Helmet>
      <header className="header" id="header">
        <div className="navbar">
          <div className="logo">
            {/* <img src="/img/logo.svg" /> */}
            <h2>RD-Makeovers</h2>
          </div>
          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-link active">
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
              <li>
                <a href="#package" className="nav-link">
                  package
                </a>
              </li>
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
        </div>

        <div class="wrapper" id="nav-menu">
          <nav>
            <a href="#" class="logo">
              AAA
            </a>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#package">Package</a>
              </li>
              <li>
                <a href="#galery">Gallery</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Nav */}
      {/* Nav */}
      {/* Start Home Section */}
      <section className="home">
        <div className="container">
          <div className="home-img">
            <img src="/img/home-img.png" alt="img" />
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
      </section>
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
                  <img src="/img/img-insta/11.jpeg" alt="img" />
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

                  {/* <p>
                    Call 9004043671 or send an Email on
                    rdmakeovers2022@gmail.com to avail the best in makeup
                    services! 
                  </p>
                  <br/> */}
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
            <div className="services-content-description">
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
            </div>
          </div>
        </section>
      </Zoom>
      {/* End Services Section */}
      {/* Start Package Section */}
      <Zoom>
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
      </Zoom>
      {/* End Package Section */}
      {/*  Start Gallery Section  */}
      <Zoom>
        <section className="gallery" id="gallery">
          <div className="gallery-content">
            <div className="section-title">
              <h1>gallery</h1>
              <span>the princesses of our instagram</span>
            </div>
            <div className="gallery-list-img">
              <div className="gallery-img">
                <img src="/img/img-insta/photo1.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo2.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo3.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo4.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo5.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo6.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo7.png" alt="Img" />
              </div>
              <div className="gallery-img">
                <img src="/img/img-insta/photo8.png" alt="Img" />
              </div>
            </div>
            {/* <button className="btn">see more</button> */}
          </div>
        </section>
      </Zoom>
      {/* End Gallery Section */}
      {/* Start Footer Section */}
      <Zoom>
        <footer className="footer" id="contact">
          <div className="footer-list">
            <div className="footer-data">
              <h1>
                <a href="/">
                  {/* <img src="/img/logo.svg" /> */}
                  <h2>RD-Makeovers</h2>
                </a>
              </h1>
              <div className="footer-data-social">
                {/* <a href="">
                  <i className="fab fa-facebook"></i>
                </a> */}
                <a
                  href="https://www.instagram.com/invites/contact/?i=10jbx16cgw3o6&utm_content=mxqgqk5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="">
                  <i className="fab fa-twitter"></i>
                </a> */}
              </div>
            </div>
            <div className="footer-data">
              <h2>address</h2>
              <p>
                Yagnik Nagar, Abdul Pada, Near Network Building, Amboli, Andheri
                (W) 400058
              </p>
            </div>
            <div className="footer-data">
              <h2>We Opened</h2>
              <p>
                Everyday <br /> From 10.00 am To 8.00 pm
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
      {/* <main class="gallery gallery__content--flow">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
                alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
                title="Photo by Giacomo Lucarini for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Dog: Miss Sunshine</h1>
                <h2 class="title title--secondary">6 years old</h2>
            </figcaption>
        </figure>

        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673__340.jpg"
                alt="A tabby kitten with green eyes. " title="Photo by Sergey Semin for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Kitten: Reese</h1>
                <h2 class="title title--secondary">8 weeks old</h2>
            </figcaption>
        </figure>

        <figure>
            <img src="img/mainpage.jpg"
                alt="A light brown puppy standing on a white and tan woven pet bed. "
                title="Photo by Sergey Semin for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Bunny: Sofia</h1>
                <h2 class="title title--secondary">3 years old</h2>
            </figcaption>
        </figure>
        
        <figure>
            <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"
                alt="A light brown puppy standing on a white and tan woven pet bed. "
                title="Photo by Sergey Semin for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Kitten: Katie</h1>
                <h2 class="title title--secondary">1 years old</h2>
            </figcaption>
        </figure>

        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
                alt="A light brown puppy standing on a white and tan woven pet bed. "
                title="Photo by Sergey Semin for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Puppy: Bruce</h1>
                <h2 class="title title--secondary">10 weeks old</h2>
            </figcaption>
        </figure>
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462__340.jpg"
                alt="A light brown puppy standing on a white and tan woven pet bed. "
                title="Photo by Sergey Semin for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Bunny: Jeff</h1>
                <h2 class="title title--secondary">2 years old</h2>
            </figcaption>
        </figure>
    </main> */}
      {/* try 2 */}
      {/* <div class="cards-grid">
         <div class="card">
            <img class="card__icon" src="img/img-insta/photo1.png" alt="ux-design"/>
            <div class="card__body">
               <h4 class="card__head">UI/UX Design</h4>
               <p class="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
            </div>
         </div>
         <div class="card">
            <img class="card__icon" src="img/img-insta/photo1.png" alt="development"/>
            <div class="card__body">
               <h4 class="card__head">UI/UX Design</h4>
               <p class="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
            </div>
         </div>
         <div class="card">
            <img class="card__icon" src="img/img-insta/photo1.png" alt="brand"/>
            <div class="card__body">
               <h4 class="card__head">UI/UX Design</h4>
               <p class="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
            </div>
         </div>
      </div> */}
      {/* try 2 */}
      {/*  End Footer Section */}{" "}
    </>
  );
};

export default Main;
