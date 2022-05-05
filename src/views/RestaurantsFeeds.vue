<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
     <hr>
    <div class="row">
      <div class="col-md-6">
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'


export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    async fetchFeeds () {
      try {
        const response = await restaurantsAPI.getRestaurantsFeeds()
        this.restaurants = response.data.restaurants
        this.comments = response.data.comments
      } catch (error) {
          console.log('error', error)
          Toast.fire({
              icon: 'error',
              title: '無法取得頁面資料，請稍後再試'
          })
      }
      
    }
  },
  created () {
    this.fetchFeeds()
  }
}
</script>