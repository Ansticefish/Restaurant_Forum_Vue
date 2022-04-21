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

const dummyData = {
    "restaurants": [
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
            "FavoritedUsers": [
                {
                    "id": 4,
                    "name": "林曉榆",
                    "email": "ansticefish0106@gmail.com",
                    "password": "$2a$10$QLtptRSF2GUfyE5DbGjOeu9fzNRjNrbOtJ6.pVuTnCBBOb/DtodtK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-18T14:10:29.000Z",
                    "updatedAt": "2022-04-18T14:10:29.000Z",
                    "Favorite": {
                        "UserId": 4,
                        "RestaurantId": 2,
                        "createdAt": "2022-04-18T14:10:45.000Z",
                        "updatedAt": "2022-04-18T14:10:45.000Z"
                    }
                }
            ],
            "isFavorited": false,
            "FavoriteCount": 1
        },
        {
            "id": 50,
            "name": "Elmore Wisoky",
            "tel": "659-046-9134",
            "address": "22762 Skyla Shore",
            "opening_hours": "08:00",
            "description": "Vel et facilis ipsum corporis praesentium voluptat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.336532403722575",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Paolo Rolfson",
            "tel": "1-977-242-3663 x64308",
            "address": "7259 Schowalter Lights",
            "opening_hours": "08:00",
            "description": "Voluptatem ipsum praesentium ea veritatis sit ipsu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.504060987934793",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Saige Metz V",
            "tel": "309.483.7199 x506",
            "address": "13431 Chris Springs",
            "opening_hours": "08:00",
            "description": "mollitia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.08689721239943",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Evie Lubowitz",
            "tel": "1-102-958-0312 x7116",
            "address": "63863 Harvey Roads",
            "opening_hours": "08:00",
            "description": "Dolor pariatur optio.\nAb excepturi odio illo labor",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.82565315304338",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Abigayle Hand",
            "tel": "374.650.3664 x66423",
            "address": "11349 Bashirian Branch",
            "opening_hours": "08:00",
            "description": "Dolorem recusandae qui quibusdam. Sequi quos solut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.76031471080609",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Lucie Fadel V",
            "tel": "1-717-347-6386 x15149",
            "address": "515 Moore Tunnel",
            "opening_hours": "08:00",
            "description": "Unde voluptatibus commodi nemo ratione est volupta",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.8094845989795827",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Lela Dickinson",
            "tel": "690.431.2686 x69973",
            "address": "32266 Botsford Roads",
            "opening_hours": "08:00",
            "description": "Illum dolores vel quaerat consequatur sint dicta s",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.29689034463303",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Sylvan Collier",
            "tel": "035.477.6659",
            "address": "624 Pacocha Corner",
            "opening_hours": "08:00",
            "description": "Magnam inventore nostrum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.08087728643187",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Kasandra Mills",
            "tel": "869.217.8395 x250",
            "address": "948 Ondricka Branch",
            "opening_hours": "08:00",
            "description": "omnis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.785891903430404",
            "viewCounts": 0,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

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
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    }
  },
  created () {
    this.fetchRestaurants()
  }
}
</script>