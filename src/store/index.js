/* eslint-disable no-mixed-spaces-and-tabs */
import { createStore } from 'vuex';

const store = createStore({
    state () {
			return {
			  searchStore: {
					keyword: '',
					searchState: ''
				}
			}
    },
    mutations: {
			setSearchStore (state, value) {
				state.searchStore = value
			}
		},
		getters: {
		  searchStore (state) {
				return state.searchStore
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