import React from 'react';
import './firstpages.css';
import moy from './moy.png';

function FirstPage() {
    function redirectToJoinUsPage() {
        window.location.href = "/joinus";
    }

    function redirectToLoginPage() {
        window.location.href = "/inbox";
    }

    return (
        <div className="one">
            <div className="two">
                <h1>DeVirTy</h1>
                <ul>
                    <li><a href="/home"><h4>HOME</h4></a></li>
                    <li><a href="/about"><h4>ABOUT</h4></a></li>
                    <li><a href="/policy"><h4>POLICY</h4></a></li>
                    <li><a href="/faqs"><h4>FAQ'S</h4></a></li>
                    <li><a href="/contact"><h4>CONTACT</h4></a></li>
                    <input type="text" placeholder="Type to Search" />
                    <button type="button">Search<span></span></button>
                </ul>
            </div>
            <div className="three">
                <h2>Shaping the Future &</h2>
            </div>
            <div className="four">
                <h1>Swift Advancements</h1>
            </div>
            <div className="five">
                <h2>Outperforming All</h2>
            </div>
            <div className="six">
                <p>Experience unprecedented speed and sophistication. Your emails, now faster, smarter, and sleeker. Elevate your communication game with our cutting-edge features. Welcome to the future of email</p>
            </div>
            <div className="seven">
                <button type="button" onClick={redirectToJoinUsPage}>JOIN US<span></span></button>
            </div>
            <div className="eight">
                <div className="nine">
                    <h2>Login Here</h2>
                </div>
                <div className="ten">
                    <input type="text" placeholder="Enter Email Here" />
                </div>
                <div className="eleven">
                    <input type="password" placeholder="Enter Password Here" />
                </div>
                <div className="thirteen">
                    <button type="button" onClick={redirectToLoginPage}>Login<span></span></button>
                </div>
                <div className="fourteen">
                    <h3>Don't Have an account?</h3>
                </div>
                <div className="fifteen">
                    <h3><a href="/signup">Sign up</a> here</h3> 
                </div>
                <div className="sixteen">
                    <h3>Log in with</h3>
                </div>
                <div className="seventeen">
    <img src={moy} alt="moy" />
</div>
            </div>
        </div>
    );
}

export default FirstPage;
