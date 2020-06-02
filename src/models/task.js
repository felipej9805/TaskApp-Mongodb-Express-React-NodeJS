const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Esquema de las tareas 
 */
const TaskSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}
});

/**
 * TaskSchema es solo el esquema de como van a lucir mis datos
 * Task es como lo puedo utilizar dentro mi aplicacion
 */
module.exports = mongoose.model('Task', TaskSchema);