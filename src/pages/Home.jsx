import { useEffect } from "react";
import SvgSymbols from "../components/SvgSymbols";

// Importa los estilos del template
// Sugerencia: mueve los CSS a src/assets/styles/
import "../assets/styles/vendor.css";
import "../assets/styles/style.css";

export default function Home() {
  // Ocultar preloader al montar
  useEffect(() => {
    const pre = document.querySelector(".preloader");
    if (pre) {
      const t = setTimeout(() => (pre.style.display = "none"), 400);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      {/* Íconos embebidos (reutilizables con <use xlinkHref="#id" />) */}
      <SvgSymbols />

      {/* Preloader */}
      <div
        className="preloader"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <svg id="L4" width="100" height="100" viewBox="0 0 50 100">
          <circle fill="#111" cx="6" cy="50" r="6">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
          </circle>
          <circle fill="#111" cx="26" cy="50" r="6">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
          </circle>
          <circle fill="#111" cx="46" cy="50" r="6">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
          </circle>
        </svg>
      </div>

      {/* Search box (estático por ahora) */}
      <div className="search-box bg-dark position-relative">
        <div className="search-wrap">
          <div className="close-button">
            <svg className="close" style={{ fill: "white" }}>
              <use xlinkHref="#close"></use>
            </svg>
          </div>
          <form id="search-form" className="text-lg-center text-md-left pt-3" action="/" method="get">
            <input type="text" className="search-input" placeholder="Search..." />
            <svg className="search">
              <use xlinkHref="#search"></use>
            </svg>
          </form>
        </div>
      </div>

      {/* Modal Quick View */}
      <div className="modal fade" id="modaltoggle" aria-hidden="true" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="col-lg-12 col-md-12 me-3">
                <div className="image-holder">
                  <img src="/images/summary-item1.jpg" alt="Shoes" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="summary">
                  <div className="summary-content fs-6">
                    <div className="product-header d-flex justify-content-between mt-4">
                      <h3 className="display-7">Running Shoes For Men</h3>
                      <div className="modal-close-btn">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                    </div>
                    <span className="product-price fs-3">$99</span>
                    <div className="product-details">
                      <p className="fs-7">
                        Buy good shoes and a good mattress, because when you're not in one you're in the other...
                      </p>
                    </div>
                    <ul className="select">
                      <li>
                        <strong>Colour Shown:</strong> Red, White, Black
                      </li>
                      <li>
                        <strong>Style:</strong> SM3018-100
                      </li>
                    </ul>
                    <div className="variations-form shopify-cart">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="quantity d-flex pb-4">
                            <div className="qty-number align-top qty-number-plus d-flex justify-content-center align-items-center text-center">
                              <span className="increase-qty plus">
                                <svg className="plus">
                                  <use xlinkHref="#plus"></use>
                                </svg>
                              </span>
                            </div>
                            <input
                              type="number"
                              id="quantity_001"
                              className="input-text text-center"
                              step="1"
                              min="1"
                              name="quantity"
                              defaultValue="1"
                              title="Qty"
                            />
                            <div className="qty-number qty-number-minus d-flex justify-content-center align-items-center text-center">
                              <span className="increase-qty minus">
                                <svg className="minus">
                                  <use xlinkHref="#minus"></use>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <a rel="nofollow" href="#" className="out-stock button">
                            Out of stock
                          </a>
                          <button type="submit" className="btn btn-medium btn-black hvr-sweep-to-right">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="categories d-flex flex-wrap pt-3">
                      <strong className="pe-2">Categories:</strong>
                      <a href="#" title="categories">
                        Clothing,
                      </a>
                      <a href="#" title="categories">
                        Men&apos;s Clothes,
                      </a>
                      <a href="#" title="categories">
                        Tops &amp; T-Shirts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Cart */}
      <div className="modal fade" id="modallong" tabIndex={-1} aria-modal="true" role="dialog">
        <div className="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5">Cart</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {/* ...contenido de carrito igual al template... */}
              {/* (He mantenido la estructura; puedes poblarla desde estado luego) */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Login */}
      <div className="modal fade" id="modallogin" tabIndex={-1} aria-modal="true" role="dialog">
        <div className="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header mx-auto border-0">
              <h2 className="modal-title fs-3 fw-normal">Login</h2>
            </div>
            <div className="modal-body">
              <div className="login-detail">
                <div className="login-form p-0">
                  <div className="col-lg-12 mx-auto">
                    <form id="login-form">
                      <input type="text" name="username" placeholder="Username or Email Address *" className="mb-3 ps-3 text-input" />
                      <input type="password" name="password" placeholder="Password" className="ps-3 text-input" />
                      <div className="checkbox d-flex justify-content-between mt-4">
                        <p className="checkbox-form">
                          <label>
                            <input name="rememberme" type="checkbox" id="remember-me" value="forever" /> Remember me
                          </label>
                        </p>
                        <p className="lost-password">
                          <a href="#">Forgot your password?</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer mt-5 d-flex justify-content-center">
                  <button type="button" className="btn btn-red hvr-sweep-to-right dark-sweep">
                    Login
                  </button>
                  <button type="button" className="btn btn-outline-gray hvr-sweep-to-right dark-sweep">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header id="header" className="site-header text-black">
        {/* top bar */}
        <div className="header-top border-bottom py-2">
          <div className="container-lg">
            <div className="row justify-content-evenly">
              <div className="col">
                <ul className="social-links list-unstyled d-flex m-0">
                  <li className="pe-2">
                    <a href="#">
                      <svg className="facebook" width="20" height="20">
                        <use xlinkHref="#facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="pe-2">
                    <a href="#">
                      <svg className="instagram" width="20" height="20">
                        <use xlinkHref="#instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="pe-2">
                    <a href="#">
                      <svg className="youtube" width="20" height="20">
                        <use xlinkHref="#youtube"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg className="pinterest" width="20" height="20">
                        <use xlinkHref="#pinterest"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col d-none d-md-block">
                <p className="text-center text-black m-0">
                  <strong>Special Offer</strong>: Free Shipping on all the orders above $100
                </p>
              </div>
              <div className="col">
                <ul className="d-flex justify-content-end gap-3 list-unstyled m-0">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* navbar */}
        <nav id="header-nav" className="navbar navbar-expand-lg">
          <div className="container-lg">
            <a className="navbar-brand" href="/">
              <img src="/images/main-logo.png" className="logo" alt="logo" />
            </a>
            <button
              className="navbar-toggler d-flex d-lg-none order-3 border-0 p-1 ms-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg className="navbar-icon">
                <use xlinkHref="#navbar-icon"></use>
              </svg>
            </button>

            <div className="offcanvas offcanvas-end" id="bdNavbar" tabIndex={-1}>
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand ps-3" href="/">
                  <img src="/images/main-logo.png" className="logo" alt="logo" />
                </a>
                <button type="button" className="btn-close btn-close-black p-5" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
              </div>
              <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav fw-bold justify-content-end align-items-center flex-grow-1">
                  <li className="nav-item dropdown">
                    <a className="nav-link me-5 active dropdown-toggle border-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                    <ul className="dropdown-menu fw-bold">
                      <li><a href="/" className="dropdown-item">Home V1</a></li>
                      <li><a href="/" className="dropdown-item">Home V2</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link me-5" href="#">Men</a></li>
                  <li className="nav-item"><a className="nav-link me-5" href="#">Women</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link me-5 active dropdown-toggle border-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">Page</a>
                    <ul className="dropdown-menu fw-bold">
                      <li><a className="dropdown-item" href="/">About Us</a></li>
                      <li><a className="dropdown-item" href="/">Shop</a></li>
                      <li><a className="dropdown-item" href="/">Blog</a></li>
                      <li><a className="dropdown-item" href="/">Single Product</a></li>
                      <li><a className="dropdown-item" href="/">Single Post</a></li>
                      <li><a className="dropdown-item" href="/">Styles</a></li>
                      <li><a href="#" data-bs-toggle="modal" data-bs-target="#modallong" className="dropdown-item">cart</a></li>
                      <li><a href="#" data-bs-toggle="modal" data-bs-target="#modallogin" className="dropdown-item">Login</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link me-5" href="/">Shop</a></li>
                  <li className="nav-item"><a className="nav-link me-5" href="#">Sale</a></li>
                </ul>
              </div>
            </div>

            <div className="user-items ps-0 ps-md-5">
              <ul className="d-flex justify-content-end list-unstyled align-item-center m-0">
                <li className="pe-3">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modallogin" className="border-0">
                    <svg className="user" width="24" height="24">
                      <use xlinkHref="#user"></use>
                    </svg>
                  </a>
                </li>
                <li className="pe-3">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modallong" className="border-0">
                    <svg className="shopping-cart" width="24" height="24">
                      <use xlinkHref="#shopping-cart"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="search-item border-0" data-bs-toggle="collapse" data-bs-target="#search-box" aria-label="Toggle navigation">
                    <svg className="search" width="24" height="24">
                      <use xlinkHref="#search"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Intro (Swiper placeholders) */}
      <section id="intro" className="position-relative mt-4">
        <div className="container-lg">
          <div className="swiper main-swiper">
            <div className="swiper-wrapper">
              {/* Slides (mantengo estructura e imágenes) */}
              <div className="swiper-slide">
                <div className="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
                  <img src="/images/card-image1.jpg" alt="shoes" className="img-fluid jarallax-img" />
                  <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                    <h2 className="card-title display-3 light">Stylish shoes for Women</h2>
                    <a href="/" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* ...más slides como en tu HTML... */}
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Discount */}
      <section className="discount-coupon py-2 my-2 py-md-5 my-md-5">
        <div className="container">
          <div className="bg-gray coupon position-relative p-5">
            <div className="bold-text position-absolute">10% OFF</div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7 col-md-12 mb-3">
                <div className="coupon-header">
                  <h2 className="display-7">10% OFF Discount Coupons</h2>
                  <p className="m-0">Subscribe us to get 10% OFF on all the purchases</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="btn-wrap">
                  <a href="#" className="btn btn-black btn-medium text-uppercase hvr-sweep-to-right">Email me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (estático de ejemplo) */}
      <section id="featured-products" className="product-store">
        <div className="container-md">
          <div className="display-header d-flex align-items-center justify-content-between">
            <h2 className="section-title text-uppercase">Featured Products</h2>
            <div className="btn-right">
              <a href="/" className="d-inline-block text-uppercase text-hover fw-bold">View all</a>
            </div>
          </div>
          {/* Cards como en tu HTML... */}
        </div>
      </section>

      {/* Latest Products (idem) */}
      <section id="latest-products" className="product-store py-2 my-2 py-md-5 my-md-5 pt-0">
        <div className="container-md">
          <div className="display-header d-flex align-items-center justify-content-between">
            <h2 className="section-title text-uppercase">Latest Products</h2>
            <div className="btn-right">
              <a href="/" className="d-inline-block text-uppercase text-hover fw-bold">View all</a>
            </div>
          </div>
          {/* Cards como en tu HTML... */}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-5 border-top">
        <div className="container-lg">
          {/* ...columnas de footer iguales al template... */}
          <div className="row">
            <div className="col-md-6"><p>© Copyright Stylish 2023.</p></div>
            <div className="col-md-6 text-lg-end">
              <p>
                Free HTML by{" "}
                <a href="https://templatesjungle.com/" target="_blank" rel="noreferrer">TemplatesJungle</a>
                <br />
                Distributed by{" "}
                <a href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
