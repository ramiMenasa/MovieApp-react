import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  axiosBaseUrl } from '../Network/axiosInstance'
import { getMovies, getMoviesPage, getMoviesSearch } from '../Store/Action'
import CardMovie from './CardMovie'

function MoviesList() {
    const [moviesData, setMoviesData] = useState([])
    const [numberOfPage, setNumberOfPage] = useState(1)
    const fav = useSelector((state) => state.favorits)
    const listSearch = useSelector((state)=> state.list)
    // const listPage = useSelector((state)=> state.list)
    let clickedMovies = [];
    const dispatch = useDispatch()

    // useEffect(() => {
//         dispatch(getMovies())
//               clickedMovies = listSearch;
//             //   console.log(listPage);
//               clickedMovies.map(element => {
//                   {
//                       element.isClicked=false;
                      
//                       fav.forEach(fav => {
//                           if (fav.id==element.id) {
//                               element.isClicked=true
//                           }
                          
//                       });

//                   }

//               })
//               setMoviesData(clickedMovies)
//   }, [])


    useEffect(() => {
          dispatch(getMoviesPage(numberOfPage))
                clickedMovies = listSearch;
                console.log(numberOfPage);
                console.log(listSearch);
                clickedMovies.map(element => {
                    {
                        element.isClicked=false;
                        
                        fav.forEach(fav => {
                            if (fav.id==element.id) {
                                element.isClicked=true
                            }
                            
                        });

                    }

                })
                setMoviesData(listSearch)
    }, [numberOfPage])

    function searchMovie(e) {
          dispatch(getMoviesSearch(e.target.value))       
                clickedMovies = listSearch;
                clickedMovies.map(element => {
                    {
                        element.isClicked=false;
                        
                        fav.forEach(fav => {
                            if (fav.id==element.id) {
                                element.isClicked=true
                            }
                            
                        });

                    }

                })
                setMoviesData(clickedMovies)

            }
    

    function handleNextButton() {
        
        setNumberOfPage(numberOfPage + 1)
    }
    function handlePerviousButton() {
        if (numberOfPage !== 1)
            setNumberOfPage(numberOfPage - 1)
    }

    return (
        <>
            <div className=''>
                <h1 className='p-2 text-light'> Popular Movies  </h1>
                <form className='d-flex' role="search">
                    <input className="form-control w-25 me-2" onChange={(e) => searchMovie(e)} type="search" placeholder="Search" />
                    <button className="btn btn-outline-warning" type="button">Search</button>
                </form>

                <div className='row col-12 d-flex mb-3 justify-content-evenly' >
                    {
                        moviesData.map((movie) => {


                            return (

                                <CardMovie movie={movie} key={movie.id}
                                ></CardMovie>

                            )

                        })}
                </div>
                <div className='p-5 d-flex justify-content-center'>
                    <button className='btn btn-outline-light me-5' onClick={() => handlePerviousButton()}> Pervious </button>

                    <button className='btn btn-outline-light' onClick={() => handleNextButton()}> Next </button>
                </div>
            </div>
        </>
    )
}

export default MoviesList