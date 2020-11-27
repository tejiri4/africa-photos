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
	background: rgb(0 0 0 / 22%);
	height: 100vh;
	z-index: 10000;

	&__content {
		background: #fff;
		position: absolute;
		left: 0;
		right: 0;
		width: 100px;
		top: 0;
		bottom: 0;
		margin: auto;
		height: fit-content;
		border-radius: 5px;

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
}
</style>