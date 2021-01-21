<template>
    <div>
        <h2>Midden</h2>

        <h2>B2B of B2C?</h2>
        <router-link to="/Hoeveel_klanten" tag="button">B2B</router-link>
        <router-link to="/" tag="button">B2C</router-link>
        <br>
        <br>

        <button @click="$router.go(-1)">Go Back</button>
        
    </div>
</template>
