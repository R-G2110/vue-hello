// import { photo } from "./dbPhoto.js";
const {createApp} = Vue;
let index = 0; 

createApp({
	data() {
		return {
			message: 'Hello Vue!',
			index: 0,
			linkHref: 'https://unsplash.it/600/300?image=171',
			imageSource: ['img/01.webp',
									  'img/02.webp',
									  'img/03.webp',
									  'img/04.webp',
									  'img/05.webp'
			]
		}
	},

	methods: {

		indexPlusOne(){
			this.index++;
			if (this.index === this.imageSource.length) this.index =  0
			console.log(this.imageSource, this.index);
		}
	}
}).mount('#app')