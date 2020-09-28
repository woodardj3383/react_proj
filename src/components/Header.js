import React, { Component } from 'react'
// import { link } from 'react-router-dom';
import '../custom.css'


export default class Header extends Component {
    render() {
        // const guide = this.props.guide;
        return (
            <div>
                <header>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="authentication-container">
                                <a href="" class="float-right btn btn-secondary">Login</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div id="logo-container">
                                <img class="img-fluid" src="https://placehold.it/318x76&text=Logo Image" alt="Logo Image"/>
        </div>
                            </div>
                        </div>
                        <nav>
                            <ul id="navigation-list" class="list-unstyled">
                                {/* <li><Link to="./Frontpg.js">Who We Are</Link></li> */}
                                <span class="divider">|</span>
                                <li><a href="{{ url_for('whatwedo') }}">What We Do</a></li>
                                <span class="divider">|</span>
                                <li><a href="#">News &amp; Events</a></li>
                                <span class="divider">|</span>
                                <li><a href="{{ url_for('wherewework') }}">Where We Work</a></li>
                                <span class="divider">|</span>
                                <li><a href="{{ url_for('contact') }}">Contact Us</a></li>
                                <span class="divider">|</span>
                                <li><a href="{{ url_for('auth.login') }}">Login</a></li>
                                <span class="divider">|</span>
                                <li><a href="{{ url_for('auth.register') }}">Register</a></li>
                            </ul>
                        </nav>
                </header>
            </div>
        )
    }
}
