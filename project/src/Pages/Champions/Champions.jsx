import { useState, useEffect } from 'react';
import "./champions.css";
import { Link } from "react-router-dom";


const Champions = () => {
  const [champInfo, setChampInfo] = useState({});
  const [userSearch, setUserSearch] = useState("");


  useEffect(() => {
    const getChampions = async () => {
    try {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion.json"
      );

      const champData = await response.json();

      const champs = champData.data;

      setChampInfo(champs);
    } catch (error) {
        console.log("Error fetching champion data", error);
      }
    };
    getChampions();
    }, []);

    //convert Object full of objects..... into an array, as it should be.
    const usableInfo = Object.values(champInfo);

    

    const handleSearch = (event) => {
    setUserSearch(event.target.value);
  };

  let filteredChamps = usableInfo;
  if (userSearch) {
    filteredChamps = usableInfo.filter(
      (champs) =>
        champs.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        champs.name.toLowerCase().includes(userSearch.toLowerCase())
    );
  }

  return (
    <>
      <div className="searchContainer">
      <input 
        type="text"
        className="searchbar"
        placeholder="Search for a champion..."
        value={userSearch}
        onChange={handleSearch}
      />
      </div>
      {champInfo && (
        <div className="champCardContainer">
          {filteredChamps.map((champ) => (
            <Link key={champ.key} to={`/ChampInfo/${champ.id}`} className="champLink">
              <div className="champCard" id={champ.name}>
                <img className="champImage" src={'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champ.id + '_0.jpg'} alt='Champion Image'/>
                <h2 className="champName">{champ.name}</h2>
              </div>
            </Link>
          ))}
        </div>)}

        {!champInfo && (
          <p>Champion info not loading correctly...</p>
        )}

    </>
  )
};

export default Champions;