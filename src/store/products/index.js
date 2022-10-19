import * as getters from './getters'
import * as mutations from './mutation'
import * as actions from './action'
import state from './state'

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}