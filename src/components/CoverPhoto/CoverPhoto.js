import React, { Component } from 'react';
import './CoverPhoto.scss';
import fog from '../../images/fog-low.png';
import pomona from '../../images/pomona-icon.ico';

class CoverPhoto extends Component {

  render() {

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
            <div className="moving-clouds">

            </div>
    		<h6 className="category category-absolute">
			603.682.2835 | jzamudio14@gmail.com | Claremont, California
    			<a href="https://www.creative-tim.com" target="_blank">
    				<img src={pomona} className="creative-tim-logo"></img>
    			</a>
    		</h6>
    	</div>
    );
  }
}

export default CoverPhoto;
