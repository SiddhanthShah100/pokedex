// import React, { useEffect,useState } from 'react';
// import axios from 'axios';


// const Pokedex = () => { 
//     const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
//         console.log(response);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>Pokedex
//        {Array.isArray(data) && data.map((item) => (
//         <p key={item.id}>{item.name}</p>
//       ))}

//     </div>
//   )
// }
// export default Pokedex

// //https://pokeapi.co/api/v2/ability/







import React, { useState } from 'react';
import axios from 'axios';
import './Pokedex.css';
import camera from '../Images/camera.png';
import plus from '../Images/plus.svg';

const PokedexBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);



  const handleSearch = () => {
    // Perform search functionality here using the `searchTerm` state
    const searchValue=searchTerm.toLowerCase();
    console.log('Search term:', searchTerm);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
        console.log(response);
        // console.log(response.data.sprites.home.front_default)
        setData(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='bgImagePokedex'>
      <div className="pokedex-box">
        <img className='camera' src={camera} alt='{/}' />
        <div className="pokedex-box2">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Pokemon!!"
              value={searchTerm}
              onChange={handleChange} />
          </div>
          <div className='Imagebox' >
            <img className='pokemon-image' src={data.sprites?.other.dream_world.front_default} alt='/' />
          </div>
          <div style={{fontWeight: 'bold'}}>
            <div style={{fontWeight: 'bolder'}}>Name: {data.name}</div> 
            <div style={{textAlign: 'left' , marginLeft: '5px'}}>Type: {data.types ? data.types[0].type.name : ''}</div>
            <div className='row'>
              <div className='column'><div style={{textAlign: 'left' , marginLeft: '5px', width: '113px'}}>Speed: {data.stats ? data.stats[5].base_stat : ''}</div></div>
            <div className='column'><div style={{textAlign: 'left' , marginRight: '50px', width: '113px'}}>Weight: {data.weight}</div></div>
            </div>
            <div className='row'>
              <div className='column'><div style={{textAlign: 'left' , marginLeft: '5px', width: '113px'}}>Attack: {data.stats ? data.stats[1].base_stat : ''}</div></div>
            <div className='column'><div style={{textAlign: 'left' , marginRight: '50px', width: '113px'}}>Defence: {data.stats ? data.stats[2].base_stat : ''}</div></div>
            </div>
            <div style={{textAlign: 'left' , marginLeft: '5px', width: '113px'}}>hp: {data.stats ? data.stats[0].base_stat : ''}</div>
            
            
          </div>

        </div>
        <div className="pokedex-body">
        </div>
        <img className='plus' src={plus} alt='{/}' onClick={handleSearch} />
      </div>
    </div>
  );
};

export default PokedexBox;









