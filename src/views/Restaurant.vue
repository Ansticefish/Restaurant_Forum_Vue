<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"  />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    /> 
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />

  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default ({
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [], 
    }
  },
  computed: {
    ...mapState( [ 'currentUser' ])
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        const { data , statusText } = await restaurantsAPI.getRestaurant({ restaurantId })

        if (statusText !== 'OK'){
          throw new Error(statusText)
        }

        const {restaurant, isFavorited, isLiked } = data
        const { id, name, Category, image, opening_hours: openingHours, tel, address, description, Comments} = restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        }

        this.restaurantComments = Comments
    
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得此餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment (commentId) {
      console.log('afterDeleteComment', commentId)

      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
      console.log('father', payload)
      
      const { commentId: id, restaurantId: RestaurantId, text } = payload
      this.restaurantComments.push( {
        id,
        RestaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate ( to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  }
})
</script>
