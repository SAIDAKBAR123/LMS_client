import { execute, API } from './Api';

export default {
    getAll: () => execute(API.get('authors')),
    get: id => execute(API.get(`authors/${id}`)),
    create: author => execute(API.post('authors', { author })),
    delete: id => execute(API.delete(`authors/${id}`)),
}