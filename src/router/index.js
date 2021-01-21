import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/start",
      component: () => import("../views/Start")
    },
    {
      path: "/midden",
      component: () => import("../views/Midden"),
    },
    {
      path: "/Hoeveel_klanten",
      component: () => import("../views/Hoeveel_klanten")
    },
    {
      path: "/Hoeveel_omzet",
      component: () => import("../views/Hoeveel_omzet")
    },
    {
      path: "/Hoeveel_budget",
      component: () => import("../views/Hoeveel_budget")
    },
    {
      path: "/Klantenbestand",
      component: () => import("../views/Klantenbestand")
    },
    {
      path: "/Klantenbestand_ja",
      component: () => import("../views/Klantenbestand_ja")
    },
    {
      path: "/Klantenbestand_nee",
      component: () => import("../views/Klantenbestand_nee")
    },
    {
      path: "/einde",
      component: () => import("../views/Einde")
    }
  ]
});

/*

mode: "history" zorgt ervoor dat er geen # in je url komt te staan

path verwijst naar de vue waar je heen wilt
met component: () => import importeer je de vue in het pad. zodat die geladen word
*/