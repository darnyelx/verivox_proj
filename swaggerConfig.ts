import swaggerJSDoc, { Options } from 'swagger-jsdoc';



// Options for the swagger-jsdoc
const options: Options = {
  swaggerDefinition:{
    openapi: '3.0.0',
    info:{
        title: 'Verivox Tariff Service',
        version: '1.0.0',
        description: 'Documentation for Verivox Tariff Service',
    }
  },
  apis: ['./routes/*.ts'], // Path to the API route files in TypeScript
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
