import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
