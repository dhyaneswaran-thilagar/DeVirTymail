import React from 'react';
import './joinus.css';
function JoinUs() {
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
                    <input type="text" placeholder="Type to Search" /><button type="Button">Search<span></span></button>
                </ul>
            </div>
            <div className="three">
                <h2>Ready to Thrive?</h2>
            </div>
            <div className="four">
                <h1>Join Our Dynamic</h1>
            </div>
            <div className="five">
                <h2>Team Now!</h2>
            </div>
            <div className="six">
                <p>Join our vibrant team and thrive in an environment of innovation and collaboration. Your next career move starts here. Apply now and be part of something extraordinary.</p>
            </div>
            <div className="eight">
                <div className="nine">
                    <h2>Join Us</h2>
                </div>
                <div className="ten">
                    <input type="text" placeholder="Enter Your First Name" />
                </div>
                <div className="eleven">
                    <input type="text" placeholder="Enter Your Last Name" />
                </div>
                <div className="twelve">
                    <input type="text" placeholder="Enter Your University Name" />
                </div>
                <div className="thirteen">
                    <input type="text" placeholder="Enter your Major Field" />
                </div>
                <div className="fourteen">
                    <input type="text" placeholder="Enter your mail id" />
                </div>
                <div className="fifteen">
                    <h2>Attach your resume:</h2>
                    <label htmlFor="resume-upload" className="custom-file-input">Choose File</label>
                    <input id="resume-upload" type="file" className="hidden-input" />
                </div>
                <div className="sixteen">
                    <h2>Attach your CV:</h2>
                    <label htmlFor="cv-upload" className="customa-file-input">Choose File</label>
                    <input id="cv-upload" type="file" className="hidden-input" />
                </div>
                <div className="seventeen">
                    <button type="button" onClick={redirectToFirstPage}>Submit<span></span></button>
                </div>
            </div>
        </div>
    );
}

function redirectToFirstPage() {
    window.location.href = "";
}

export default JoinUs;
