import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <ul class="footer-ul list-unstyled">
                    <li>
                        <a href="{{ url_for('index') }}">Who We Are</a>
                    </li>
                    <span class="divider">&mdash;</span>
                    <li>
                        <a href="{{ url_for('whatwedo') }}">What We Do</a>
                    </li>
                    <span class="divider">&mdash;</span>
                    <li>
                        <a href="#">News &amp; Events</a>
                    </li>
                    <span class="divider">&mdash;</span>
                    <li>
                        <a href="{{ url_for('wherewework') }}">Where We Work</a>
                    </li>
                    <span class="divider">&mdash;</span>
                    <li>
                        <a href="{{ url_for('contact') }}">Contact Us</a>
                    </li>
                    <span class="divider">&mdash;</span>
                    <li>
                        <a href="{{ url_for('login') }}"> Login</a>
                    </li>
                    <span class="divider">&mdash;</span>
                    <li>
                        <a href="{{ url_for('register') }}">Register</a>
                    </li>
                </ul>
            </div>
        )
    }
}
