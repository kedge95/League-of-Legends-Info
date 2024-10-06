import "./homepage.css"

const Homepage = () => {


  return (
    <div className="homepageContainer">
      <h1>LoL API Tool</h1>
      <div className="homepageChampSection">
        <div className="homepageInfo">
        <h2 className="infoTitle">What can we do?</h2>
        <p>Utilizing this easy to use service, you can get up to date League of Legends champion info, straight from the Riot official API. Be the first to know when a new champion officially drops!</p>
        </div>
        <img className="homepageImage" src="https://i.imgur.com/bXlfWrA.png" />
      </div>

      <p className="toBeContinued">More features to be added in future updates include summoner look up, mob info, detailed spell breakdown, and much more!</p>
    </div>
  )
};

export default Homepage;