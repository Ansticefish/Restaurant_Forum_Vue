<template>
  <div class="container py-5">
    <NavTabs />
    <!-- NavPills -->
    <RestaurantsNavPills :categories="categories" />

    <Spinner v-if="isLoading"/> 
    <template v-else>
      <!-- RestaurantCards -->
      <div class="container">
        <div class="row">
          <RestaurantsCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
        </div>
      </div>
      
      <!-- Pagination -->
      <RestaurantsPagination v-if="totalPage.length > 1" :category-id="categoryId" :current-page="currentPage" :total-page="totalPage" :previous-page="previousPage" :next-page="nextPage" />
    </template>
  </div>
    
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantsCard from '../components/RestaurantsCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'



export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantsCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner,
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true
    }
  },
  methods: {
    async fetchData ({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getRestaurants({ page: queryPage, categoryId: queryCategoryId })

        const {restaurants, categories, categoryId, page, totalPage, prev, next} = response.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
          console.log('error', error)
          Toast.fire({
              icon: 'error',
              title: '無法取得餐廳資料，請稍後再試'
          })
      }   

    },
  },
  created () {
    const {page = '', categoryId = ''} = this.$route.query
    this.fetchData({ queryPage: page, queryCategoryId: categoryId})
  },
  beforeRouteUpdate (to, from, next) {
    console.log('from', from)
    console.log('to', to)
    const {page = '', categoryId = ''} = to.query
    this.fetchData({ queryPage: page, queryCategoryId: categoryId})
    next()
  }
}
</script>