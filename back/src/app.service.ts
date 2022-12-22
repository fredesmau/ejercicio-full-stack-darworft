import { Injectable } from '@nestjs/common';
var mysql = require('mysql');


//Crear conexion a DB
var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'ejercicio-full-stack',
  user: 'root',
  password: '',
});



@Injectable()
export class AppService {
  getHello(): any {

    

    conexion.query('SELECT `lastName` FROM `test` WHERE id=2;', function (error, results) {
      if (error)
      throw error;
    
      results.forEach(result => {
          console.log(result);
      });

      
      results=JSON.parse(JSON.stringify(results))
      console.log(results); 

      
    });

    

    
  }
}











//console.log(conexion.query("SELECT * FROM `test`"))
    
    //console.log(conexion)

/*
conexion.query('SELECT * FROM `test', function (error, results, fields) {
  if (error)
      throw error;

  results.forEach(result => {
      console.log(result);
  });
});

*/
/*
@Injectable()
export class AppService {
  getHello(): any {
    conexion.connect();
    
    conexion.query('SELECT * FROM `test`', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
    });
     
    // conexion.end();
    
    return conexion;
  }
}
*/










/*
    return[
      {id: 1, text:"Lorem ipsum 1" },
      {id: 2, text:"asdasdasd sdasf 2" },
      {id: 3, text:"Hola" },
      {id: 4, text:"Probando 123" },
      {id: 5, text:"dfgdfg" },
      {id: 6, text:"funcionaaal" },
    ];
*/

//https://www.mysqltutorial.org/mysql-nodejs/connect/

/*

//Conectar a MySQL
conexion.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  
  console.log('Conexion exitosa a MySQL.');
  
});

conexion.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Cerrar conexion a base de datos.');
});

const app = express()

app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  conexion.query(sql, err => {
    if(err) {
      return console.log('error:' + err.message);
    }
    console.log('Base de datos creada.');
  })
});
    
  
*/

/*
var archivo = fs.readFileSync(
      'C:/Users/Mauri/Desktop/ejercicio-full-stack/back/src/elementos.txt',
      'utf-8',
    );

    let archivoLista = archivo.split('\n');
    
    let archivoLista2 = archivoLista.map((element) => {
      let [id, texto, color] = element.split(',');
      return { id, texto, color };
    });

    console.log(archivoLista2);

    return archivoLista2;
*/



/*
conexion.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('CONEXION EXITOSA');
  }
})

*/