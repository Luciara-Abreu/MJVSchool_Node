import dotenv from 'dotenv'

dotenv.config()
const secretMD5 = process.env.APP_SECRET_KEY

export default {
  jwt: {
    secret: secretMD5,
    expiresIn: '1d',
  },
}
