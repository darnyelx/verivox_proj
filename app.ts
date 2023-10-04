import express, { Application, Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig'; 
import productRoutes from './routes/tariffRoutes';

const app: Application = express();
// Middleware for JSON request bodies
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health",(request: Request, res: Response)=>{
    return res.status(200).json({message:"I'm alive"})
})
// Routes
app.use('/api', productRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
