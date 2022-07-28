import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import config from 'config'
import connect from './models'
const port = config.get<number>('port') || 8000

const app = express()

app.use(express.json())
app.listen(port, async () => {
  console.log('Server run in: ', port)
  await connect()
})
