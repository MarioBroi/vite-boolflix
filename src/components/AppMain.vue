<script>
import { state } from '../state.js';

export default {
    name: 'AppMain',
    data() {
        return {
            state,
        }
    },
}

</script>

<template>

    <main class="app-main">

        <!-- <div>Test main</div> -->

        <div v-if="state.moviesResult.length > 0">
            <ul v-for="movie in state.moviesResult" :key="movie.id">
                <li>Titolo: {{ movie.title }}</li>
                <li>Titolo originale: {{ movie.original_title }}</li>
                <li>Lingua: {{ movie.original_language }}</li>
                <li>Voto: {{ movie.vote_average }}</li>
            </ul>

        </div>

    </main>
    <!-- /.app-main -->

</template>

<style></style>