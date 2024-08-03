import React from 'react';
import './about.css';

class AboutPage extends React.Component {
    showInfo = (index) => {
        const infoElement = document.querySelectorAll(".member .info")[index - 1];
        infoElement.style.display = "block";
    }

    hideInfo = (index) => {
        const infoElement = document.querySelectorAll(".member .info")[index - 1];
        infoElement.style.display = "none";
    }

    redirectToJoinUsPage = () => {
        window.location.href = "file:///C:/Users/dhyan/Downloads/mail/joinus.html";
    }

    render() {
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
                    <h1>The Work (r)Evolution</h1>
                </div>
                <div className="four">
                    <p>Work has indeed undergone significant transformations, yet our tools have remained stagnant, failing to keep pace with the evolving demands. In our quest to enhance productivity, we often resort to incorporating more tools and channels, inadvertently leading to a proliferation of systems that consume valuable time just to manage them. The irony lies in the fact that despite our reliance on numerous productivity apps, they often result in decreased efficiency rather than the intended improvement. Amidst this chaos, email has remained a constant, albeit somewhat archaic, necessity. However, recognizing the shortcomings of traditional email systems, we've embarked on a groundbreaking journey to reinvent it. Our aim is to cater to individuals who prioritize speed, efficiency, and seamless organization in their workflow. By streamlining the email experience and integrating innovative features, we strive to empower users to reclaim their time and enjoy a more fulfilling work-life balance. It's high time we reconsider how technology aligns with our communication needs and aspirations for a more harmonious existence.</p>
                    <p>With great email comes great responsibility. And we take that responsibility very seriously. We feel it is our duty to lead the era of modern communication With a commitment to revolutionizing communication, we are dedicated to pioneering the era of modern productivity and connectivity.</p>    
                </div> 
                <div className="ten">
                    <h1>Meet our team</h1> 
                </div>
                <div className="team">
                    <div className="member" onMouseOver={() => this.showInfo(1)} onMouseOut={() => this.hideInfo(1)}>
                    <img src={require('./person1.jpg')} alt="Dhyaneswaran"/>
                        <p className="role">Co Founder</p>
                        <p className="name">Dhyaneswaran</p>
                        <p className="info">Dhyaneswaran is an ambitious student and talented software engineer, currently pursuing his Bachelor's degree in Computer Science at Shiv Nadar University. Despite being in the midst of his studies, he actively contributes as a full stack developer and co-founder of DeVirTy, where he applies his burgeoning expertise in software engineering to drive innovative projects.</p>
                    </div>
                    <div className="member" onMouseOver={() => this.showInfo(2)} onMouseOut={() => this.hideInfo(2)}>
                    <img src={require('./person4.jpg')} alt="Theajushwini"/>
                        <p className="role">Co Founder</p>
                        <p className="name">Theajushwini</p>
                        <p className="info">Theajushwini is a dedicated learner and proficient software engineer, presently enrolled in the Computer Science Bachelor's program at Shiv Nadar University. Amidst her academic pursuits, she actively participates as a full stack developer and co-founder of DeVirTy, utilizing her expertise in software engineering to lead innovative ventures.</p>
                    </div>
                    <div className="member" onMouseOver={() => this.showInfo(3)} onMouseOut={() => this.hideInfo(3)}>
                    <img src={require('./person2.jpg')} alt="Deepthi"/>
                        <p className="name">Deepthi</p>
                        <p className="role">Co Founder</p>
                        <p className="info">Deepthi is a passionate student and skilled software engineer, currently pursuing her Bachelor's degree in Computer Science at Shiv Nadar University. Engaged in her academic journey, she actively contributes as a full stack developer and co-founder of DeVirTy, harnessing her expertise in software engineering to drive innovative projects.</p> 
                    </div>
                    <div className="member" onMouseOver={() => this.showInfo(4)} onMouseOut={() => this.hideInfo(4)}>
                    <img src={require('./person3a.jpg')} alt="Virgina Benadi"/>
                        <p className="role">Co Founder</p>
                        <p className="name">Virgina Benadi</p>
                        <p className="info">Virgina Benadi is an eager student and adept software engineer, currently studying Computer Science at Shiv Nadar University. While focusing on her studies, she also contributes as a full stack developer and co-founder of DeVirTy, applying her software engineering skills to drive forward-thinking projects.</p>
                    </div>
                </div>
                <div className="six">
                    <h1>Help build the future you want to live</h1> 
                    <h2>in</h2>
                </div>
                <div className="seven">
                    <p>Our team combines deep mathematical and technical knowledge from the world’s top research institutions with expertise in building remarkable and easy-to-use services. By joining our team,</p>
                </div>
                <div className="eight">
                    <p>You can help build a different and better internet for now and for the future.</p>
                </div> 
                <div className="nine">
                    <button type="button" onClick={this.redirectToJoinUsPage}>JOIN US<span></span></button>
                </div>
            </div>
        );
    }
}

export default AboutPage;
