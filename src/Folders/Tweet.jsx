import {Link} from "react-router-dom"
import "./Tweet.css"

function Tweet({character_pic, character, time, tweet, hashtag_link, character_link, hashtag}) {
    return (
        <div className="tweet_container">
        <Link to={"/" + character_link} >
          <img className="tweet_image" src={character_pic} />
        </Link>
        <div>
          <div>
            <Link to={"/" + character_link} className="tweet_character">{character}</Link>
            <div className="tweet_time">{time}</div>
          </div>
          <div className="tweet">{tweet}</div>
          <Link to={"/" + hashtag_link} className="tweet_hashtag">
            {hashtag}#
          </Link>
        </div>
      </div>
    )
}

export default Tweet