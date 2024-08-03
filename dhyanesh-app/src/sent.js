import React, { useState } from 'react';
import './sent.css';
import inboxicon from './inbox icon.png';
import drafticon from './drafts icon.png';
import senticon from  './sent icon.png';
import starredicon from './starred icon.png';
import archieveicon from './archieve icon.png'
import trashicon from './trash icon.png';
import spamicon from './spam icon.png';
import allmailicon from './all mail icon.png';
import settings from './settings-icon.png';
import contact from './contact.png';
import d from './d.png';
import sent2 from './sent2.png';
function Sent() {
    const [folderListVisible, setFolderListVisible] = useState(false);
    const [requestListVisible, setRequestListVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [folderList, setFolderList] = useState([]);
    const [requestList, setRequestList] = useState([])

    function toggleFolders() {
        console.log("Toggling folder list visibility");
        setFolderListVisible(!folderListVisible);
    }
    
    function toggleRequests() {
        console.log("Toggling request list visibility");
        setRequestListVisible(!requestListVisible);
    }
    
    console.log("folderListVisible:", folderListVisible);
    console.log("requestListVisible:", requestListVisible);

    function clearSearchInput() {
        setSearchInput('');
    }

    function handleSearchKeyPress(event) {
        if (event.key === 'Enter') {
            alert('Search for: ' + searchInput);
        }
    }

    // Function to redirect to a specific page
    function redirectToPage(page) {
        window.location.href = page;
    }

    // Function to redirect to the settings page
    function redirectToSettingsPage() {
        const settingsPageUrl = '/settings'; // Define the URL for the settings page
        window.location.href = settingsPageUrl;
    }
    
    // Function to redirect to the contact page
    function redirectToContactPage() {
        const contactPageUrl = '/contact'; // Define the URL for the contact page
        window.location.href = contactPageUrl;
    }
    return (
        <>
            <div className="one">
                <div className="two">
                    <img src={require('./images.png')} alt="DeVirTy" />
                    <h1>DeVirTy</h1>
                </div>
                <div className="three">
                    <button type="Button">
                        <div className="ab">New</div>
                        <div className="bc">message</div>
                    </button>
                </div>
                <div className="four">
                <button type="Button" onClick={() => redirectToPage('/inbox')}>
                    <img src={inboxicon} alt="Inbox" />
                    <div className="five">Inbox</div><span></span>
                </button>
            </div>
            <div className="six">
                <button type="Button" onClick={() => redirectToPage('/drafts')}>
                    <img src={drafticon} alt="Drafts" />
                    <div className="seven">Drafts</div><span></span>
                </button>
            </div>
            <div className="eight">
                <button type="Button" onClick={() => redirectToPage('/sent')}>
                    <img src={senticon} alt="Sent" />
                    <div className="nine">Sent</div><span></span>
                </button>
            </div>
            <div className="ten">
                <button type="Button" onClick={() => redirectToPage('/starred')}>
                    <img src={starredicon} alt="Starred" />
                    <div className="eleven">Starred</div><span></span>
                </button>
            </div>
            <div className="twelve">
                <button type="Button" onClick={() => redirectToPage('/archive')}>
                    <img src={archieveicon} alt="Archive" />
                    <div className="thirteen">Archive</div><span></span>
                </button>
            </div>
            <div className="fourteen">
                <button type="Button" onClick={() => redirectToPage('/spam')}>
                    <img src={spamicon} alt="Spam" />
                    <div className="fifteen">Spam</div><span></span>
                </button>
            </div>
            <div className="sixteen">
                <button type="Button" onClick={() => redirectToPage('/trash')}>
                    <img src={trashicon} alt="Trash" />
                    <div className="seventeen">Trash</div><span></span>
                </button>
            </div>
            <div className="eighteen">
                <button type="Button" onClick={() => redirectToPage('/allmail')}>
                    <img src={allmailicon} alt="All Mail" />
                    <div className="nineteen">All</div>
                    <div className="twenty">mail</div><span></span>
                </button>
            </div>
            <div className="folder-button" id="folderButton">
            <button className="folder-button-toggle" id="folderButtonToggle" aria-expanded={folderListVisible} onClick={toggleFolders}>
                <span className="triangle" id="folderTriangleIcon">{folderListVisible ? '▼' : '►'}</span>
                <div className="twentyone">Folders</div>    
            </button>
            <a href="" className="add-folder-link" id="addFolderLink" target="_blank">
                <div className="twentytwo">+</div>
            </a>
            </div>
            <div className={folderListVisible ? "folderList" : "folder-list hidden"} id="folderList">
    {folderListVisible && (
        <>
        </>
    )}
    {folderListVisible && !folderList.length && <div className="no-folders">No Folders found</div>}
</div>
                <div className="approval-button" id="approvalButton">
            <button className="approval-button-toggle" id="approvalButtonToggle" aria-expanded={requestListVisible} onClick={toggleRequests}>
                <span className="triangle" id="requestTriangleIcon">{requestListVisible ? '▼' : '►'}</span>
                <div className="twentyone">Approve/Deny</div>
            </button>
        </div>
        <div className={requestListVisible ? "requestList" : "request-list hidden"} id="requestList">
                {requestListVisible &&  (
                    <>
                    </>
                )}
                {requestListVisible && !requestList.length && <div className="no-requests">No requests yet</div>}
            </div>

            </div>
            <div className="onee">
            <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyPress={handleSearchKeyPress}
                    />
                    <span className="clear-button" onClick={clearSearchInput}>X</span>
                </div>
                <div className="twentythree">
                    <button type="button" onClick={redirectToSettingsPage}>
                    <img src={settings} alt="settings" width={25} height={25}/>
                        <div className="ef">SETTINGS</div>
                    </button>
                </div>
                <div className="twentyfour">
                    <button type="button" onClick={redirectToContactPage}>
                    <img src={contact} alt="contact" width={25} height={25}/>
                        <div className="ef">CONTACT</div>
                    </button>
                </div>
                <div className="twentyfive">Dhyaneswaran</div>
                <div className="twentysix">dhyaneswaran@proton.me</div>
                <div className="twentyseven"><img src={d} alt="D" width={45} height={45}/></div>
                <hr className="thin-line" />
                <div className="twentysevena"><img src={senticon} alt="sent" width={25} height={25}/></div>
                <div className="twentyeight">
                    <h3>Sent</h3>
                </div>
                <div className="twentynine">
                    <button type="button"><span>All</span></button>
                </div>
                <div className="thirty">
                    <button type="button"><span>Read</span></button>
                </div>
                <div className="thirtyone">
                    <button type="button"><span>Unread</span></button>
                </div>
                <hr className="thina-line" />
                <div className="thirtytwo">
                <img src={sent2} alt="nomessage" width={180} height={180}/></div>
                <div className="thirtythree">
                    <h2>No messages found</h2>
                </div>
                <div className="thirtyfour">
                    Seems like you are all caught up for now
                </div>
            </div>
        </>
    );
}

export default Sent;