import axios from 'axios';
import * as types from './types';
import { createStore } from 'vuex'

export default createStore({
  state: {
    apiEndpoint: 'https://rickandmortyapi.com/api',
    apiCharacters: '/character',
    characters: [],
  },
  getters: {
    [types.CHARACTERS]: (state) => state.characters,
  },
  mutations: {
    [types.GET_CHARACTERS]: (state, payload) => {
      state.characters = payload;
    },
  },
  actions: {
    [types.GET_CHARACTERS]: async ({ commit, state }) => {
      // console.log('21 payload', payload);
      const res = await axios.get(`${state.apiEndpoint}${state.apiCharacters}`);
      console.log('222', res.data)
      commit(types.GET_CHARACTERS, res.data);
    },
  }
})
