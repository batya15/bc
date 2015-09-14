import Reflux from 'reflux';
import actions from 'actions/app'

var state = {
    total: 0,
    ready: false
};

export default Reflux.createStore({
    listenables: actions,
    loading: function (action, i) {
        state.total += i;
        if (state.total >= 100) {
            state.total = 100;
            setTimeout(()=> {
                state.ready = true;
                this.trigger(state);
            }, 1000)
        }
        this.trigger(state);
    },
    getInitialState () {
        return state;
    }

});