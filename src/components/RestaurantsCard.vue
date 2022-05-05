<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link 
          :to="{
            name: 'restaurant', params: {id: restaurant.id}
          }">
            {{restaurant.name}}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category? restaurant.Category.name : '未分類'}}</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="removeFavorite(restaurant.id)"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          type="button"
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>
        <button
          type="button"
          v-if="restaurant.isLiked"
          @click.stop.prevent="removeLike(restaurant.id)"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          type="button"
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          class="btn btn-primary like mr-2"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'

export default ({
  name: 'RestaurantsCard',
  props: {
    initialRestaurant : {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant,
    }
  },
  methods: {
    // My way: 並沒有帶入所有資料
    // toggleFavorite (restaurant) {
    //   restaurant.isFavorited = !restaurant.isFavorited
    // },
    // toggleLike (restaurant) {
    //   restaurant.isLiked = !restaurant.isLiked
    // }
    async addFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite(restaurantId)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async removeFavorite (restaurantId) {
      try {
        const {data} = await usersAPI.deleteFavorite(restaurantId)

        if(data.status !== 'success'){
          throw new Error(data.message)
        }

        this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    },
    async addLike (restaurantId) {
      try {
        const { data } = await usersAPI.addLike(restaurantId)

        if( data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法幫餐廳按讚，請稍後再試'
        })
      }

    },
    async removeLike (restaurantId) {
      try {
        const { data } = await usersAPI.deleteLike(restaurantId)

        if( data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法移除讚，請稍後再試'
        })
      }
    },

  }
})
</script>
