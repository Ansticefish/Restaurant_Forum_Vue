<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    :src="restaurant.image | emptyImage "
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{restaurant.description}} </p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{name: 'dashboard', params: {id: restaurant.id}}"
      >Dashboard</router-link>

      <button
        type="button"
        v-if="restaurant.isFavorited"
        @click="removeFavorite(restaurant.id)"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        type="button"
        v-else
        @click="addFavorite(restaurant.id)"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        type="button"
        v-if="restaurant.isLiked"
        @click="removeLiked(restaurant.id)"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        type="button"
        v-else
        @click="addLiked(restaurant.id)"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins' 
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'RestaurantDetail',
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  mixins: [ emptyImageFilter ],
  methods: {
    async addFavorite ( restaurantId ) {
      try {
        const { data, statusText } = await restaurantsAPI.addFavorite( restaurantId )

        if( data.status !== 'success' || statusText !== 'OK') {
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
    async removeFavorite ( restaurantId ) {
      try {
        const { data, statusText } = await restaurantsAPI.removeFavorite( restaurantId )

        if( data.status !== 'success' || statusText !== 'OK') {
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
    async addLiked ( restaurantId ) {
      try {
        const  { data, statusText } = await restaurantsAPI.addLike( restaurantId )
        
        if( data.status !== 'success' || statusText !== 'OK') {
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
          title: '無法按讚，請稍後再試'
        })
      }  
    },
    async removeLiked ( restaurantId ) {
      try {
        const  { data, statusText } = await restaurantsAPI.removeLike( restaurantId )
        
        if( data.status !== 'success' || statusText !== 'OK') {
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
    }
  },
  watch: {
    initialRestaurant ( newValue ) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  }
}
</script>


<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>