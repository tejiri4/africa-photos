<template>
    <div class="modal-content-card" :style="{ width, height }">
      <div>
          <img :src="imgURL"/>
			</div>
			<div class="modal-content-card__description">
				<h3>{{ name }}</h3>
				<p>{{ location }}</p>
			</div>
    </div>
</template>
<script>
export default {
    name: 'ModalContentCard',
    props: {
      name: String,
			location: String,
			imgURL: String,
			width: String,
			height: String
    }
}
</script>
<style lang="scss">
.modal-content-card {
	img {
		max-height: 450px;
		max-width: 100%;
		object-fit: contain;
	}

	img, > div:first-child {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	> div:last-child {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	> div {
		background: #fff;
	}

	&__description {
		display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;

		h3 {
			margin-top: 20px;
			margin-bottom: 0;
		}

		p {
			margin-bottom: 25px;
			margin-top: 10px;
		}
	}
}
</style>