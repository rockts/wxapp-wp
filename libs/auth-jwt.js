const API_BASE = 'https://sandbox.lekee.cc/wp-json'
const API_ROUTE_JWT_VALIDATE = 'jwt-auth/v1/token/validate'

const validateToken = (jwt = {}, callback = () => {

}) => {
  wx.request({
    url: `${ API_BASE }/${ API_ROUTE_JWT_VALIDATE }`,
    method: 'POST',
    header: {
      'Authorization': `Bearer ${ jwt.token }`
    },
    success: (response) => {
      switch (response.statusCode) {
        case 200:
          return callback(true)
          break
        case 403:
          return callback(false)
        default:
          console.log(response)
      }
    }
  })
}

export {
  validateToken
}
