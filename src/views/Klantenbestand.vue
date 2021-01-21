<template>
    <div>
        <h2>Heeft u al een bestaand klantenbestand</h2>
        <router-link to="/Klantenbestand_ja" tag="button">Ja</router-link>
        <router-link to="/Klantenbestand_nee" tag="button">Nee</router-link>
        <br>
        <br>

         <button @click="$router.go(-1)">Go Back</button>
    </div>
</template>