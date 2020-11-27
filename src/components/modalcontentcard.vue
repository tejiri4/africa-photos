<template>
    <div class="modal-content-card">
      <div>
          <img :src="imgURL" />
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
    }
}
</script>
<style lang="scss">
.modal-content-card {
	img {
		height: 350px;
		width: 100%;
		object-fit: cover;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&__description {
		display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px;

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