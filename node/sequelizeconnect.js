
const { Sequelize } = require('sequelize');

//#1
const sequelize = new Sequelize('nhumf_sion', 'nhumf_sion', 'Noriyuki6403', {
  host: 'public.nhumf.tyo2.database-hosting.conoha.io',
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

//#2
(async()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

)();