<template>
    <div class="landing-screen">
        <div class="landing-screen__search">
           <Search :handleInputChange="handleInputChange" :keyword="searchStore.keyword" :searchState="searchStore.searchState" :startSearching="startSearching" :handleSearchAgain="handleSearchAgain"/>
        </div>
				<div>
				<div class="landing-screen__splash-photos" v-if="searchStore.searchState === '' || searchStore.searchState === 'ended'">
						<SplashPhoto v-for="photo in photos" :key="photo.id" :id="photo.id" classes="full-border-radius" :name="photo.name" :location="photo.location" :imgURL="photo.imgURL" :handlePhotoClick="handlePhotoClick"/>
				</div>
				<div class="landing-screen__splash-photos" v-if="!photos.length">
						<SplashPhotoLoading height="250px"/>
						<SplashPhotoLoading height="350px" />
						<SplashPhotoLoading height="300px" />
						<SplashPhotoLoading height="250px"/>
						<SplashPhotoLoading height="350px" />
						<SplashPhotoLoading height="300px" />
				</div>
				</div>
				<Modal :showModal="modal.showModal" :handleCloseModal="handleCloseModal">
					<ModalContentCard :imgURL="modal.urls.regular" :name="modal.user.name" :location="modal.user.location" :width="modal.width" :height="modal.height"/>
				</Modal>
    </div>
</template>
<script>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import Search from '@/components/searchinput.vue'
import SplashPhoto from '@/components/splashphoto.vue'
import SplashPhotoLoading from '@/components/splashphotoloading.vue'
import Modal from '@/components/modal.vue'
import ModalContentCard from '@/components/modalcontentcard.vue'

export default {
    name: 'LandingScreen',
    components: {
			Search,
			SplashPhoto,
			SplashPhotoLoading,
			Modal,
			ModalContentCard
		},
		setup() {
			const store = useStore()

			const searchStore = computed(() => store.getters.searchStore)
			const modal = computed(() => store.getters.modal)
			const photos = computed(() => store.getters.getPhotos)

			onBeforeMount(() => {
				store.dispatch('listPhotos')
			})

			const handleInputChange = ({ target: { value } }) => store.commit('setSearchStore', { searchState: '', keyword: value });

			const startSearching = () => store.dispatch('startSearching')

			const handlePhotoClick = photo => {
				store.dispatch('getPhoto', photo)
			}

			const handleCloseModal = () => store.commit('setModal', { showModal: false, })

			const handleSearchAgain = () => store.commit('setSearchStore', { searchState: '', keyword: searchStore.value.keyword });

			return {
				searchStore,
				handleInputChange,
				startSearching,
				modal,
				handlePhotoClick,
				handleCloseModal,
				photos,
				handleSearchAgain
			}
		}
}
</script>
<style lang="scss">
.landing-screen {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  &__search {
		background: #DDE2E9;
		height: 250px;
    display: flex;
    align-items: center; 
		justify-content: center;
		width: 100%;
  }

	&__splash-photos {
    column-count: 3;
		column-gap: 20px;
    display: inline-block;
		max-width: 900px;
		margin-top: -40px;

		.margin {
			margin: 0 25px 25px;
		}
	}

	@media only screen and (max-width: 950px) {
    &__splash-photos {
			column-count: 2;
			max-width: 600px;
		}
  }

	@media only screen and (max-width: 580px) {
    &__splash-photos {
			column-count: 1;
		}
  }
}
</style>