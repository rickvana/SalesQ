<template>
    <div>
        <h2>Midden</h2>

        <h2>B2B of B2C?</h2>
        <router-link to="/Hoeveel_klanten" tag="button"  v-on:click="B2B" id="B2B">B2B</router-link>
        <router-link to="/Einde" tag="button">B2C</router-link>
        <br>
        <br>

        <button @click="$router.go(-1)">Go Back</button>
        
    </div>
</template>

<script>
export default {
  methods: {
    B2B: function(B2B){
      if(B2B == true){
        this.$session.set("pathvalue_B2B", "pathnaam");
        console.log(this.$session.get("pathvalue_B2B"));
      }
      else{
        this.$session.set("pathvalue_B2C", "pathnaam");
        console.log(this.$session.get("pathvalue_B2C"));
      }
    }
  }
  // name: "App",
  // mounted() {
  //     created();{
  //       this.$session.set("pathvalue_B2B", "pathnaam")
  //       console.log(this.$session.get("pathvalue_B2B"))
  //   }
  //   this.$session.set("pathvalue_B2C", "pathnaam");
  //   console.log(this.$session.get("pathvalue_B2C"));

  //   }
}
</script>