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
        "updatedAt": "2022-04-20T13:37:22.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
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
    }
}

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
    fetchData (restaurantId) {
      console.log(restaurantId)

      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category.name,
        commentsLength: Comments.length,
        viewCounts,
      }
    }
  },
  created () {
    this.fetchData(dummyData.restaurant.id)
  }
}
</script>