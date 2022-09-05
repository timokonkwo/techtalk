import React from "react";
import techtalk1 from "../src/assets/images/techtalk1.0.png";
import techtalk2 from "../src/assets/images/techtalk2.0.png";
import techtalk3 from "../src/assets/images/techtalk3.0.png";
import techtalk4 from "../src/assets/images/techtalk4.0.png";
import techtalk5 from "../src/assets/images/techtalk5.0.png";

const PastEvents = () => {
return (
<div>
<section id="gallery" className="event-gallery pt-115 pb-50 gray-bg">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-8">
<div className="section-title text-center pb-50">
<h2 className="title">Past Tech Talk</h2>
<p className="text">The past tech talk featured talented, skilled and exciting adventures of amazing entrepreneurs and developers.</p>
</div> 
</div>
</div> 
</div> 
<div className="row no-gutters">
<div className="col-lg-6">
<div className="single-gallery">
<div className="gallery-image">
<img src={techtalk1} alt="Gallery"/>
</div>
<div className="gallery-content">
<a className="image-popup" href={techtalk1}><i className="lni-plus"></i></a>
</div>
</div> 
</div>
<div className="col-lg-6">
<div className="row no-gutters">
<div className="col-sm-6">
<div className="single-gallery">
<div className="gallery-image">
<img src={techtalk2} alt="Gallery"/>
</div>
<div className="gallery-content">
<a className="image-popup" href={techtalk2} ><i className="lni-plus"></i></a>
</div>
</div> 
</div>
<div className="col-sm-6">
<div className="single-gallery">
<div className="gallery-image">
<img src={techtalk3}  alt="Gallery"/>
</div>
<div className="gallery-content">
<a className="image-popup" href={techtalk3} ><i className="lni-plus"></i></a>
</div>
</div> 
</div>
<div className="col-sm-6">
<div className="single-gallery">
<div className="gallery-image">
<img src={techtalk4}  alt="Gallery"/>
</div>
<div className="gallery-content">
<a className="image-popup" href={techtalk4} ><i className="lni-plus"></i></a>
</div>
</div> 
</div>
<div className="col-sm-6">
<div className="single-gallery">
<div className="gallery-image">
<img src={techtalk5} alt="Gallery"/>
</div>
<div className="gallery-content">
<a className="image-popup" href={techtalk5}><i className="lni-plus"></i></a>
</div>
</div> 
</div>
</div> 
</div>
</div> 
<div className="container">
<div className="row">
<div className="col-lg-12">
<div className="gallery-btn pt-60 text-center">
<a className="main-btn main-btn-2" href="https://twitter.com/i/spaces/1eaKbrbDRMdKX">Join Tech Talk 6.0</a>
</div>
</div>
</div> 
</div> 
</section>
</div>
)
}

export default PastEvents