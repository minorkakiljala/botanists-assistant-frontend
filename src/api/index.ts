// import remoteClient from '../api/remoteClient';
import localClient from './localClient';

// This file serves a single entry point for the api.
// Selecting here which client you're exporting makes sure all api-calls are done to the same location.

export default localClient;
