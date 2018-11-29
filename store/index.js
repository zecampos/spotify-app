import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
        user:{
            token: '',
            id: '',
            img: null
        }
    }),
    getters:{
      token: state =>{
        return state.token
      },
      id: state =>{
        return state.id
      }
    },
    plugins: [new VuexPersistence().plugin],
    mutations: {
      setToken(state, token){
        state.user.token = token
      },
      setImg(state, img){
        state.user.img = img
      },
      setUser(state, id){
        state.user.id = id
      },
      setPlaylist(state, play){
        state.playlist.push(play)
      }
    }
  })
}

export default createStore