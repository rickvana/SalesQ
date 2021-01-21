<template>
    <div>

        <h2>Hoeveel klanten</h2>
        <router-link to="/Hoeveel_omzet" tag="button">Tot 1000</router-link>
        <router-link to="/" tag="button">Meer dan 5000</router-link>
        <br>
        <br>

         <button @click="$router.go(-1)">Go Back</button>
    </div>
</template>