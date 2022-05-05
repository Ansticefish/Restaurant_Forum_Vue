<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>

    <!-- top cards -->
    <RestaurantsTopCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant" />
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantsTopCard from '../components/RestaurantsTopCard.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'


export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    RestaurantsTopCard,
  },
  data () {
    return {
      restaurants: [],
    }
  },
  methods: {
    async fetchRestaurants () {
      try {
        const { data } = await restaurantsAPI.getRestaurantsTop()
        this.restaurants = data.restaurants
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  },
  created () {
    this.fetchRestaurants()
  }
}
</script>