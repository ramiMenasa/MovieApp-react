import {  axiosBaseUrl } from "../Network/axiosInstance"

export const Add_Favorite = (payload)=>{

    return {
    type:"ADD_FAVORITE",
    payload
}
}

export const Remove_Favorite = (payload)=>{

    return {
    type:"Remove_FAVORITE",
    payload
}
}

export const CounterFav = (payload)=>{

    return {
    type:"CHANGE_COUNT",
    payload
}}

export const getMoviesSearch = (e) => (dispatch) =>{
    return axiosBaseUrl.get(`search/movie?api_key=9b743af1d4fde1d65af33c40dcccce87&query=${e}`)
    .then((res)=> {
        dispatch(
            {
                type:"MOVIELISTSEARCH",
                payload :res.data.results
            }
        );
    })
    .catch((err)=>console.log(err));
}

export const getMoviesPage = (e) => (dispatch) =>{
    // debugger;
    console.log(e)
    return axiosBaseUrl.get(`movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=${e}`)

    .then((res)=> {
        dispatch(
            {
                type:"MOVIELISTPAGE",
                payload :res.data.results
            }
        );
    })
    .catch((err)=>console.log(err));
}

export const getMovies = () => (dispatch) =>{
    return axiosBaseUrl.get(`movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87`)

    .then((res)=> {
        dispatch(
            {
                type:"MOVIELIST",
                payload :res.data.results
            }
        );
    })
    .catch((err)=>console.log(err));
}