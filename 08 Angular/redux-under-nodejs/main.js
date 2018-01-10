const redux = require("redux");
const {reducer} = require("./reducers");
const {inc, dec} = require("./actions");

const store = redux.createStore(reducer, {
    counter: 0,
});

store.subscribe(function() {
    console.log(store.getState());
});

console.log(store.getState());

store.dispatch(inc());
store.dispatch(dec());
store.dispatch(inc());

