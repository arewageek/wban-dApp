import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import { Quasar, Notify, Dialog } from 'quasar'
import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

Vue.config.productionTip = false

Vue.use(Quasar, {
	plugins: {
		Notify,
		Dialog,
	},
})

new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App),
}).$mount('#app')
