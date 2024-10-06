import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./champInfo.css";

const ChampInfo = () => {

  const { id } = useParams();
  const [champData, setChampData] = useState({});
  const [spells, setSpells] = useState(null);
  const [passive, setPassive] = useState(null);
  

  useEffect (() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion/${id}.json`
        );

        const data = await response.json();
        const champDetails = data.data;

        //roundabout way to get the spell data
        const getInfo = Object.values(champDetails);
        const spells = getInfo[0].spells;

        //getting the passive
        const passive = getInfo[0].passive;
        setPassive(passive);
        setChampData(champDetails);
        setSpells(spells);
        console.log("passive: ", passive)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  },[]);

  //I did this as a work around when I got stuck, then later learned the "proper" way. it was to late to go back lol
  const usableChampData = Object.values(champData);

  console.log("Champ data: ", usableChampData);
  console.log('spells: ', spells);
  return (
    <>
      {champData && (
        <div className="champInfoContainer">
          {usableChampData.map((champ) => (
              <div key={champ.id} className="champInfo" id={champ.name}>
                <div className="champImageSection">
                  <img className="champImage" src={'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champ.id + '_0.jpg'}/>
                </div>
                <div className="infoContainer">
                  <h2 className="champName">{champ.name}</h2>
                  <p className="champTitle">"{champ.title}"</p>
                  <h3>Lore:</h3>
                  <p className="champLore">{champ.lore}</p>
                </div>
                <div className="ablitiesTable">
                  <h3 className="ablitiesTitle">Abilities</h3>
                  <table className="abilities">
                    <thead>
                    <th>Key</th>
                    <th>icon</th>
                    <th>Ability Name</th>
                    <th>Description</th>
                    </thead>

                    <tr>
                    <td>"Passive"</td>
                    <td><img src={'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive/' + passive.image.full }/></td>
                    <td>{passive.name}</td>
                    <td >{passive.description}</td>
                    </tr>

                    <tr>
                    <td>"Q"</td>
                    <td><img src={'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/' + spells[0].image.full }/></td>
                    <td>{spells[0].name}</td>
                    <td >{spells[0].description}</td>
                    </tr>

                    <tr>
                    <td>"W"</td>
                    <td><img src={'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/' + spells[1].image.full }/></td>
                    <td>{spells[1].name}</td>
                    <td>{spells[1].description}</td>
                    </tr>

                    <tr>
                    <td>"E"</td>
                    <td><img src={'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/' + spells[2].image.full }/></td>
                    <td>{spells[2].name}</td>
                    <td>{spells[2].description}</td>
                    </tr>

                    <tr>
                    <td>"R"</td>
                    <td><img src={'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/' + spells[3].image.full }/></td>
                    <td>{spells[3].name}</td>
                    <td>{spells[3].description}</td>
                    </tr>
                    
                  </table>
                </div>
              </div>
          ))}
        </div>)}

    </>
  )
};

export default ChampInfo;