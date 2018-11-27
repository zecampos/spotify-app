import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
        user:{
            token: '',
            id: '',
        }
     

    }),
    mutations: {
      setToken(state, token){
        state.user.token = token
      }
    }
  })
}

export default createStore