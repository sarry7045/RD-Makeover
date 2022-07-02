import React from "react";
import "../Components/Main.css";
import Typewriter from "typewriter-effect";
import Zoom from "react-reveal/Zoom";

const Main = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="navbar">
          <div className="logo">
            {/* <img src="img/logo.svg" alt="img" /> */}
            <h2>RD-Makeover</h2>
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
      </header>
      <section className="home">
        <div className="container">
          <div className="home-img">
            <img src="img/home-img.png" alt="img" />
          </div>
          <div className="home-content">
            <h1>
              {" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString(`Your big day <br/><span> in style</span>`)
                    .pauseFor(500);
                  // .deleteAll()

                  // .typeString(`Your big day <br/><span> in style</span>`);
                }}
              />
            </h1>
            {/* <h1>
              Your big day
              <br />
              <span>in style</span>
            </h1> */}
            <p>
              Come see our bride's corner and take the opportunity to schedule
              your date.
            </p>
            <a href="tel:+91 9004043671" className="btn btn-outline">
              <i className="fa fa-phone"></i>
              Schedule your time
            </a>
          </div>
        </div>
      </section>
      <Zoom>
        <section className="about" id="about">
          <div className="container">
            <div className="section-title">
              <h1>our story</h1>
              <span>RD-Makeover</span>
            </div>
            <div className="about-detail">
              <div className="about-detail-content">
                <div className="about-img">
                  <img src="img/about-img.jpg" alt="img" />
                </div>
                <div className="about-description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Velit possimus a sint
                  </p>
                  <p>
                    Obcaecati porro accusamus iusto rem aperiam. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Velit possimus
                    a sint
                  </p>
                  <p>
                    Eligendi nostrum architecto quibusdam. Neque odio enim quasi
                    ad culpa similique quas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services" id="services">
          <div className="services-content">
            <div className="section-title">
              <h1>services</h1>
              <span>what we do</span>
            </div>
            <div className="services-content-description">
              <div className="box">
                <div className="inner">
                  <img src="img/services/manicure.png" alt="img" />
                  <p>manicure</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/pedicure.png" alt="img" />
                  <p>padicure</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/makeup.png" alt="img" />
                  <p>makeup</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/hairstyle.png" alt="img" />
                  <p>hairstyle</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/haircut.png" alt="img" />
                  <p>haircut</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/eyebrow design.png" alt="img" />
                  <p>eyebrow design</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/waxing.png" alt="img" />
                  <p>waxing</p>
                </div>
              </div>
              <div className="box">
                <div className="inner">
                  <img src="img/services/skin cleansing.png" alt="img" />
                  <p>skin cleansing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Zoom>
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
                <button className="btn">&#x20B9; 1000</button>
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
      <Zoom>
        <section className="gallery" id="gallery">
          <div className="gallery-content">
            <div className="section-title">
              <h1>gallery</h1>
              <span>The princesses of our instagram</span>
            </div>
            <div className="gallery-list-img">
              <div className="gallery-img">
                <img src="img/img-insta/photo1.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo2.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo3.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo4.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo5.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo6.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo7.png" alt="img" />
              </div>
              <div className="gallery-img">
                <img src="img/img-insta/photo8.png" alt="img" />
              </div>
            </div>
            {/* <button className="btn">see more</button> */}
          </div>
        </section>
      </Zoom>
      {/* 
      <section className="testimonials">
        <div className="testimonials-content">
          <div className="section-title">
            <h1>testimonials</h1>
            <span>see what our customer say</span>
          </div>
          <div className="testimonials-card">
            <div className="testimonials-item">
              <div className="testimonials-img">
                <img src="img/testimonials/testimonials1.png" alt="img" />
              </div>
              <div className="testimonials-box">
                <div className="testimonials-name">
                  <h1>Celaena</h1>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-img">
                <img src="img/testimonials/testimonials2.png" alt="img" />
              </div>
              <div className="testimonials-box">
                <div className="testimonials-name">
                  <h1>Aelin</h1>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-img">
                <img src="img/testimonials/testimonials1.png" alt="img" />
              </div>
              <div className="testimonials-box">
                <div className="testimonials-name">
                  <h1>Luciana</h1>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-img">
                <img src="img/testimonials/testimonials2.png" alt="img" />
              </div>
              <div className="testimonials-box">
                <div className="testimonials-name">
                  <h1>Patricia</h1>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Zoom>
        <footer className="footer" id="contact">
          <div className="footer-list">
            <div className="footer-data">
              <h1>
                <a href="/">
                  {/* <img src="img/logo.svg" alt="img" /> */}
                  <h2>RD-Makeover</h2>
                </a>
              </h1>
              <div className="footer-data-social">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="footer-data">
              <h2>address</h2>
              <p>
                Yagnik Nagar, Amboli, Andheri(West) 400058
                <br />
                Mumbai, Maharashtra
              </p>
            </div>
            <div className="footer-data">
              <h2>We Opened</h2>
              <p>
                Monday To Sunday
                <br /> From 09:00am To 08.00pm
              </p>
            </div>
            <div className="footer-data">
              <h2>Contact</h2>
              <p>+91 9004043671</p>
            </div>
          </div>
          <div className="copy">
            <p>&copy; All Rights Reserved</p>
            <span>
              Created by 🤎{" "}
              <a href="https://surajyadav.vercel.app/">Suraj Yadav</a>
            </span>
          </div>
        </footer>
      </Zoom>
    </>
  );
};

export default Main;
