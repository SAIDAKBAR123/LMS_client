import API, { execute } from './Api';

export default {
    getAll: () => execute(API().get('categories', { attributes: ['id', 'name'] })),
    get: id => execute(API().get(`categories/${id}`)),
    create: category => execute(API().post('categories', { category })),
    delete: id => execute(API().delete(`categories/${id}`)),
    update: (id, name) => execute(API().post(`categories/${id}`, { category: name }))
}