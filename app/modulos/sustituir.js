module.exports = (tarea,tareaTemplate) =>{
    let output = tareaTemplate.replace(/{%ID%}/g,tarea.id);
    output = output.replace('{%NOMBRE%}',tarea.nombre);
    output = output.replace('{%DESCRIPCION%}',tarea.descripcion);
    output = output.replace('{%FECHA%}',tarea.fecha);

    return output;
}