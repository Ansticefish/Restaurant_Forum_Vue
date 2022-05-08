import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    add({ name }) {
      return apiHelper.post('/admin/categories', {
        name
      }, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    update({ id, name }) {
      return apiHelper.put(`/admin/categories/${id}`, { name }, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    delete( { id }) {
      return apiHelper.delete(`/admin/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    }
  },
  restaurant: {
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      } )
    },
    getRestaurants () {
      return apiHelper.get('/admin/restaurants', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    getRestaurant ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    delete ({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      } )
    }
  },
  users: {
    get () {
      return apiHelper.get('/admin/users', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    update ( { userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin } , {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    }
  }
}