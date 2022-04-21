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

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Kennith Streich",
            "tel": "616-536-4282 x00775",
            "address": "8236 Rosenbaum Lakes",
            "opening_hours": "08:00",
            "description": "Voluptas placeat minima et quis id saepe mollitia voluptas.\nEst voluptate praesentium magnam aperiam molestiae.",
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
            }
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
            }
        },
        {
            "id": 3,
            "name": "Weston Weber",
            "tel": "(481) 557-9223 x98106",
            "address": "0522 Jaydon Locks",
            "opening_hours": "08:00",
            "description": "Voluptatibus adipisci et. Suscipit officia vitae sint quo et et. Tempore et quisquam id qui explicabo dolores exercitationem reiciendis. Saepe quos accusamus sit et numquam illo.",
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
            }
        },
        {
            "id": 4,
            "name": "Jamarcus Langworth",
            "tel": "787-514-7960",
            "address": "9893 Armstrong Path",
            "opening_hours": "08:00",
            "description": "Molestias modi itaque nihil pariatur. Ipsum hic id numquam sequi dolor. Aliquid dolores est voluptate.",
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
            }
        },
        {
            "id": 5,
            "name": "Richard Bashirian",
            "tel": "1-276-051-0948 x8423",
            "address": "29295 Jettie Locks",
            "opening_hours": "08:00",
            "description": "Amet modi ducimus recusandae quis dicta quia velit voluptas dolores. Commodi eaque repudiandae incidunt quidem laboriosam corporis. Laboriosam ea odio optio omnis soluta beatae praesentium expedita. Ea cum ex pariatur modi.",
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
            }
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
            }
        },
        {
            "id": 7,
            "name": "Amya Nader",
            "tel": "(732) 700-7934",
            "address": "144 Hahn Junction",
            "opening_hours": "08:00",
            "description": "Quod a velit libero aperiam voluptas eligendi in. Et sapiente suscipit voluptatibus illo quos occaecati. Ut consectetur tenetur ipsa soluta enim. Cum mollitia explicabo minus assumenda tempore. Alias eos atque. Earum vel necessitatibus doloremque nemo ut repellendus impedit.\n \rIpsum adipisci eius rerum quis. Recusandae libero doloremque ex iusto architecto. Est natus enim sapiente. Similique ad voluptatem.\n \rIllo doloribus accusamus error nemo excepturi ut. Odit dolore quis eius rerum aut praesentium totam sed. Ea repudiandae corrupti qui ea et blanditiis est.",
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
            }
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
            }
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
            }
        },
        {
            "id": 10,
            "name": "Stephanie Funk",
            "tel": "479-669-4732",
            "address": "132 Mitchell Orchard",
            "opening_hours": "08:00",
            "description": "Ipsa molestias sint sit ut eos ut natus. Ut nulla aut voluptas magni asperiores cum laudantium aut. Itaque natus rerum non tenetur ut.\n \rTempora ullam sequi nihil laborum dicta illum sit voluptas. Voluptatem esse nemo qui totam et ut ut ut maiores. Ipsam autem exercitationem vel ut eligendi provident voluptate. Nisi et enim. Qui molestias et consectetur exercitationem nihil asperiores. Rem qui at.\n \rTempora quod officiis nihil deleniti qui sed qui aut. At ex distinctio et doloribus a rerum. Minima magnam odit quisquam enim ad delectus. Laborum omnis molestiae. Dolor ut sed dolorum ratione.",
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
            }
        }
    ],
    "comments": [
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
            },
            "Restaurant": {
                "id": 1,
                "name": "Kennith Streich",
                "tel": "616-536-4282 x00775",
                "address": "8236 Rosenbaum Lakes",
                "opening_hours": "08:00",
                "description": "Voluptas placeat minima et quis id saepe mollitia voluptas.\nEst voluptate praesentium magnam aperiam molestiae.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.11810022884907",
                "viewCounts": 0,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 2,
            "text": "Voluptatem vel facere.",
            "UserId": 1,
            "RestaurantId": 2,
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
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 3,
            "text": "Iure iste necessitatibus natus laudantium sed odit ratione omnis.",
            "UserId": 2,
            "RestaurantId": 3,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$aMTa.s09pEyzSTvEtnoVgeq5ZDPkYY.16KR2hh7wugjCGSQRDZwwW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "Restaurant": {
                "id": 3,
                "name": "Weston Weber",
                "tel": "(481) 557-9223 x98106",
                "address": "0522 Jaydon Locks",
                "opening_hours": "08:00",
                "description": "Voluptatibus adipisci et. Suscipit officia vitae sint quo et et. Tempore et quisquam id qui explicabo dolores exercitationem reiciendis. Saepe quos accusamus sit et numquam illo.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.37144260725744",
                "viewCounts": 0,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 4,
            "text": "Non deserunt amet qui eaque fuga vel error sint voluptatibus.",
            "UserId": 2,
            "RestaurantId": 4,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$aMTa.s09pEyzSTvEtnoVgeq5ZDPkYY.16KR2hh7wugjCGSQRDZwwW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "Restaurant": {
                "id": 4,
                "name": "Jamarcus Langworth",
                "tel": "787-514-7960",
                "address": "9893 Armstrong Path",
                "opening_hours": "08:00",
                "description": "Molestias modi itaque nihil pariatur. Ipsum hic id numquam sequi dolor. Aliquid dolores est voluptate.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.898753464607104",
                "viewCounts": 0,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 5,
            "text": "Voluptates dolor rerum.",
            "UserId": 1,
            "RestaurantId": 5,
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
            },
            "Restaurant": {
                "id": 5,
                "name": "Richard Bashirian",
                "tel": "1-276-051-0948 x8423",
                "address": "29295 Jettie Locks",
                "opening_hours": "08:00",
                "description": "Amet modi ducimus recusandae quis dicta quia velit voluptas dolores. Commodi eaque repudiandae incidunt quidem laboriosam corporis. Laboriosam ea odio optio omnis soluta beatae praesentium expedita. Ea cum ex pariatur modi.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.31970222699944",
                "viewCounts": 0,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 6,
            "text": "Pariatur voluptatibus possimus porro sed pariatur.",
            "UserId": 1,
            "RestaurantId": 6,
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
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 7,
            "text": "Autem possimus et.",
            "UserId": 3,
            "RestaurantId": 7,
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
            },
            "Restaurant": {
                "id": 7,
                "name": "Amya Nader",
                "tel": "(732) 700-7934",
                "address": "144 Hahn Junction",
                "opening_hours": "08:00",
                "description": "Quod a velit libero aperiam voluptas eligendi in. Et sapiente suscipit voluptatibus illo quos occaecati. Ut consectetur tenetur ipsa soluta enim. Cum mollitia explicabo minus assumenda tempore. Alias eos atque. Earum vel necessitatibus doloremque nemo ut repellendus impedit.\n \rIpsum adipisci eius rerum quis. Recusandae libero doloremque ex iusto architecto. Est natus enim sapiente. Similique ad voluptatem.\n \rIllo doloribus accusamus error nemo excepturi ut. Odit dolore quis eius rerum aut praesentium totam sed. Ea repudiandae corrupti qui ea et blanditiis est.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.105066959451",
                "viewCounts": 0,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 8,
            "text": "Aut eum quisquam.",
            "UserId": 1,
            "RestaurantId": 8,
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
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 9,
            "text": "Magnam natus rerum totam saepe tenetur.",
            "UserId": 1,
            "RestaurantId": 9,
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
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 10,
            "text": "Temporibus ut dolore ullam ullam ut sit explicabo.",
            "UserId": 2,
            "RestaurantId": 10,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$aMTa.s09pEyzSTvEtnoVgeq5ZDPkYY.16KR2hh7wugjCGSQRDZwwW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z"
            },
            "Restaurant": {
                "id": 10,
                "name": "Stephanie Funk",
                "tel": "479-669-4732",
                "address": "132 Mitchell Orchard",
                "opening_hours": "08:00",
                "description": "Ipsa molestias sint sit ut eos ut natus. Ut nulla aut voluptas magni asperiores cum laudantium aut. Itaque natus rerum non tenetur ut.\n \rTempora ullam sequi nihil laborum dicta illum sit voluptas. Voluptatem esse nemo qui totam et ut ut ut maiores. Ipsam autem exercitationem vel ut eligendi provident voluptate. Nisi et enim. Qui molestias et consectetur exercitationem nihil asperiores. Rem qui at.\n \rTempora quod officiis nihil deleniti qui sed qui aut. At ex distinctio et doloribus a rerum. Minima magnam odit quisquam enim ad delectus. Laborum omnis molestiae. Dolor ut sed dolorum ratione.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.858254834915506",
                "viewCounts": 0,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "CategoryId": 1
            }
        }
    ]
}

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
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  },
  created () {
    this.fetchFeeds()
  }
}
</script>