<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'dashboard',
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0,
      },
    }
  },
  methods: {
    async fetchData (restaurantId) {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({ restaurantId})

        if( statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { id, name, Category, Comments, viewCounts } = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category.name,
          commentsLength: Comments.length,
          viewCounts,
        }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法顯示餐廳資訊，請稍後再試'
        })
      }  
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchData(id)
  }
}
</script>