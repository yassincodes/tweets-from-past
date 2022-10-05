import { arrayOfTweets } from "./ArrayOfTweets.jsx";
import Tweet from "./Tweet"
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      {arrayOfTweets.map((ele) => {
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
        )
      })}
      <div style={{visibility: "hidden", height: "10vh"}}>empty</div>
    </div>
  );
}

export default Home;
