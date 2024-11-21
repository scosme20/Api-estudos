import fastify from 'fastify';
import { knex } from './database';

const app = fastify(); 

app.get('/hello', async (request, reply) => {
    const tables = await knex('sqlite_schema').select('*')

    return tables;
});

app.listen({ port: 3500 }).then(() => {
    console.log('Server listening on port 3500');
}).catch(err => {
    console.error('Error starting server:', err);
    process.exit(1); 
});
