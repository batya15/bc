import Reflux from 'reflux';
import actions from 'actions/user.js'

export default Reflux.createStore({
    init () {
        console.log(window.rrr = actions);
        this.listenToMany(actions);
    },
    logout: function () {
        console.log(arguments);
    },
    login (flag) {
        console.log(this);
        var status = flag ? 'ONLINE' : 'OFFLINE';
        this.trigger({page2: flag});
    },
    getInitialState () {
        return {page: "open"}
    }

});