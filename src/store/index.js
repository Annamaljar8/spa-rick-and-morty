import axios from 'axios';
import * as types from './types';
import { createStore } from 'vuex'

export default createStore({
  state: {
    apiEndpoint: 'https://rickandmortyapi.com/api',
    apiCharacters: '/character',
    apiPage: '/?page=',
    characters: [],
    info: [],
    currentPage: null
   
  },
  getters: {
    [types.CHARACTERS]: (state) => state.characters,
    [types.INFO]: (state) => state.info,
    [types.GET_CURRENT_PAGE]: (state) => state.currentPage,
  },
  mutations: {
    [types.GET_CHARACTERS]: (state, payload) => {
      state.characters = payload;
    },
    [types.GET_INFO]: (state, payload) => {
      state.info = payload;
    },
    [types.SET_CURRENT_PAGE]: (state, payload) => {
      state.currentPage = payload;
    }
  },
  actions: {
    [types.GET_CHARACTERS]: async ({ commit, state }) => {
      const res = await axios.get(`${state.apiEndpoint}${state.apiCharacters}`);
      console.log('222', res.data)
      commit(types.GET_CHARACTERS, res.data.results);
      commit(types.GET_INFO, res.data.info);
      
    },
    [types.SET_CURRENT_PAGE]: async ({ commit, state }, payload) => {
      console.log('21 payload', payload);
      const res = await axios.get(`${state.apiEndpoint}${state.apiCharacters}${state.apiPage}${payload}`);
      commit(types.SET_CURRENT_PAGE, payload);
      commit(types.GET_CHARACTERS, res.data.results);
      console.log('44', res.data)
      
      
      
    },
    // [types.GET_COMMENTS]: async ({ commit, state }, payload) => {
    //   const res = await axios.get(`${state.apiEndpoint}${api.COMMENTS}${payload}`);
    //   commit(types.GET_COMMENTS, res.data);
  }
})
