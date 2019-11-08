
const initialState = [
    {
        name: 'Brainy',
        age: 200,
        height: '5cm'
    }
]

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;