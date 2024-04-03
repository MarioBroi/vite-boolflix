import { reactive } from "vue";
import axios from "axios";
const myApiKey = '47b34ae23c4e60d6afdad289e2835a01';

export const state = reactive({

    message: 'Test state import',
    search: '',
    results: [],

    searchResult() {
        this.searchMovie();
        this.searchTv();
    },
    searchMovie() {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${this.search}`)
            .then(resp => {
                console.log(resp.data.results);
                resp.data.results.forEach(movie => {
                    this.results.push({
                        id: movie.id,
                        title: movie.title,
                        originaTitle: movie.original_title,
                        lenguage: movie.original_language,
                        vote: movie.vote_average,
                        category: "Movie",
                        image: movie.poster_path,
                    })
                })
                console.log(this.results);
            })
            .catch(error => console.error(error.message))
    },
    searchTv() {
        axios
            .get(`https://api.themoviedb.org/3/search/tv?api_key=${myApiKey}&query=${this.search}`)
            .then(resp => {
                console.log(resp.data.results);
                resp.data.results.forEach(tv => {
                    this.results.push({
                        id: tv.id,
                        title: tv.name,
                        originaTitle: tv.original_name,
                        lenguage: tv.original_language,
                        vote: tv.vote_average,
                        category: "TvShow",
                        image: tv.poster_path,
                    })
                })
                console.log(this.results);
            })
            .catch(error => console.error(error.message))
    }
})