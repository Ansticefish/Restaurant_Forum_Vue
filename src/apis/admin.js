import { apiHelper } from '../utils/helpers'

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories')
    },
    add({ name }) {
      return apiHelper.post('/admin/categories', {
        name
      })
    },
    update({ id, name }) {
      return apiHelper.put(`/admin/categories/${id}`, { name })
    },
    delete( { id }) {
      return apiHelper.delete(`/admin/categories/${id}`)
    }
  },
  restaurant: {
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    getRestaurants () {
      return apiHelper.get('/admin/restaurants')
    },
    getRestaurant ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    delete ({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData )
    }
  },
  users: {
    get () {
      return apiHelper.get('/admin/users')
    },
    update ( { userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin } )
    }
  }
}