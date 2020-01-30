import { execute, API } from './Api';

export default {
    getAll: () => execute(API.get('users')),
    get: id => execute(API.get(`users/${id}`))
}