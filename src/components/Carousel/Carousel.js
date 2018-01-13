import React, { Component } from 'react';
import './Carousel.scss';
import first_image from '../../images/soroush-karimi.jpg';
import second_image from '../../images/federico-beccari.jpg';
import third_image from '../../images/joshua-stannard.jpg';

class Carousel extends Component {

    render() {
        return (
            <div class="section" id="carousel">
				<div class="container">
					<div class="row">
						<div class="col-md-8 ml-auto mr-auto">
							<div class="card page-carousel">
								<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
								    <ol class="carousel-indicators">
    								    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    								    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    								    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
								    </ol>
                                    <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active">
                                        <img class="d-block img-fluid" src={first_image} alt="First slide"></img>
                                    	<div class="carousel-caption d-none d-md-block">
                                            <p>MigraAlert</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block img-fluid" src={second_image} alt="Second slide"></img>
                                    	<div class="carousel-caption d-none d-md-block">
                                    	    <p>BOCO</p>
                                    	</div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block img-fluid" src={third_image} alt="Third slide"></img>
                                    	<div class="carousel-caption d-none d-md-block">
                                    	    <p>5C Eats</p>
                                    	</div>
                                    </div>
                                    </div>

                                    <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="fa fa-angle-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="fa fa-angle-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Carousel;