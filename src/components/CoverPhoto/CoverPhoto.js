import React, { Component } from 'react';
import './CoverPhoto.scss';
import fog from '../../images/fog-low.png';
import pomona from '../../images/pomona-icon.ico';

class CoverPhoto extends Component {

  render() {
	const linkColor = {
		color: 'white',
	};

    return (
        <div className="page-header section-dark">
            <div className="filter"></div>
    		<div className="content-center">
    			<div className="container">
    				<div className="title-brand">
    					<h1 className="presentation-title">Juan Zamudio</h1>
    					<div className="fog-low">
    						<img src={fog} alt=""></img>
    					</div>
    					<div className="fog-low right">
    						<img src={fog} alt=""></img>
    					</div>
    				</div>

    				<h2 className="presentation-subtitle text-center">
					I am currently a senior at Pomona College double majoring in computer science and theatre. I am passionate about design, user experience, and diversity in tech.
					</h2>
    			</div>
    		</div>
            <div className="moving-clouds"></div>
    		<h6 className="category category-absolute">
				<a style={linkColor} href="tel:+16036822835" title="Call Juan">603.682.2835</a> | 
				<a style={linkColor} href="mailto:jzamudio14@gmail.com" title="Email Juan"> jzamudio14@gmail.com</a> | 
				<a style={linkColor} href="https://www.google.com/maps/place/Claremont,+CA/@34.1223595,-117.7493742,13z/data=!3m1!4b1!4m5!3m4!1s0x80c33a947ba7f65f:0xd57add892abc374d!8m2!3d34.0966764!4d-117.7197785" title="Find Claremont"> Claremont, California</a>
				{/* <a href="https://www.creative-tim.com" target="_blank">
					<img src={pomona} className="creative-tim-logo"></img>
				</a> */}
    		</h6>
    	</div>
    );
  }
}

export default CoverPhoto;
