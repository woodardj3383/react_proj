import React, { Component } from 'react'
import '../custom.css'
import Logo from "../images/nza_slideshow.jpg"

export default class Frontpg extends Component {
    render() {
        return (
            <div>
                <main >
                    <div class="row">
                        <div class="col-md-9">
                            <img src={Logo} alt="slideshow" id="img" width="100%"/>
                            {/* <img class="slideshow" width="100%" src="../images/nza_slideshow.jpg" alt=""/> */}
                            </div>
                            <div class="col-md-3" >
                                <div id="sidebar">
                                    <div id="sidebar-content">
                                        <h5 class="sidebar-title">News Feed</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non delectus minima consectetur nemo
                                        provident molestias repudiandae perferendis nobis, autem consequatur earum corporis, dolor officiis
                                            debitis ut nisi voluptatem placeat.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non delectus minima consectetur nemo
                                        provident molestias repudiandae perferendis nobis, autem consequatur earum corporis, dolor officiis
                                            debitis ut nisi voluptatem placeat.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non delectus minima consectetur nemo
                                        provident molestias repudiandae perferendis nobis, autem consequatur earum corporis, dolor officiis
                                            debitis ut nisi voluptatem placeat.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non delectus minima consectetur nemo
                                        provident molestias repudiandae perferendis nobis, autem consequatur earum corporis, dolor officiis
                                            debitis ut nisi voluptatem placeat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row extra-content">
                            <div class="col-md-9">
                                <div class="small-title">
                                    <strong>Welcome to our website!</strong>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nam dolor consequatur qui assumenda
                                reprehenderit odio possimus delectus perspiciatis, sit fuga. Itaque quia distinctio eum quod nulla voluptatum
                                    voluptatem repellat!</p>
                            </div>
                            <div class="col-md-3" >
                                <div class="small-title">
                                    <strong>Bigshot, Zoo, & Adds, P.C.</strong>
                                </div>
                                <div>419 West South Street, Suite 4200</div>
                                <div>Houston, Texas 35983</div>
                                <div>555-555-5555 (Phone)</div>
                                <div>555-555-5555 (Fax)</div>
                                <div></div>
                            </div>
                        </div>
                    </main>
                    
                
            </div>
        )
    }
}
