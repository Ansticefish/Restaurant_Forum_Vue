<template>
  <div class="container py-5">
    <NavTabs />
    <!-- NavPills -->
    <RestaurantsNavPills :categories="categories" /> 

    <!-- RestaurantCards -->
    <div class="container">
      <div class="row">
        <RestaurantsCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
      </div>
    </div>
    
    <!-- Pagination -->
    <RestaurantsPagination v-if="totalPage.length > 1" :category-Id="categoryId" :current-page="currentPage" :total-page="totalPage" :previous-page="previousPage" :next-page="nextPage" />

  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantsCard from '../components/RestaurantsCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Kennith Streich",
            "tel": "616-536-4282 x00775",
            "address": "8236 Rosenbaum Lakes",
            "opening_hours": "08:00",
            "description": "Voluptas placeat minima et quis id saepe mollitia ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.11810022884907",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Raina Mertz",
            "tel": "621-314-6497",
            "address": "797 Schneider Prairie",
            "opening_hours": "08:00",
            "description": "Quo debitis quo sapiente praesentium.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.07092275280172",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Weston Weber",
            "tel": "(481) 557-9223 x98106",
            "address": "0522 Jaydon Locks",
            "opening_hours": "08:00",
            "description": "Voluptatibus adipisci et. Suscipit officia vitae s",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.37144260725744",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Jamarcus Langworth",
            "tel": "787-514-7960",
            "address": "9893 Armstrong Path",
            "opening_hours": "08:00",
            "description": "Molestias modi itaque nihil pariatur. Ipsum hic id",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.898753464607104",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Richard Bashirian",
            "tel": "1-276-051-0948 x8423",
            "address": "29295 Jettie Locks",
            "opening_hours": "08:00",
            "description": "Amet modi ducimus recusandae quis dicta quia velit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.31970222699944",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Ardella Leffler",
            "tel": "(295) 821-4954 x55569",
            "address": "045 Kunze Pike",
            "opening_hours": "08:00",
            "description": "voluptate consequuntur dolorum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.26222967676905",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Amya Nader",
            "tel": "(732) 700-7934",
            "address": "144 Hahn Junction",
            "opening_hours": "08:00",
            "description": "Quod a velit libero aperiam voluptas eligendi in. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.105066959451",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Mrs. Christa Lowe",
            "tel": "1-938-369-1942 x048",
            "address": "9723 Orn Gateway",
            "opening_hours": "08:00",
            "description": "reiciendis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.21008252342608",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Sabrina Blanda DDS",
            "tel": "079-601-7993 x40580",
            "address": "805 D'angelo Streets",
            "opening_hours": "08:00",
            "description": "voluptates quis saepe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.47954726782745",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Stephanie Funk",
            "tel": "479-669-4732",
            "address": "132 Mitchell Orchard",
            "opening_hours": "08:00",
            "description": "Ipsa molestias sint sit ut eos ut natus. Ut nulla ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.858254834915506",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}


export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantsCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  methods: {
    fetchData () {
      const {restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created () {
    this.fetchData()
  }
}
</script>