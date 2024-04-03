import { reactive } from "vue";
import axios from "axios";
const myApiKey = '47b34ae23c4e60d6afdad289e2835a01';

export const state = reactive({
    message: 'Test state import',
    moviesResult: [],
    search: '',
    searchMovie() {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${this.search}`)
            .then(resp => {
                console.log(resp.data.results);
                this.moviesResult = resp.data.results;
                console.log(this.moviesResult);
            })
            .catch(error => console.error(error.message))
    }
})