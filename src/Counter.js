import React from "react";

const Counter = ()=>{
return (
<div>

<section id="counter" className="counter-area pt-80 pb-130">
<div className="container">
<div className="row">
<div className="col-lg-3 col-sm-6">
<div className="single-counter text-center mt-100 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
<div className="counter-icon">
<i className="lni-mic"></i>
</div>
<div className="counter-content">
<span className="count counter">5</span>
<p className="text">Expert Speaker</p>
</div>
</div> 
</div>
<div className="col-lg-3 col-sm-6">
<div className="single-counter text-center mt-100 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
<div className="counter-icon">
<i className="lni-bulb"></i>
</div>
<div className="counter-content">
<span className="count counter">1200</span>
<p className="text">Seats Available</p>
</div>
</div> 
</div>
<div className="col-lg-3 col-sm-6">
<div className="single-counter text-center mt-100 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
<div className="counter-icon">
<i className="lni-briefcase"></i>
</div>
<div className="counter-content">
<span className="count counter">10</span>
<p className="text">Sponsors</p>
</div>
</div> 
</div>
<div className="col-lg-3 col-sm-6">
<div className="single-counter text-center mt-100 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
<div className="counter-icon">
<i className="lni-coffee-cup"></i>
</div>
<div className="counter-content">
<span className="count counter">12</span>
<p className="text">Sessions</p>
</div>
</div> 
</div>
</div> 
</div> 
</section>
</div>
)
}

export default Counter