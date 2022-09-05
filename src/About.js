import React from "react";
import eventimg from "../src/assets/images/techtalk6.0.jpg";


const About = () => {
return (
<div>
<section id="about" className="about-area pb-130 pt-80">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-6">
<div className="about-image mt-50 wow fadeInLeft" data-wow-duration="1s">
<img src={eventimg} alt="About"/>
</div> 
</div>
<div className="col-lg-6">
<div className="about-content mt-45 wow fadeInRight" data-wow-duration="1s">
<div className="section-title">
<h2 className="title">About The Event</h2>
</div> 
<p className="text mt-30">Tech Talk is a monthly event organized by softamplify technologies where a particular technology is presented by an expert, followed by a Q&A or Workshop. <br/> <br/>It brings eResearch Technical Specialists together in a forum for sharing technical experience and expertise. This new series focuses on narrower technical specialist topics, more in line with the technical community's interests.
</p>
<p  className="text mt-30">Tech Talk events provide the highest quality networking in the tech industry, bringing together the most influential software developer from microsoft with innovative experience. TechTalk event is an investment in yourself and your future.</p>
<p className="date"><span>6<sup>th</sup></span> September’ 22</p>
</div> 
</div>
</div> 
</div> 
</section>
</div>
)
}

export default About;