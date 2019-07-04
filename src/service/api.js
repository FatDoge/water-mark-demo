import request from '@/utils/request'

export const fetchCurrentUser = () => {
    return request({
        url: 'mock-api/client/5d1d97317ad3a6374ba0d6de'
    }).then( res => res )
}