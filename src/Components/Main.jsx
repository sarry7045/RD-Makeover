import React from "react";
import "../Components/Main.css";

const Main = () => {
  return (
    <>
      <header class="header" id="header">
        <div class="navbar">
          <div class="logo">
            <img src="img/logo.svg" alt="img" />
          </div>
          <nav class="nav-menu" id="nav-menu">
            <ul class="nav-list">
              <li>
                <a href="/" class="nav-link active">
                  home
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link">
                  about
                </a>
              </li>
              <li>
                <a href="#services" class="nav-link">
                  services
                </a>
              </li>
              <li>
                <a href="#package" class="nav-link">
                  package
                </a>
              </li>
              <li>
                <a href="#gallery" class="nav-link">
                  gallery
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </nav>
          <div class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </header>
      <section class="home">
        <div class="container">
          <div class="home-img">
            <img src="img/home-img.png" alt="img" />
          </div>
          <div class="home-content">
            <h1>
              Your big day
              <br />
              <span>in style</span>
            </h1>
            <p>
              Come see our bride's corner and take the opportunity to schedule
              your date.
            </p>
            <a href="/" class="btn btn-outline">
              <i class="fab fa-whatsapp"></i>
              Schedule your time
            </a>
          </div>
        </div>
      </section>
      <section class="about" id="about">
        <div class="container">
          <div class="section-title">
            <h1>our story</h1>
            <span>studio hair</span>
          </div>
          <div class="about-detail">
            <div class="about-detail-content">
              <div class="about-img">
                <img src="img/about-img.jpg" alt="img" />
              </div>
              <div class="about-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit
                  possimus a sint
                </p>
                <p>
                  Obcaecati porro accusamus iusto rem aperiam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Velit possimus a sint
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
      <section class="services" id="services">
        <div class="services-content">
          <div class="section-title">
            <h1>services</h1>
            <span>what we do</span>
          </div>
          <div class="services-content-description">
            <div class="box">
              <div class="inner">
                <img src="img/services/manicure.png" alt="img" />
                <p>manicure</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/pedicure.png" alt="img" />
                <p>padicure</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/makeup.png" alt="img" />
                <p>makeup</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/hairstyle.png" alt="img" />
                <p>hairstyle</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/haircut.png" alt="img" />
                <p>haircut</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/eyebrow design.png" alt="img" />
                <p>eyebrow design</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/waxing.png" alt="img" />
                <p>waxing</p>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <img src="img/services/skin cleansing.png" alt="img" />
                <p>skin cleansing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="package" id="package">
        <div class="section-title">
          <h1>promotional packages</h1>
          <span>for your bride's day</span>
        </div>
        <div class="package-cards">
          <div class="card">
            <div class="card-title">
              <h1>Bronze</h1>
            </div>
            <div class="card-items">
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>hair removal</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>eyebrow design</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>skin cleansing</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>table fruit</span>
                </p>
              </div>
              <button class="btn">I want this</button>
            </div>
          </div>
          <div class="card">
            <div class="card-title">
              <h1>Silver</h1>
            </div>
            <div class="card-items">
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>hair removal</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>eyebrow design</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>skin cleansing</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>table fruit</span>
                </p>
              </div>
              <button class="btn">I want this</button>
            </div>
          </div>
          <div class="card">
            <div class="card-title">
              <h1>Gold</h1>
            </div>
            <div class="card-items">
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>hair removal</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>eyebrow design</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>skin cleansing</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-times-square x-icon"></i>
                <p class="not">
                  <span>table fruit</span>
                </p>
              </div>
              <button class="btn">I want this</button>
            </div>
          </div>
          <div class="card">
            <div class="card-title">
              <h1>Diamond</h1>
            </div>
            <div class="card-items">
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>hair removal</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>eyebrow design</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>skin cleansing</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div class="item">
                <i class="far fa-check-square check-icon"></i>
                <p>
                  <span>table fruit</span>
                </p>
              </div>
              <button class="btn">I want this</button>
            </div>
          </div>
        </div>
      </section>
      <section class="gallery" id="gallery">
        <div class="gallery-content">
          <div class="section-title">
            <h1>gallery</h1>
            <span>the princesses of our instagram</span>
          </div>
          <div class="gallery-list-img">
            <div class="gallery-img">
              <img src="img/img-insta/photo1.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo2.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo3.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo4.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo5.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo6.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo7.png" alt="img" />
            </div>
            <div class="gallery-img">
              <img src="img/img-insta/photo8.png" alt="img" />
            </div>
          </div>
          <button class="btn">see more</button>
        </div>
      </section>

      <section class="testimonials">
        <div class="testimonials-content">
          <div class="section-title">
            <h1>testimonials</h1>
            <span>see what our customer say</span>
          </div>
          <div class="testimonials-card">
            <div class="testimonials-item">
              <div class="testimonials-img">
                <img src="img/testimonials/testimonials1.png" alt="img" />
              </div>
              <div class="testimonials-box">
                <div class="testimonials-name">
                  <h1>Celaena</h1>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
            <div class="testimonials-item">
              <div class="testimonials-img">
                <img src="img/testimonials/testimonials2.png" alt="img" />
              </div>
              <div class="testimonials-box">
                <div class="testimonials-name">
                  <h1>Aelin</h1>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
            <div class="testimonials-item">
              <div class="testimonials-img">
                <img src="img/testimonials/testimonials1.png" alt="img" />
              </div>
              <div class="testimonials-box">
                <div class="testimonials-name">
                  <h1>Luciana</h1>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
            <div class="testimonials-item">
              <div class="testimonials-img">
                <img src="img/testimonials/testimonials2.png" alt="img" />
              </div>
              <div class="testimonials-box">
                <div class="testimonials-name">
                  <h1>Patricia</h1>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="testimonials-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor earum culpa eius, libero reprehenderit maiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer" id="contact">
        <div class="footer-list">
          <div class="footer-data">
            <h1>
              <a href="/">
                <img src="img/logo.svg" alt="img" />
              </a>
            </h1>
            <div class="footer-data-social">
              <a href="/">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="footer-data">
            <h2>address</h2>
            <p>
              Alharm - St 26
              <br /> Giza - Egypt
            </p>
          </div>
          <div class="footer-data">
            <h2>We Opened</h2>
            <p>
              Monday To Friday <br /> From 09:00 To 18:00
            </p>
          </div>
          <div class="footer-data">
            <h2>Contact</h2>
            <p>(20) 1111-222-333</p>
            <p>(20) 4444-555-666</p>
          </div>
        </div>
        <div class="copy">
          <p>&copy; All Rights Reserved</p>
          <span>Created by 🤎 Web Trend</span>
        </div>
      </footer>
    </>
  );
};

export default Main;
