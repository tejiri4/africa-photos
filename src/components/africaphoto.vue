<template>
   <div class="africa-photo" :class="classes">
       <img :src="imgURL" />
			<div class="africa-photo__description">
				<h3>{{ name }}</h3>
				<p>{{ location }}</p>
			</div>
    </div> 
</template>
<script>
export default {
		name: 'AfricaPhoto',
		props: {
			classes: String,
			name: String,
			location: String,
			imgURL: String
		}
}
</script>
<style lang="scss" scoped>
.africa-photo {
	width: 250px;
  height: auto;
	position: relative;
	margin: 0 20px 30px;

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

.half-border-radius {
	img {
		border-radius: 5px;
	}
}
</style>