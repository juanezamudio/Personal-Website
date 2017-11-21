import React, { Component } from 'react';
import './QuoteCard.scss';
import '../../Cards.scss';

class QuoteCard extends Component {

    render() {
        <div class="card-box col-md-4 col-sm-6">
            <div class="card card-with-border card-just-text" data-background="color" data-color="black" >
                <div class="content">
                    <h4 class="title">"In the end we only <b>regret</b> the chances we didn't take."</h4>
                    <p class="description">- Hipster Quote</p>
                </div>
            </div>
        </div>
    }
}

export default QuoteCard;