import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

var firebase = require("firebase/app");

require("firebase/auth");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDrxGPFkoAxsVywar2Xt4UIsf5dX0vIgto",
    authDomain: "crudfirebasevuejs.firebaseapp.com",
    databaseURL: "https://crudfirebasevuejs.firebaseio.com",
    projectId: "crudfirebasevuejs",
    storageBucket: "crudfirebasevuejs.appspot.com",
    messagingSenderId: "558578021476",
    appId: "1:558578021476:web:7789913ed8da33150e1b71",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
