import { Link } from "react-router-dom";
import "./header.css"


const Header = () => {
  return (
    <>
      <div className="headerBanner">
        <div id="hiddenButton" className="routeButtons">Champions</div>
        <Link to="/">
          <img className="bannerImage" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipground.com%2Fimages%2Fclipart-league-of-legends-9.png&f=1&nofb=1&ipt=e4b245728d4c26f1eabb30bf97ec37687927edbecb52f1c4139cd6f0561880f5&ipo=images"/>
        </Link>
        <Link to="/Champions">
          <div className="routeButtons">Champions</div>
        </Link>
      </div>
    </>
  )
}

export default Header;