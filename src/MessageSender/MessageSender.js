import React, { useState } from 'react'
import './messageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../$Data/stateProvider';

import db from '../firebaseConfig';
import firebase from 'firebase';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [{user}] = useStateValue();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts')
        .add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imgUrl
            })
        // reset 
        setImgUrl('');
        setInput('');
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    type="text"
                    className="messageSender__input"
                    value={input}
                    onChange={e=> setInput(e.target.value)}
                     placeholder={`Whats on your mind, ${user.displayName}?`} />
                    <input 
                     value={imgUrl}
                     onChange={e=> setImgUrl(e.target.value)}
                    type="text" placeholder="image url (optional)" />
                    <button type="submit" onClick={handleSubmit}>hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}  />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}}  />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
