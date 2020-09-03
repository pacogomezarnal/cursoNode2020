const http=require('http');
const fs = require('fs');
const url = require('url');
//Template de lista de tareas
const sustituirTarea = (tarea,tareaTemplate) =>{
    let output = tareaTemplate.replace('{%ID%}',tarea.id);
    output = output.replace('{%NOMBRE%}',tarea.nombre);
    output = output.replace('{%DESCRIPCION%}',tarea.descripcion);
    output = output.replace('{%FECHA%}',tarea.fecha);

    return output;
}
const  tareaTemplate=fs.readFileSync(`${__dirname}/templates/tarea.html`,'utf8');

//DaTOS Prueba
const  data=fs.readFileSync(`${__dirname}/data/data.json`,'utf8');
const dataTable=JSON.parse(data);
console.log(dataTable);

//Crear nuestro servidor
const server = http.createServer((req, res) => {
    //Path
    const path = req.url;

   
    //Enrutado
    if(path==='/nosotros'||path==='/'){
        const tareaListaTemplate=dataTable.map(tarea=>sustituirTarea(tarea,tareaTemplate)).join('');
        const index=fs.readFile(`${__dirname}/templates/index.html`,'utf8',(err,data)=>{
            if(err) {
                res.end('ERROR');
            }else{
                dataView=data.replace('{%LISTATAREAS%}',tareaListaTemplate);
                res.end(dataView);
            }
        });
    }else if (path==='/productos'){
        res.end('PRODUCTOS');
    }else{
        res.writeHead(404);
        res.end('PAGINA NO ENCONTRADA');
    }
  
});

//Lanzariamos el servidor de forma asincrona
server.listen(8000,'127.0.0.1',()=>{
    console.log('Servidor escuchando en puerto 8000');
});
