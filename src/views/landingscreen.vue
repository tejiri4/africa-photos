<template>
    <div class="landing-screen">
        <div class="landing-screen__search">
           <Search :handleInputChange="handleInputChange" :keyword="searchStore.keyword" :searchState="searchStore.searchState" :startSearching="startSearching"/>
        </div>
				<div>
					<!-- <div class="landing-screen__africa-photos">
						<AfricaPhoto classes="full-border-radius" name="Jordan Okeke" location="Pretoria, South Africa" imgURL="https://picsum.photos/300/600/?random" />
						<AfricaPhoto classes="full-border-radius" name="Jordan Okeke" location="Pretoria, South Africa" imgURL="https://picsum.photos/300/500/?random" />
						<AfricaPhoto classes="full-border-radius" name="Jordan Okeke" location="Pretoria, South Africa" imgURL="https://picsum.photos/300/200/?random" />
						<AfricaPhoto classes="full-border-radius" name="Jordan Okeke" location="Pretoria, South Africa" imgURL="https://picsum.photos/300/100/?random" />
						<AfricaPhoto classes="full-border-radius" name="Jordan Okeke" location="Pretoria, South Africa" imgURL="https://picsum.photos/300/600/?random" />
				</div> -->
						<div class="landing-screen__africa-photos">
						<AfricaPhotoLoading classes="full-border-radius" name="Jordan Okeke" location="Pretoria, South Africa" imgURL="https://picsum.photos/300/600/?random" />
				</div>
				</div>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import Search from '@/components/searchinput.vue'
// import AfricaPhoto from '@/components/africaphoto.vue'
import AfricaPhotoLoading from '@/components/africaphotoloading.vue'

export default {
    name: 'LandingScreen',
    components: {
			Search,
			// AfricaPhoto,
			AfricaPhotoLoading
		},
		setup() {
			const store = useStore()

			const searchStore = computed(() => store.getters.searchStore)

			const handleInputChange = ({ target: { value } }) => store.commit('setSearchStore', { searchState: '', keyword: value });

			const startSearching = () => store.dispatch('startSearching')

			return {
				searchStore,
				handleInputChange,
				startSearching
			}
		}
}
</script>
<style lang="scss" scoped>
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

	&__africa-photos {
    column-count: 3;
    column-gap: 1em;
    display: inline-block;
		max-width: 1000px;
		margin-top: -40px;

		.margin {
			margin: 0 25px 25px;
		}
	}
}
</style>