import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, incrementBy = 1) {
            state.count += incrementBy
        }
    },
    getters: {
        doubledCount: (state) => {
            return state.count * 2
        }
    },
    actions: {
        increment(context) {
            console.log('actually incrementing');
            context.commit('increment')
        },
        async asyncIncrement(context, incrementBy) {
            console.log('going to plan an increment')
            await setTimeout(() => {
                context.commit('increment', incrementBy)
            }, 1000);
        }
    }
});

export default store;