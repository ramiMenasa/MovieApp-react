import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import './movide.css' 


function MovieDetails() {
    const param = useParams();

    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=9b743af1d4fde1d65af33c40dcccce87`)
            .then((dta) => setMovie(dta.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
        <div className='details'></div>
        <div className="ho" style={{backgroundImage:`linear-gradient(0deg, #000000 0%, #000000f1 55%, #000000db 68%, #00000060 100%),
        url(https://image.tmdb.org/t/p/w500${movie.backdrop_path}?api_key=9b743af1d4fde1d65af33c40dcccce87)`}}>

            <div className='container '  >
                <div className=" mb-3" style={{}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`}
                            className="img-fluid rounded pe-3 " alt="..."/>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-end text-light">
                                <h1 className="">{movie.title}</h1>
                                <h4 className="">{movie.overview}</h4>
                                <h4 className=""><small className="text-muted">{movie.release_date}</small></h4>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default MovieDetails