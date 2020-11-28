<template>
  <div class="splash-photo-loading" :style="{ height }"> 
      <div>
          <div class="splash-photo-loading__strip"></div>
          <div class="splash-photo-loading__strip"></div>
      </div>
    </div> 
</template>
<script>
export default {
    name: 'SplashPhotoLoading',
    props: {
        height: String
    }
}
</script>
<style lang="scss">
.splash-photo-loading {
	width: 250px;
	position: relative;
	margin: 0 0 30px;
	display: inline-block;
  background: #F5F5F5;
  position: relative;
  border-radius: 5px;
	overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
    90deg,
    rgba(#fff, 0) 0,
    rgba(#fff, 0.2) 20%,
    rgba(#fff, 0.5) 60%,
    rgba(#fff, 0)
    );
    animation: shimmer 5s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

    &__strip {
        background: #E6E6E6;
        height: 10px;
        margin: 0 20px;
    }

    &__strip:first-child {
      width: 70px;
      margin-bottom: 10px;
    }

    &__strip:last-child {
        width: 50px;
        margin-bottom: 15px;
    }

    > div {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
}
</style>