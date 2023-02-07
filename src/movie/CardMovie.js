import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Add_Favorite, CounterFav,Remove_Favorite } from '../Store/Action'
import { useState } from 'react';

function CardMovie(props) {

  const fav = useSelector((state) => state.favorits)
  const [isClicked,setIsClicked] = useState(props.movie.isClicked)

  const dispatch = useDispatch()


  const addFavorite = (movie) => {
    const mogod = fav.includes(movie)
    if (!mogod) {
      setIsClicked(true);
      dispatch(Add_Favorite(fav.push(movie)))
      dispatch(CounterFav(fav.length))

    }
  }
  const removeFavorite=(movie)=>{
      const movieIndex = fav.findIndex(myfav => myfav.id === movie.id)
      if (movieIndex > -1) {
        setIsClicked(false);
        dispatch(Remove_Favorite(fav.splice(movieIndex, 1)))
        dispatch(CounterFav(fav.length))
    }
  }
  return (
    <>
      <div className=' col-xl-2 col-md-4 col-sm-6  p-0  cardImg' >


        <Link to={`/movieDetails/${props.movie.id}`} ><img className='card-img-top p-3' variant="top"
          src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`} /></Link>
        <div className='bg-body-tertiary textOnImg text-light p-3' ><b> <h4> {props.movie.title} </h4></b> </div>
        <button className='btn btn-body-tertiary border-0 heartOnImg text-danger fs-2 p-2 '
           onClick={ isClicked == false ? ()=>{ addFavorite(props.movie)} :()=>{ removeFavorite(props.movie)} } >
          {isClicked == true ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"> </i>}</button>
      </div>
    </>
  );
}

export default CardMovie;