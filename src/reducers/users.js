const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    info: action.info,
                }
            ];

        default:
            return state;
    }
};

export default users;
