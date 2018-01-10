export function inc() {
  return {
    type: "INC"
  };
}

export function dec() {
  return {
    type: "DEC"
  };
}

export function reload() {
  return function(dispatch, getState) {
    dispatch({
      type: "RELOAD_BEGIN"
    });

    setTimeout(function() {
      dispatch({
        type: "SET_CONTACTS",
        contacts: [
          {"id": 1, "name": "Ori"},
          {"id": 2, "name": "Roni"},
          {"id": 3, "name": "Udi"},
          {"id": 4, "name": "Tommy"},
        ]
      });

      dispatch({
        type: "RELOAD_END"
      });
    }, 2500);
  }
}

