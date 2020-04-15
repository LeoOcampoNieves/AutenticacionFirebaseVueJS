import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		usuario: '',
		error: ''
  	},
  
	mutations: {
		setUsuario(state, payload) {
			state.usuario = payload
		},

		setError(state, payload) {
			state.error = payload
		}
  	},
  
	actions: {
		crearUsuario({commit}, payload) {
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
			.then(res => {
				commit('setUsuario',{email: res.user.email, uid: res.user.uid})

				router.push({name: 'inicio'})
			})
			.catch(err => {
				commit('setError',err.message)
			})
		}
  	},
	  
	modules: {
  	}
})