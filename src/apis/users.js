import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user')
  },
  getUser ({ id }) {
    return apiHelper.get(`/users/${id}`)
  },
  addFavorite (restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite (restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike (restaurantId) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike (restaurantId) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getUsersTop () {
    return apiHelper.get('/users/top')
  },
  followUser (userId) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  unfollowUser (userId) {
    return apiHelper.delete(`/following/${userId}`)
  },
  update ( { userId, formData } ) {
    return apiHelper.put(`/users/${userId}`, formData)
  }
}