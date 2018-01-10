const handlers = {
    "INC": inc,
    "DEC": dec,
}

function reducer(state, action) {
    const handler = handlers[action.type];
    if(handler) {
        return handler(state, action);
    }

    return state;
}

function inc(state, action) {
    return {
        ... state,
        counter: state.counter + 1,
    }
}

function dec(state, action) {
    return {
        ... state,
        counter: state.counter - 1,
    }
}

exports.reducer = reducer;
