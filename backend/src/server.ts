import 'reflect-metadata'
import cors from 'cors'
import express, { Request } from 'express'
import routes from './routes'
import './database/connection'


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Runnin'"))