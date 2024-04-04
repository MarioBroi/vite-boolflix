<script>
import { state } from '../state.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            state,
        }
    },
}
</script>

<template>

    <header>
        
        <div class="app-header">

            <h1 class="logo">BOOLFLIX</h1>
            <!-- /.logo -->

            <nav class="navbar">
                <input type="text" placeholder="Titoli, persone, generi" v-model="state.search" class="search-text">
                <button @click="state.searchResult" class="btn-search">Search</button>
            </nav>
            <!-- /.navbar -->

        </div>
        <!-- /.app-header -->

    </header>

</template>

<style></style>