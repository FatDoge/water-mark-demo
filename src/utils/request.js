import { API_URL } from './constant'
import rq from 'request-promise'

const request = options => {
    return rq({
        json: true,
        ...options,
        url: `${API_URL}${options.url}`
    })
    .then( res => res )
    .catch( err => err )
}

export default request