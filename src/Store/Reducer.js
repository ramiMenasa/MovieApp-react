const InitialValues = {
    counter: 0,
    favorits: [],
    list: []
}
export default function FavoriteRed(state = InitialValues, action) {
    switch (action.type) {
        case 'ADD_FAVORIT':
            return {
                ...state,
                favorits: [...state.favorits, action.payload]
            }
        case 'REMOVE_FAVORIT':
            return {
                ...state,
                favorits: [...state.favorits, action.payload]
            }
        case 'CHANGE_COUNT':
            return {
                ...state,
                counter: action.payload
            }

        case 'MOVIELISTSEARCH':
            return {
                ...state,
                list: action.payload
            }
        case 'MOVIELISTPAGE':
            return {
                ...state,
                list: action.payload
            }
            case 'MOVIELIST':
                return {
                    ...state,
                    list: action.payload
                }
    
        default:
            return state
    }

}