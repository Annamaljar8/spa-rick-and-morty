import axios from 'axios';
import * as types from './types';
import { createStore } from 'vuex'

export default createStore({
  state: {
    apiEndpoint: 'https://rickandmortyapi.com/api',
    apiCharacters: '/character/2',
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
    [types.GET_CHARACTERS]: async ({ commit }) => {
      // console.log('21 payload', payload);
      const res = await axios.get('https://rickandmortyapi.com/api/character');
      console.log('222', res)
      commit(types.GET_CHARACTERS, res);
    },
  }
})
