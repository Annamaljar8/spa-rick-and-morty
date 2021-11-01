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
    currentPage: 1,
    nextPage: '',
    prevPage: '',
    arrFavorite: []
   
  },
  getters: {
    [types.CHARACTERS]: (state) => state.characters,
    [types.INFO]: (state) => state.info,
    [types.GET_CURRENT_PAGE]: (state) => state.currentPage,
    [types.GET_NEXT_PAGE]: (state) => state.nextPage,
    [types.GET_PREV_PAGE]: (state) => state.prevPage,
    [types.GET_FAVORITE]: (state) => JSON.parse(JSON.stringify(state.arrFavorite)),
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
    },
    [types.SET_NEXT_PAGE]: (state, payload) => {
      state.nextPage = payload;
    },
    [types.SET_PREV_PAGE]: (state, payload) => {
      state.prevPage = payload;
    },
    [types.SET_FAVORITE]: (state, payload) => {
      state.arrFavorite.push(
        payload
      );
      console.log('2 payload', payload);
    }
  },
  actions: {
    [types.GET_CHARACTERS]: async ({ commit, state }, payload) => {
      const res = await axios.get(`${state.apiEndpoint}${state.apiCharacters}`);
      console.log('222', res.data)
      commit(types.GET_CHARACTERS, res.data?.results);
      commit(types.GET_INFO, res.data?.info);
      console.log('52 payload', payload);
    },
    [types.SET_CURRENT_PAGE]: async ({ commit, state }, payload) => {
      console.log('21 payload', payload);
      const res = await axios.get(`${state.apiEndpoint}${state.apiCharacters}${state.apiPage}${payload}`);
      commit(types.SET_CURRENT_PAGE, payload);
      commit(types.SET_NEXT_PAGE, res.data?.info?.next);
      commit(types.SET_PREV_PAGE, res.data?.info?.prev);
      commit(types.GET_CHARACTERS, res.data?.results);
      console.log('44', res.data) 
    },
    // [types.SET_FAVORITE]: async ({ commit }, payload) => {
    //   console.log('211212 payload', payload);
    //   commit(types.SET_FAVORITE, payload);
    // },
    
    
    // [types.GET_COMMENTS]: async ({ commit, state }, payload) => {
    //   const res = await axios.get(`${state.apiEndpoint}${api.COMMENTS}${payload}`);
    //   commit(types.GET_COMMENTS, res.data);
  }
})
