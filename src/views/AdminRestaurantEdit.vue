<template>
  <div class="container py-5">
    <AdminRestaurantForm 
    :initial-restaurant="restaurant"
    :is-processing="isProcessing"
    @after-submit="afterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: '',
      },
      isProcessing: false
    }
  },
  methods: {
    async fetchData (restaurantId) {
      try {
        const { data } = await adminAPI.restaurant.getRestaurant({restaurantId})
        const {id, name, tel, address, opening_hours:openingHours, description, image, CategoryId: categoryId} = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId,
        }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async afterSubmit (formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurant.update({ 
          restaurantId: this.restaurant.id, formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({name: 'admin-restaurants'})
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法修改餐廳資料，請稍後再試'
        })
      }
    }
  },
  created () {
    const {id} = this.$route.params
    this.fetchData(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchData(id)
    next()
  }
}
</script>
