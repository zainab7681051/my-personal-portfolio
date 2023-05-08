import {
	createApp
} from 'vue'
import './style.css'
import App from './App.vue'

const vueApp = createApp(App)
vueApp.mount('#app')


const entryAnime = () => {
	const tl = gsap.timeline({
		default: {
			ease: "power2"
		}
	});
	tl.to(
		'.top-text.greet', {
			opacity: 1,
			y: 0,
			duration: 1,
		});
	tl.to(
		'.top-text.name', {
			opacity: 1,
			y: 0,
			duration: 1,
		});
	tl.to(
		'.bottom-text', {
			opacity: 1,
			x: 0,
			duration: 1,
		});
	tl.to(
		'.navicons', {
			y: 1,
			duration: 0.75
		})

}
entryAnime()