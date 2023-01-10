import express, { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import 'express-async-errors'
import { routes } from './routes'

dotenv.config()

const app = express()

// Middlewares...
app.use(cors({
  origin: "*"
}))
app.use(express.json())
app.use(routes)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

app.listen(process.env.PORT, () =>
  console.log(`🔥 server is running on port ${process.env.PORT}...`),
)
