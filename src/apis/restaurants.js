import {apiHelper} from '../utils/helpers'

export default { 
  getRestaurants ({ page, categoryId}) {
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getRestaurant ( { restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getRestaurantsTop () {
    return apiHelper.get('/restaurants/top')
  },
  addFavorite ( restaurantId ) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  removeFavorite( restaurantId ) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike ( restaurantId ) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  }, 
  removeLike ( restaurantId ) {
    return apiHelper.delete(`/like/${restaurantId}`)
  }
}