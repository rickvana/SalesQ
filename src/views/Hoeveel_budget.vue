<template>
    <div>
        <h2>Hoeveel budget wenst u te spenderen</h2>
        <router-link to="/Klantenbestand" tag="button">Tot 1000</router-link>
        <router-link to="/" tag="button">Tot 5000</router-link>
        <router-link to="/" tag="button">Meer dan 5000</router-link>
        <router-link to="/" tag="button">Eenmalig 2000</router-link>
        <router-link to="/" tag="button">Weet ik nog niet</router-link>
        <br>
        <br>

         <button @click="$router.go(-1)">Go Back</button>
    </div>
</template>