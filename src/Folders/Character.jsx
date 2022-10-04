import { arrayOfTweets } from "./ArrayOfTweets.jsx";
import { useLocation } from "react-router-dom";
import Tweet from "./Tweet";
import CharacterProfile from "./CharacterProfile.jsx";
import "./Home.css";
import "./Character.css"

function Character() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="Home">
      <CharacterProfile character_link={location.pathname.slice(1)} />
      <div className="Tweets_1word_container">
      <p className="Tweets_1word">التغريدات</p>
      </div>
      {arrayOfTweets
        .filter((ele) => ele.character_link === location.pathname.slice(1))
        .map((ele) => {
          return (
            <Tweet
              character_pic={ele.character_pic}
              character={ele.character}
              tweet={ele.tweet}
              time={ele.time}
              hashtag={ele.hashtag}
              hashtag_link={ele.hashtag_link}
              character_link={ele.character_link}
            />
          );
        })}
    </div>
  );
}

export default Character;
