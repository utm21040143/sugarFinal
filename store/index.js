import Vuex from 'vuex';
const createStore = () => {
    return new Vuex.Store({
        state: {
            show:false,
        },
    
  })
}
  export default createStore;