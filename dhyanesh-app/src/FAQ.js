import React, { useState } from 'react';
import './faq.css'; // Import CSS file

function FAQ() {
    const [answersVisible, setAnswersVisible] = useState({
        answer2: false,
        answer3: false,
        answer4: false,
        answer5: false,
        answer6: false
    });

    const toggleAnswer = (answer) => {
        setAnswersVisible({
            ...answersVisible,
            [answer]: !answersVisible[answer]
        });
    };

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
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <div className="question-box2" onClick={() => toggleAnswer('answer2')}>
                <div className="question2">What is DeVirTy?</div>
                <div className="plus2">{answersVisible.answer2 ? "-" : "+"}</div>
                <div className="answer2" style={{ display: answersVisible.answer2 ? "block" : "none" }}>
                    <p>DeVirTy is an end-to-end encrypted email service. DeVirTy makes sure no one can access your emails, not even DeVirTy, by using end-to-end encryption and zero-access encryption.</p>
                    <p>When you send an end-to-end encrypted email with DeVirTy, your message is encrypted on your device and can only be decrypted by your recipient with the corresponding encryption key. With DeVirTy, all the encryption and decryption happens in the background, meaning anyone can use encrypted email, regardless of technical ability.</p>
                </div>
            </div>
            <div className="question-box" onClick={() => toggleAnswer('answer3')}>
                <div className="question">How secure is DeVirTy?</div>
                <div className="plus">{answersVisible.answer3 ? "-" : "+"}</div>
                <div className="answer" style={{ display: answersVisible.answer3 ? "block" : "none" }}>
                    <p>The security of our users is one of our top priorities. Here's how we make DeVirTy secure:</p>
                    <ul>
                        <li>End-to-end encryption: Messages between DeVirTy users are transmitted and stored on our secure servers in an encrypted format. Because your data is encrypted at all steps, the risk of message interception is largely eliminated.</li>
                        <li>Zero access to your data: Only you have the key to decrypt your messages and files stored on our secure servers. Your data isn't accessible to anyone else — not even us. As we don't have the key to access your data, we can't hand it over to third parties.</li>
                        <li>Password-protected Emails: Messages between DeVirTy users are end-to-end encrypted automatically. But you can also send end-to-end encrypted messages to people on other email providers using Password-protected Emails or standard PGP encryption.</li>
                        <li>Open source: All our apps are open source and independently audited, so anyone can check our code.</li>
                        <li>Strong physical security: We've invested heavily in owning and controlling our own server hardware. Our data centers are located at highly secure sites that require biometric access.</li>
                    </ul>
                </div>
            </div>
            <div className="question-box3" onClick={() => toggleAnswer('answer4')}>
                <div className="question3">Is DeVirTy free?</div>
                <div className="plus3">{answersVisible.answer4 ? "-" : "+"}</div>
                <div className="answer3" style={{ display: answersVisible.answer4 ? "block" : "none" }}>
                    <p>DeVirTy will always offer a free encrypted email plan that provides secure email functionality with basic and advanced features, all included in our normal plans.</p>
                    <p>Our free email accounts offer the same level of encryption as any other account. By using DeVirTy, you're supporting our mission to build a better internet where privacy is the default, without the need for paid plans or additional costs.</p>
                </div>
            </div>
            <div className="question-box4" onClick={() => toggleAnswer('answer5')}>
                <div className="question4">How Can I Access My DeVirTy mail inbox?</div>
                <div className="plus4">{answersVisible.answer5 ? "-" : "+"}</div>
                <div className="answer4" style={{ display: answersVisible.answer5 ? "block" : "none" }}>
                    <p>DeVirTy will always offer a free encrypted email plan that provides secure email functionality with basic and advanced features, all included in our normal plans.</p>
                    <p>Our free email accounts offer the same level of encryption as any other account. By using DeVirTy, you're supporting our mission to build a better internet where privacy is the default, without the need for paid plans or additional costs.</p>
                </div>
            </div>
            <div className="question-box5" onClick={() => toggleAnswer('answer6')}>
                <div className="question5">What is encryption and what data is encrypted in DeVirTy?</div>
                <div className="plus5">{answersVisible.answer6 ? "-" : "+"}</div>
                <div className="answer5" style={{ display: answersVisible.answer6 ? "block" : "none" }}>
                    <p>Encryption is a process of converting messages or information in such a way that only authorized parties can read it. Using complex algorithms, a message is transformed into an illegible string of characters. The only way to transform the message into its original format is to use a unique encryption key.</p>
                    <p>When you send an email to other DeVirTy users or when you receive a message from another DeVirTy user, the message body and the attachments are fully and automatically encrypted at every step. This is called end-to-end encryption.</p>
                    <p>All the messages and attachments you receive in your DeVirTy mailbox are also stored with zero-access encryption, including messages from other email providers. Only you have the key to access your messages and files on our secure servers. That means your data isn't accessible to anyone else — not even us.</p>
                    <p>You can also send end-to-end encrypted messages to people on other email providers using Password-protected Emails. Otherwise, they will be protected with TLS encryption if the non-DeVirTy server supports it.</p>
                </div>
            </div>
            <div className="question-box6" onClick={() => toggleAnswer('answer7')}>
                <div className="question6">I am a DeVirTy user and my question wasn't listed. How can I contact DeVirTy Team?</div>
                <div className="plus6">{answersVisible.answer7 ? "-" : "+"}</div>
                <div className="answer6" style={{ display: answersVisible.answer7 ? "block" : "none" }}>
                    <p>If you have questions which is not listed, Refer to the <a href="">CONTACT</a></p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
