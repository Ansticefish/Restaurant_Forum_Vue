import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUser ({ id }) {
    return apiHelper.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addFavorite (restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { 
        Authorization : `Bearer ${getToken()}`
      }
    })
  },
  deleteFavorite (restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: {
        Authorization : `Bearer ${getToken()}`
      }
    })
  },
  addLike (restaurantId) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteLike (restaurantId) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUsersTop () {
    return apiHelper.get('/users/top', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  followUser (userId) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  unfollowUser (userId) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}