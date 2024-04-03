<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            movies: [],
        }
    },
    mounted() {
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=47b34ae23c4e60d6afdad289e2835a01&query=ritorno%20al%20futuro&include_adult=false&language=en-US&page=1')
            .then(resp => {
                console.log(resp.data.results);
                this.movies = resp.data.results;
            })
    },
}

</script>

<template>
    <div v-for="movie in movies" class="app-main">
        <div>{{ movie.title }}</div>
    </div>
    <!-- /.app-main -->
</template>

<style></style>