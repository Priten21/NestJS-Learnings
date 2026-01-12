export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),


  database: {
    connectionString: process.env.CONNECTION_STRING,
  },

  security: {
    secretKey: process.env.SECRET_KEY,
  },
});