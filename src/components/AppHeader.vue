<script>
import { state } from '../state.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            state,
        }
    },
    method: {
        search() {
            state.searchMovie();
        }
    }
}
</script>

<template>

    <header class="app-header">

        <h1>BOOLFLIX</h1>

        <input type="text" placeholder="Titoli, persone, generi" v-model="state.search">
        <button @click="state.searchMovie">Search</button>

    </header>
    <!-- /.app-header -->

</template>

<style></style>