/* eslint-disable no-mixed-spaces-and-tabs */
import { createStore } from 'vuex';

const store = createStore({
    state () {
			return {
			  searchStore: {
					keyword: '',
					searchState: ''
				},
				modal: {
					showModal: false
				}
			}
    },
    mutations: {
			setSearchStore (state, value) {
				state.searchStore = value
			},
			setModal(state,value) {
				state.modal = value
			}
		},
		getters: {
		  searchStore (state) {
				return state.searchStore
			},
			modal(state) {
				return state.modal
			}
		},
		actions: {
			startSearching ({ commit, state }) {
				commit('setSearchStore', { ...state.searchStore, searchState: 'searching' })

				setTimeout(() => {
					commit('setSearchStore', { ...state.searchStore, searchState: 'ended' })

				}, 30000)
		
			}
		}
});

export default store;