import React from "react";
import logo from "../src/assets/images/softamplifylogo1.png";
const Header = () => {
return (
<div>
<header className="header-area">
<div className="navbar-area navbar-two">
<div className="container">
<div className="row">
<div className="col-lg-12">
<nav className="navbar navbar-expand-lg">
<a className="navbar-brand" href="/">
<img src={logo} alt="Logo"/>
</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
<span className="toggler-icon"></span>
<span className="toggler-icon"></span>
<span className="toggler-icon"></span>
</button>
<div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
<ul className="navbar-nav m-auto">
<li className="nav-item active">
<a className="page-scroll" href="/">Home</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#about">About</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#team">Speakers</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#gallery">Gallery</a>
</li>

</ul>
</div>
<div className="navbar-btn d-none d-sm-inline-block">
<a className="main-btn" href="https://twitter.com/i/spaces/1eaKbrbDRMdKX">Join Tech Talk 6.0</a>
</div>
</nav> 
</div>
</div> 

</div> 
</div>
<div id="home" className="header-content-area bg_cover d-flex align-items-center" style={{backgroundImage: `url("https://preview.uideck.com/items/eventify/assets/images/header-bg.jpg")`}}>
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-10">
<div data-countdown="2022/6/09"></div>
<div className="header-content text-center">
<h2 className="header-title">6<sup>th</sup> Tech Talk</h2>
<h3 className="sub-title">6 September, 2022 </h3>
<ul className="header-btn">
<li><a className="main-btn main-btn-2" href="https://twitter.com/i/spaces/1eaKbrbDRMdKXr">Register Now</a></li>
<li><a className="main-btn" href="#about">Learn More</a></li>
</ul>
</div> 
</div>
</div> 
</div> 
</div> 
</header>
</div>
)
}

export default Header