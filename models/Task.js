const mongoose = require('mongoose');
const {Schema} = mongoose;

//On crée le schéma de la base de donnée
//lets implement the server validation
const taskSchema = new Schema(
    {
        name: {
         type: String,
         required: [true, 'must provide name'],
         trim: false,
         maxLength:[20, 'name cannot be more than 20 chars'],
        },

        completed:{
            type: Boolean,
            default:false,
        },
    }
);

//On crée le model de la base de donnée
//Puis on export le modéle
module.exports = mongoose.model('Task',taskSchema,'taskManager');