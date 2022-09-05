import React from "react";
import mohamedimg from "../src/assets/images/Mohamed.jpg";
import eventimg from "../src/assets/images/techtalk6.0.jpg";
import timimg from "../src/assets/images/Tim1.jpg";

const Speakers = () => {
return (
<div>
<section id="team" className="team-area pt-115 pb-130">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-8">
<div className="section-title text-center pb-20">
<h2 className="title">Who’s Speaking</h2>
<p className="text">Tech Talk events provide the highest quality networking in the tech industry, bringing together the most influential software developer from microsoft with innovative experience</p>
</div> 
</div>
</div> 
<div className="row">
<div className="col-lg-4 col-sm-6">
<div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
<div className="team-image">
<img src={eventimg } alt="Event"/>
</div>
<div className="team-content">
<div className="team-social">
<ul className="social">
<li><a href="#speakers"><i className="lni-facebook-filled"></i></a></li>
<li><a href="#speakers"><i className="lni-twitter-original"></i></a></li>
<li><a href="#speakers"><i className="lni-linkedin-original"></i></a></li>
<li><a href="#speakers"><i className="lni-pinterest"></i></a></li>
</ul>
</div>
<h4 className="team-name"><a href="#speakers">Tech Talk 6.0</a></h4>
<span className="sub-title">Tech Event</span>
</div>
</div> 
</div>
<div className="col-lg-4 col-sm-6">
<div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
<div className="team-image">
<img src={mohamedimg} alt="Mohamed Hashem"/>
</div>
<div className="team-content">
<div className="team-social">
<ul className="social">
<li><a href="#speakers"><i className="lni-facebook-filled"></i></a></li>
<li><a href="#speakers"><i className="lni-twitter-original"></i></a></li>
<li><a href="#speakers"><i className="lni-linkedin-original"></i></a></li>
<li><a href="#speakers"><i className="lni-pinterest"></i></a></li>
</ul>
</div>
<h4 className="team-name"><a href="#speakers">Mohamed Hashem</a></h4>
<span className="sub-title">Software Developer</span>
</div>
</div> 
</div>
<div className="col-lg-4 col-sm-6">
<div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
<div className="team-image">
<img src={timimg} alt="Tim Okonkwo"/>
</div>
<div className="team-content">
<div className="team-social">
<ul className="social">
<li><a href="#speakers"><i className="lni-facebook-filled"></i></a></li>
<li><a href="#speakers"><i className="lni-twitter-original"></i></a></li>
<li><a href="#speakers"><i className="lni-linkedin-original"></i></a></li>
<li><a href="#speakers"><i className="lni-pinterest"></i></a></li>
</ul>
</div>
<h4 className="team-name"><a href="#speakers">Tim Okonkwo</a></h4>
<span className="sub-title">Event Host</span>
</div>
</div> 
</div>
</div> 
</div> 
</section>
</div>
)
}
export default Speakers