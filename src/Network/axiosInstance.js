import axios from "axios";

// export const axiosPage = 
// axios.create({
//     baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page="
// });

export const axiosBaseUrl = 
axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

