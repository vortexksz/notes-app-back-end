const { addNoteHandler, getALLNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,

        options: {
           payload: {
            parse: true,
            allow: ['application/json'],
           },
        },
        
    },

    {
        method: 'GET',
        path: '/notes',
        handler: getALLNotesHandler,
    },

    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
        options: {
         payload: {
           parse: true,
           allow: ['application/json'],
         },
       },
    },

    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }

];

module.exports = routes;