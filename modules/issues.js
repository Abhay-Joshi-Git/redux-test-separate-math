export const actions = {
    ADD_ISSUE: 'ADD_ISSUE'
}

export const addIssue = (item) => {
    return {
        type: actions.ADD_ISSUE,
        item: item
    }
}

export const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_ISSUE:
            return [
                ...state,
                action.item
            ]
        default:
            return state
    }
}
