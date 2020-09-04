import React, { useState, useEffect } from 'react'
import './feed.css';
import StoryReel from '../StoryReel/StoryReels';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import  db  from '../firebaseConfig';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                { id: doc.id, data: doc.data() }
            )))
        })
    }, [])
    console.log(posts);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                />
            ))}
            
        </div>
    )
}

export default Feed
