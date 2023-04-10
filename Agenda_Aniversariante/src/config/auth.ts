import * as dotenv from 'dotenv'

const secretMD5 = process.env.MD5_HASH
console.log('secret here ===> ',secretMD5)

export default {
  jwt: {
    secret: '93c9f455fcac913b3956179f662197f3',
    expiresIn: '1d',
  },
}
