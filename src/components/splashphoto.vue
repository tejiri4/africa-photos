<template>
   <section>
	<div class="splash-photo" :class="`${classes} ${!state.isLoaded && 'img-loading'}`" @click="() => handlePhotoClick({ imgURL, name, location, id })">
        <img :src="imgURL" @load="onImgLoad"  :class="state.isLoaded ? '' : 'loading'" alt="splash-image" />
		<div class="splash-photo__description">
			<h3>{{ name }}</h3>
			<p>{{ location }}</p>
		</div>
    </div> 
	<SplashPhotoLoading height="250px" v-if="!state.isLoaded"/>
   </section>
</template>
<script>
import { reactive } from 'vue';
import SplashPhotoLoading from '@/components/splashphotoloading.vue'

export default {
		name: 'SplashPhoto',
		props: {
			classes: String,
			name: String,
			location: String,
			imgURL: String,
			handlePhotoClick: Function,
			id: String
		},
		components: {
			SplashPhotoLoading
		},
		setup() {
			const state = reactive({
				isLoaded: false
			})

			const onImgLoad = () => {
				state.isLoaded = true;
			}

			return {
				state,
				onImgLoad
			}
		}
}
</script>
<style lang="scss" scoped>
.splash-photo {
	width: 250px;
	height: auto;
	position: relative;
	margin: 0 20px 30px;
	cursor: pointer;

	img {
		width: 100%;
		height: auto;
		z-index: 100;
		box-shadow: 0 0 30px #33333338;
	}

	&__description {
		position: absolute;
		bottom: 0;
		z-index: 10000;
		color: #fff;
		padding: 15px;  	
		background-image: linear-gradient(180deg, #8080802e, #8080800f);
		width: 100%;

		h3 {
			text-align: initial;
			margin: 0;
			font-size: 15px;
		}

		p {
			margin: 0;
			font-size: 13px;
			text-align: initial;
		}
	}
}

.full-border-radius {
	img {
		border-radius: 5px;
	}
}

.img-loading {
  opacity: 0;
}

.half-border-radius {
	img {
		border-radius: 5px;
	}
}
</style>