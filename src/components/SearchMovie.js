import React,{useState,useEffect} from 'react'
import Api from '../api.json'
function SearchMovie() {
    const [typing,setTyping]=useState('')
    const [movieData,setMovieData]=useState([]);

    function typingStart(e){
        setTyping(e.target.value)
        }
    useEffect(() => {
            getMovies();
            console.log(movieData)
    }, [typing])
    
  async function getMovies(){
    const movieData=Api.filter(item=>item.title.toLocaleLowerCase().includes(typing.toLowerCase())).map(i=>{
        return{
            id:i.episode_id,
            title:i.title,
            img:i.img
        }
    })
    setMovieData(movieData)
  }

  return (
    <div>
<div className='searchBar'>
        <div className='mainSearchBar'>
            <h2>Search Movie</h2>
            <input onChange={typingStart} type="text" placeholder='Search Moives..' />  
            {movieData.length === 0 && <p>No Found Result!</p>}          
        </div>

    </div>
    <div className='mainMovie'>
        <div className='mainBoxs'>
        {
            movieData.map(item=>{
                return(
                    <div key={item.id} className='boxs'>
                    <img src={item.img} alt="" />
                    <div className='movieInfo'>{item.title}</div>
                  </div>
                )
            })
        }
        </div>

    </div>
    </div>
    
  )
}

export default SearchMovie