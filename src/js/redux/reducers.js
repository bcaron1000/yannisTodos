import { getStore, updateStore} from './store'

function reducer(action) {
    const store = getStore();
    switch (action.type) {
        
        
        case "edit": 
            const i = action.itemIndex;
            const editedStore = [...store.splice(i, 1, action.payload ) ]
            updateStore(store)
            action.cb()
            break;
        case "delete":
            const index = action.payload.index
            const newStore = [...store.slice(0, index), ...store.slice(index+1)]
            updateStore(newStore);
            action.cb()
            break;
        case "cancel":
            action.cb()
            break;
        case "add": 
            console.log(action.payload);
            const addToStore = [...store, (action.payload)]
            updateStore(addToStore)
            action.cb()
            break;

        default: return store
    }

}


export default reducer