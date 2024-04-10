


// Define header and footer HTML content

 const headerContent = `
<nav class="navbar navbar-expand-lg " id="nav-bar"> 
<div class="container-fluid">
<a class="navbar-brand" href="#"><img src="images/logo1 (1).jpg" class="img-fluid" width="200px" alt="logo"></a>
<button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<form class="d-flex justify-content-center align-center" role="search" id="search-form">
  <input class="form-control me-2" type="search" placeholder="Product name,Category name,etc"
    aria-label="Search" id="search-box">
  <button class="btn " type="submit" id="search-btn">Search</button>
</form>
<div class=" login-form">
  <a href="login.html"><button type="button" id="login">Login</button></a>
  <a href="cartpage.html"> <i class="cart fa fa-shopping-cart " id="cart-icon"></i></a>
</div>
</div>
</div>
</nav> 

<!-- ****************************second**************** -->

<div class="navigation">
<ul>
<li class="nav-item">
  <a class="nav-link active" href="index.html">Home</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="allProduct.html">All Products</a>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="women.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Women
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="women.html">All</a></li>
    <li><a class="dropdown-item" href="dresswomen.html">Dresses</a></li>
    <li><a class="dropdown-item" href="womenpant.html">Pants</a></li>
    <li><a class="dropdown-item" href="skirtwomen.html">Skirts</a></li>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="men.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Men
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="men.html">All</a></li>
    <li><a class="dropdown-item" href="shirtsmen.html">Shirts</a></li>
    <li><a class="dropdown-item" href="menpants.html">Pants</a></li>
    <li><a class="dropdown-item" href="hoodies.html">Hoodies</a></li>
  </ul>
</li>
<li class="nav-item">
  <a class="nav-link" href="kids.html">Kids</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="contact.html">Contact Us</a>
</li>
</ul>
</div> `;

 const footerContent = `
<div class="container-fluid">
<div class="row justify-content-evenly bg-dark pt-3 pb-5">
  <div class="col-sm-2 mt-3 text-center text-white">
    <h5>Women</h5>
    <a href="dresswomen.html" class="link-light text-decoration-none ">Dress</a><br>
    <a href="womenpant.html" class="link-light text-decoration-none ">Pants</a><br>
    <a href="skirtwomen.html" class="link-light text-decoration-none ">Skirts</a>
  </div>
  <div class="col-sm-2 mt-3 text-center text-white">
    <h5>Men</h5>
    <a href="shirtsmen.html" class="link-light text-decoration-none">Shirts</a><br>
    <a href="menpants.html" class="link-light text-decoration-none">Pants</a><br>
    <a href="hoodies.html" class="link-light text-decoration-none">Hoodies</a>
  </div>
  <div class="col-sm-2 mt-3 text-center text-white">
    <h5>Kids</h5>
  </div>
  <div class="col-sm-2 mt-3 text-center text-white">
    <h5>Links</h5>
        
    <a href="index.html" class="link-light text-decoration-none">Home</a><br>
    <a href="login.html" class="link-light text-decoration-none">Login</a><br>
    <a href="contact.html" class="link-light text-decoration-none">Contact</a>
</div>
  </div>
</div>
</div>
<div class="row bg-dark text-white text-center pb-3">
  <hr>
  <div class="col-12">
      <p>Copyright&#169;Ecommerce2023-2024</p>
  </div>
</div> `;
