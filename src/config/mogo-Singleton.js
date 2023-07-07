import mongoose from 'mongoose'
import config from './config.js';


class Database {
    constructor() {
      this.connection = null;
    }
  
    async connect() {
        try {
            if (!this.connection) {
              this.connection = await mongoose.connect(config.mongoUrl), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              };
              console.log('Conexión a la base de datos establecida');
            }
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
      }
    }
  
    async disconnect() {
      try {
        if (this.connection) {
          await mongoose.disconnect();
          console.log('Conexión a la base de datos cerrada');
          this.connection = null;
        }
      } catch (error) {
        console.error('Error al desconectar de la base de datos:', error);
      }
    }
  }
  
  const database = new Database();
  export default database;
