import { createStore } from 'vuex'
import count from '@/store/modules/count.js'

const store = createStore({
  modules: {
    countModule: count,
  },
})

export default store
