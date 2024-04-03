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
    methods: {
        starCalculator(vote) {
            return Math.ceil(vote / 2);
        }
    },
}

</script>

<template>

    <main class="app-main">

        <!-- <div>Test main</div> -->

        <div v-if="state.results.length > 0">
            <div v-for="result in state.results" :key="result.id">

                <ul>

                    <li>Titolo: {{ result.title }}</li>
                    <li>Titolo originale: {{ result.originaTitle }}</li>
                    <li>Lingua:
                        <span
                            v-if="result.lenguage != `en` && result.lenguage != `zh` && result.lenguage != `ja` && result.lenguage != `kk` && result.lenguage != `da` && result.lenguage != `ko`"
                            :class="`fi fi-${result.lenguage}`"></span>
                        <span v-else-if="result.lenguage == `en`" class="fi fi-gb"></span>
                        <span v-else-if="result.lenguage == `zh`" class="fi fi-cn"></span>
                        <span v-else-if="result.lenguage == `ja`" class="fi fi-jp"></span>
                        <span v-else-if="result.lenguage == `kk`" class="fi fi-kz"></span>
                        <span v-else-if="result.lenguage == `da`" class="fi fi-dk"></span>
                        <span v-else-if="result.lenguage == `ko`" class="fi fi-kp"></span>
                        <span v-else-if="result.lenguage == null">{{ result.lenguage }}</span>
                        <img v-if="result.image" :src="'https://image.tmdb.org/t/p/w342/' + result.image"
                            alt="movie poster">

                    </li>
                    <li>Categoria: {{ result.category }}</li>
                    <li>
                        Voto: {{ result.vote }}
                        <i v-for="star in starCalculator(result.vote)" :key="star" class="fa-solid fa-star"></i>
                        <i v-for="emptyStar in 5 - starCalculator(result.vote)" :key="emptyStar"
                            class="fa-regular fa-star"></i>
                    </li>
                </ul>
            </div>
        </div>

    </main>
    <!-- /.app-main -->

</template>

<style></style>