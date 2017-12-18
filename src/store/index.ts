import * as Client from './Client';
import * as Tasks from './Tasks';
import * as Documents from './Documents';
import { List } from 'immutable';

// The top-level state object
export interface ApplicationState {
    client: Client.ClientState;
    tasks: List<Tasks.TaskRecord>;
    documents: Documents.State;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    client: Client.reducer,
    tasks: Tasks.reducer,
    documents: Documents.reducer
};