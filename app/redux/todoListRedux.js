
export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
}

export const actionCreators = {
  addItem: (item) => {
    return {type: types.ADD_ITEM, payload: item}
  },
  removeItem: (index) => {
    return {type: types.REMOVE_ITEM, payload: index}
  },
  toggleItemCompleted: (index) => {
    return {type: types.TOGGLE_ITEM_COMPLETED, payload: index}
  },
  removeCompleted: (item) => {
    return {type: types.REMOVE_COMPLETED, payload: item}
  },
}

const initialState = {
  todos: [{label: 'todo 1',completed: false }, {label: 'todo 2', completed: true}],
}

export const reducer = (state = initialState, action) => {
  const {todos} = state
  const {type, payload} = action

  switch (type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        todos: [{label : payload, completed: false}, ...todos],
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        todos: todos.map((item, i) => {
          if (i === payload) {
            return {label: item.label, completed: !item.completed}
          }
          return item
        }),
      }
    }
    case types.REMOVE_COMPLETED: {
      return {
        ...state,
        todos: todos.filter((item) => !item.completed)
      }
    }
    default: {
      return state
    }
  }

  return state
}
