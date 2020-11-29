/* eslint-disable no-mixed-spaces-and-tabs */
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state () {
			return {
			  searchStore: {
					keyword: '',
					searchState: ''
				},
				modal: {
					showModal: false
				},
				photos: [],
			}
    },
    mutations: {
			setSearchStore (state, value) {
				state.searchStore = value
			},
			setModal(state,value) {
				state.modal = value
			},
			setPhotos (state,value) {
				state.photos = value
			},
		},
		getters: {
		  searchStore (state) {
				return state.searchStore
			},
			modal(state) {
				return state.modal
			},
			getPhotos(state) {
				return state.photos.length ? state.photos.map(({ urls, user, id }) => ({
					id,
					name: user.name,
					location: user.location,
					imgURL: urls.small
				})) : []
			},
		},
		actions: {
			async startSearching ({ commit, state }) {
				commit('setSearchStore', { ...state.searchStore, searchState: 'searching' })
				commit('setPhotos', [])

				const res = await axios.get(`${process.env.VUE_APP_SPLASH_API}search/photos?page=1&query=${state.searchStore.keyword}&per_page=7`);

				commit('setPhotos', res?.data?.results || [])
				commit('setSearchStore', { ...state.searchStore, searchState: 'ended' })
			},
			async listPhotos({ commit }) {
				const res = await axios.get(`${process.env.VUE_APP_SPLASH_API}search/photos?page=1&query=africans&per_page=7`);

				commit('setPhotos', res?.data?.results || [])
			},
			async getPhoto({ commit }, payload) {
				const res = await axios.get(`${process.env.VUE_APP_SPLASH_API}/photos/${payload.id}`);

				commit('setModal', { showModal: true, ...res.data })
			}
		}
});

export default store;