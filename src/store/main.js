import Reflux from 'reflux';
import actions from 'actions/user'

export default Reflux.createStore({
    init () {
        this.listenToMany(actions);
    },
    logout: function () {
        console.log(arguments);
    },
    login (flag) {
        console.log(this);
        this.trigger({page2: flag});
    },
    getInitialState () {
        return {page: "open"}
    }

});