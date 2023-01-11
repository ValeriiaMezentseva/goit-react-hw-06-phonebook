import { persistReducer } from "redux-persist";
import { contactsReducer } from "redux/slice/sliceContacts";
import storage from "redux-persist/lib/storage";

const persistConfigContacts = {
    key: 'contacts',
    storage,
};

export const persistedContactsReducer = persistReducer(persistConfigContacts, contactsReducer);
