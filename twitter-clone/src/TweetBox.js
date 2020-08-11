import React from 'react'
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw11DvIAosodi1Z7m0_D33yFrT9tMz2h2oGA&usqp=CAU" />
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input 
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
