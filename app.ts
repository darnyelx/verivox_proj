import express, { Application, Request, Response, NextFunction } from 'express';
import productRoutes from './routes/productRoutes';

const app: Application = express();

// Middleware for JSON request bodies
app.use(express.json());

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
