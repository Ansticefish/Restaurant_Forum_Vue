import {apiHelper} from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default { 
  getRestaurants ({ page, categoryId}) {
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: ` Bearer ${getToken()}`}
    })
  },
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  getRestaurantsTop () {
    return apiHelper.get('/restaurants/top', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addFavorite (restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  removeFavorite( restaurantId ) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}