import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { CounterFav, Remove_Favorite } from "../Store/Action";
import { useEffect } from "react";


function FavoriteMovie() {

    const fav = useSelector((state) => state.favorits)
    const dispatchFav = useDispatch()

    const dispatchCount = useDispatch()
    const count = useSelector((state)=> state.counter)




    function removeFavorite(movie) {
        

        const movieIndex = fav.findIndex(myfav =>myfav.id===movie.id)
        if (movieIndex > -1) {
        dispatchFav(Remove_Favorite(fav.splice(movieIndex,1)))
        dispatchCount(CounterFav(fav.length))        
        }
    }





    return (
        <>
            {count==0? <div className="container d-flex flex-column  align-item-center justify-content-center mt-5 w-50">
                <h3 className="text-light">Favorite is empty </h3>
            <img src={require('./image_processing20210905-11050-1tw1y3b.gif')}/>
        </div>:
        <div className='row col-12 d-flex mb-3 justify-content-evenly' >

{
        
        fav.map((movie) => {
            return (

                <div className=' col-lg-2 col-md-4 col-sm-6  p-0  cardImg' key={movie.id} >


                <Link to={ `/movieDetails/${movie.id}`} ><img className='card-img-top p-3' variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`} />   
                 </Link>    
                <div className='bg-body-tertiary textOnImg text-light p-3' ><b> <h4> {movie.title} </h4></b> </div>
                <button  className='btn btn-body-tertiary border-0 heartOnImg text-danger fs-4 p-2 ' onClick={() => {removeFavorite(movie)}} >
                   <i className="fa-solid fa-trash"></i> </button>
            </div>

             )
        }
          )} 



</div>}
            
        </>
    )
}

export default FavoriteMovie 