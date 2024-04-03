<script>
import { state } from '../state.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
                <li>Lingua: 
                    <span
                        v-if="movie.original_language != `en` && movie.original_language != `zh` && movie.original_language != `ja` && movie.original_language != `kk` && movie.original_language != `da` && movie.original_language != `ko`"
                        :class="`fi fi-${movie.original_language}`"></span>
                    <span v-else-if="movie.original_language == `en`" class="fi fi-gb"></span>
                    <span v-else-if="movie.original_language == `zh`" class="fi fi-cn"></span>
                    <span v-else-if="movie.original_language == `ja`" class="fi fi-jp"></span>
                    <span v-else-if="movie.original_language == `kk`" class="fi fi-kz"></span>
                    <span v-else-if="movie.original_language == `da`" class="fi fi-dk"></span>
                    <span v-else-if="movie.original_language == `ko`" class="fi fi-kp"></span>
                    <span v-else-if="movie.original_language == null">{{ movie.original_language }}</span>
                    
                </li>
                <li>Voto: {{ movie.vote_average }}</li>
            </ul>

        </div>

    </main>
    <!-- /.app-main -->

</template>

<style></style>