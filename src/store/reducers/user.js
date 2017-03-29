export default (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            return { ...state, name: action.name }
        }
    }
    return state;
}