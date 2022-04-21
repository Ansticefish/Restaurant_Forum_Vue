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

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Kennith Streich",
        "tel": "616-536-4282 x00775",
        "address": "8236 Rosenbaum Lakes",
        "opening_hours": "08:00",
        "description": "Voluptas placeat minima et quis id saepe mollitia voluptas.\nEst voluptate praesentium magnam aperiam molestiae.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.11810022884907",
        "viewCounts": 1,
        "createdAt": "2022-04-18T14:04:25.000Z",
        "updatedAt": "2022-04-20T13:37:22.043Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 1,
                "text": "Ea vel sint est est esse quia.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$zMNK1ZwWZC9TeM2yFt0aVuaN1rEhPTBgnU97RtebKvklicH18xehy",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z"
                }
            },
            {
                "id": 51,
                "text": "Excepturi quas ad id non exercitationem voluptatibus.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$Q/Rfi9vzgzniO5VNKjIlq.o5cHt9vVhi2d8YcQdzehNg3H63hok9.",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z"
                }
            },
            {
                "id": 101,
                "text": "Eaque repudiandae porro voluptates voluptas qui atque.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$zMNK1ZwWZC9TeM2yFt0aVuaN1rEhPTBgnU97RtebKvklicH18xehy",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

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
      currentUser: {},
    }
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      // destructuring assignment
      const {restaurant, isFavorited, isLiked } = dummyData
      const { id, name, Category, image, opening_hours: openingHours, tel, address, description, Comments} = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category.name,
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      }

      this.restaurantComments = Comments
      this.currentUser = dummyUser.currentUser
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
  }
})
</script>
