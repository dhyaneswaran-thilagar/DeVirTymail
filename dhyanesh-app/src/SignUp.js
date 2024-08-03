import React from 'react';
import './signup.css'; 
function SignUp() {
    return (
        <div className="one">
            <div className="two">
                <h1>DeVirTy</h1>
                <ul>
                    <li><a href=""><h4>HOME</h4></a></li>
                    <li><a href=""><h4>ABOUT</h4></a></li>
                    <li><a href=""><h4>POLICY</h4></a></li>
                    <li><a href=""><h4>FAQ'S</h4></a></li>
                    <li><a href=""><h4>CONTACT</h4></a></li>
                    <input type="text" placeholder="Type to Search"/><button type="Button">Search<span></span></button>
                </ul>
            </div>
            <div className="three">
                <h2>Join DeVirTy Mail for</h2>
            </div>
            <div className="four">
                <h1>Swift Advancements</h1>
            </div>
            <div className="five">
                <h2>in Communication</h2>
            </div>
            <div className="six">
                <p>Join DeVirTy Mail for seamless messaging, innovative features, and unparalleled reliability. Sign up now to stay ahead in the digital realm and shape tomorrow's communication.</p>
            </div>
        <div className="eight">
            <div className="nine">
                <h2>Sign Up</h2>
            </div>
            <div className="ten">
                <input type="text" placeholder="Enter First Name Here"/>
            </div>
            <div className="ten">
                <input type="text" placeholder="Enter Last Name Here"/>
            </div>
            <div className="ten">
                <input type="text" placeholder="Enter Contact Number"/>
            </div>
            <div className="ten">
                <input type="text" placeholder="Enter a unique Email Here"/>
            </div>
            <div className="ten">
                <input type="password" placeholder="Enter your Password Here"/>
            </div>
            <div className="thirteen">
                <button type="button" onClick={redirectToFirstPage}>Submit<span></span></button>
            </div>
            <div className="fourteen">
                <h3>if you Have an account?</h3>
            </div>
            <div className="fifteen">
                <h3><a href="/firstpage">Login</a> here</h3> 
            </div>
        </div>
    </div>
    );
}

export default SignUp;

function redirectToFirstPage() {
    window.location.href = "";
}
