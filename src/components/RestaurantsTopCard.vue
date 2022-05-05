<template>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{ 
            name: 'restaurant',
            params: {id: restaurant.id}
            }">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{favoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              :to="{
                name: 'restaurant',
                params: {id: restaurant.id}
              }"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              type="button"
              v-if="isFavorited"
              @click="removeFavorite(restaurant.id)"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              type="button"
              v-else
              @click="addFavorite(restaurant.id)"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers' 

export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      isFavorited: this.restaurant.isFavorited,
      favoriteCount: this.restaurant.FavoriteCount
    }
  },
  methods: {
    // temporary methods
    async addFavorite (restaurantId) {
      try {
        const { data } = await restaurantsAPI.addFavorite(restaurantId)
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.isFavorited = true
        this.favoriteCount += 1

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async removeFavorite (restaurantId) {
      try {
        const { data } = await restaurantsAPI.removeFavorite(restaurantId)
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.isFavorited = false
        this.favoriteCount -= 1

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    }
  },
  mixins: [emptyImageFilter]
}
</script>