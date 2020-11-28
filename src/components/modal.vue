<template>
  <div class="modal" v-if="showModal">
    <div class="modal__content">
			<div>
				<div class="modal__content__close" @click="handleCloseModal">
				<img src="../assets/cancel.svg" alt="close"/>
			</div>
      <slot></slot>
			</div>
     </div>
  </div>
</template>
<script>
export default {
    name: 'Modal',
    props: {
			showModal: Boolean,
			handleCloseModal: Function
    }
}
</script>
<style lang="scss">
.modal {
  position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgb(0 0 0 / 36%);
	height: 100vh;
	z-index: 10000;

	&__content {
		position: absolute;
		left: 0;
		right: 0;
		max-width: 60%;
		top: 0;
		bottom: 0;
		margin: auto;
		max-height: 500px;
		border-radius: 5px;
		width: fit-content;

		> div {
			position: relative;
		}


		&__close {
			position: absolute;
			right: -50px;
			top: -20px;
			cursor: pointer;

			img {
				height: 17px;
			}
		}
	}

	@media only screen and (max-width: 580px) {
    &__content-photos {
			max-width: 90%;
		}
  }
}
</style>