import { persistReducer } from "redux-persist";
import { contactsReducer } from "redux/slice/sliceContacts";
import { filterReducer } from "redux/slice/sliceFilter";
import storage from "redux-persist/lib/storage";

const persistConfigContacts = {
    key: 'contacts',
    storage,
};

const persistConfigFilter = {
    key: 'filter',
    storage,
};


export const persistedContactsReducer = persistReducer(persistConfigContacts, contactsReducer);

export const persistedFilterReducer = persistReducer(persistConfigFilter, filterReducer);