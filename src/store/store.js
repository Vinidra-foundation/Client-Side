import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // Add your reducers here
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true
});

export default store;