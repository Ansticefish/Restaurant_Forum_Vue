<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin? 'Admin': 'User'}}</td>
          <td>
            <button
              type="button"
              v-if="user.id !== currentUser.profile.id"
              @click.stop.prevent="handleClick(user.id)"
              class="btn btn-link"
            >
              {{user.isAdmin? 'set as user': 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

const dummyUsers = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$Q/Rfi9vzgzniO5VNKjIlq.o5cHt9vVhi2d8YcQdzehNg3H63hok9.",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$aMTa.s09pEyzSTvEtnoVgeq5ZDPkYY.16KR2hh7wugjCGSQRDZwwW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$zMNK1ZwWZC9TeM2yFt0aVuaN1rEhPTBgnU97RtebKvklicH18xehy",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z"
        },
        {
            "id": 4,
            "name": "林曉榆",
            "email": "ansticefish0106@gmail.com",
            "password": "$2a$10$QLtptRSF2GUfyE5DbGjOeu9fzNRjNrbOtJ6.pVuTnCBBOb/DtodtK",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-04-18T14:10:29.000Z",
            "updatedAt": "2022-04-18T14:10:29.000Z"
        }
    ]
}

const dummyCurrentUser = {
    "profile": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$Q/Rfi9vzgzniO5VNKjIlq.o5cHt9vVhi2d8YcQdzehNg3H63hok9.",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-04-18T14:04:25.000Z",
        "updatedAt": "2022-04-18T14:04:25.000Z",
        "Comments": [
            {
                "id": 2,
                "text": "Voluptatem vel facere.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
                "id": 5,
                "text": "Voluptates dolor rerum.",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
                "id": 8,
                "text": "Aut eum quisquam.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
                "id": 13,
                "text": "Rerum ea qui alias nostrum ut enim illo labore.",
                "UserId": 1,
                "RestaurantId": 13,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 13,
                    "name": "Larry Effertz II",
                    "tel": "(867) 861-3099 x16749",
                    "address": "473 Corkery Harbors",
                    "opening_hours": "08:00",
                    "description": "natus fuga enim",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.0741114392703865",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 14,
                "text": "Dolor voluptate ducimus expedita architecto.",
                "UserId": 1,
                "RestaurantId": 14,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 14,
                    "name": "Maudie Friesen",
                    "tel": "1-891-162-3205 x9412",
                    "address": "3967 Mann Throughway",
                    "opening_hours": "08:00",
                    "description": "accusamus",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.08505270085399",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 15,
                "text": "Quidem similique minima omnis dolorum vel quod et aut.",
                "UserId": 1,
                "RestaurantId": 15,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 15,
                    "name": "Florine Rohan",
                    "tel": "924.222.1836 x18379",
                    "address": "34051 Antonio Island",
                    "opening_hours": "08:00",
                    "description": "A dignissimos qui placeat ut animi laboriosam asperiores laboriosam.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.64506024592797",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 23,
                "text": "Eius totam perferendis.",
                "UserId": 1,
                "RestaurantId": 23,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 23,
                    "name": "Jaylin Runolfsdottir",
                    "tel": "796-986-1158 x00745",
                    "address": "4090 Kunze Island",
                    "opening_hours": "08:00",
                    "description": "Animi beatae sint nihil earum ea placeat minima excepturi ab.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.362203907995447",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 24,
                "text": "Esse culpa non dignissimos consequatur consequuntur facere natus tenetur.",
                "UserId": 1,
                "RestaurantId": 24,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 24,
                    "name": "Tamia Mertz Sr.",
                    "tel": "499.075.5220 x04518",
                    "address": "6911 Harris Highway",
                    "opening_hours": "08:00",
                    "description": "Quam ipsam molestias odio laudantium autem amet soluta itaque. Quis minima odio in minus aut non praesentium. Amet possimus ipsam necessitatibus quis pariatur. Asperiores blanditiis sed.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.59868918869324",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 26,
                "text": "Numquam nesciunt est est nemo tempore.",
                "UserId": 1,
                "RestaurantId": 26,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 26,
                    "name": "Zechariah Raynor",
                    "tel": "988-507-0785",
                    "address": "79977 Jast Place",
                    "opening_hours": "08:00",
                    "description": "natus quibusdam dolorum",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.253545432079563",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 30,
                "text": "Veniam id maxime quis itaque.",
                "UserId": 1,
                "RestaurantId": 30,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 30,
                    "name": "Dr. Bethany Littel",
                    "tel": "436.303.1067 x377",
                    "address": "57282 Kilback Roads",
                    "opening_hours": "08:00",
                    "description": "Non similique nulla.\nIn autem sunt cum et.\nQuia libero sit.\nSed in veniam molestiae.\nRerum maiores sint.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.4170883637404152",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 33,
                "text": "Debitis tempora omnis accusantium et ullam beatae neque deleniti.",
                "UserId": 1,
                "RestaurantId": 33,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 33,
                    "name": "Olin Homenick",
                    "tel": "(842) 359-9012 x296",
                    "address": "078 Harris Highway",
                    "opening_hours": "08:00",
                    "description": "Illum ratione et aliquid id.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.582775089916028",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 38,
                "text": "Omnis quasi est.",
                "UserId": 1,
                "RestaurantId": 38,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 38,
                    "name": "Bo Powlowski",
                    "tel": "1-403-021-3082 x5531",
                    "address": "7074 Altenwerth Junctions",
                    "opening_hours": "08:00",
                    "description": "Ut impedit et et veritatis hic qui ducimus libero ut. Id odit numquam molestiae. Dolores ut ut. Voluptatem voluptates dolorem qui voluptatem maiores. Asperiores et sunt minus vitae in dicta.\n \rOfficiis iusto aperiam asperiores ut possimus aliquid quo molestiae. Enim nemo id alias ut delectus sit officia vero voluptatem. Ut qui natus error autem ut eaque. Autem ea totam similique id non. Et hic omnis rerum magnam laborum quod perferendis saepe iusto.\n \rOmnis voluptas reiciendis quam quisquam minima vero ut. Explicabo amet aliquid voluptatum aut. Tempora laudantium consequatur pariatur molestiae quod optio ipsa ex sit. Magni dolor quia consequatur. Ad iste cum temporibus possimus mollitia perferendis reiciendis in. Voluptatibus quis fuga nam quis et perspiciatis molestias sed.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.72282652430414",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 41,
                "text": "Est assumenda dolores quis quasi.",
                "UserId": 1,
                "RestaurantId": 41,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 41,
                    "name": "Joaquin Kris III",
                    "tel": "1-253-810-4073",
                    "address": "14012 Boyle Valley",
                    "opening_hours": "08:00",
                    "description": "Consequuntur ut qui quaerat pariatur. Id aut ut. Quia sunt debitis. Architecto quia accusantium. Corrupti similique quia alias. Ea nesciunt et enim.\n \rProvident expedita nihil autem qui qui aperiam ut in soluta. Id dolore tempora itaque aut excepturi aliquam. In quia quas voluptatem.\n \rEt molestiae quia cum corrupti ad aut modi. Nesciunt facere vel et est quis sint. Deleniti qui dolor qui sint quo dolor explicabo nisi. Libero tenetur ex aut temporibus laboriosam magni nihil tenetur rerum.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.07273485710387",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 42,
                "text": "Doloribus expedita libero vitae earum nemo iste qui optio.",
                "UserId": 1,
                "RestaurantId": 42,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 44,
                "text": "Asperiores enim nemo voluptas ex et.",
                "UserId": 1,
                "RestaurantId": 44,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 44,
                    "name": "Lela Dickinson",
                    "tel": "690.431.2686 x69973",
                    "address": "32266 Botsford Roads",
                    "opening_hours": "08:00",
                    "description": "Illum dolores vel quaerat consequatur sint dicta suscipit molestiae. Ut at dolor in sunt laborum qui temporibus cum adipisci. Ea blanditiis aliquid. Iusto ad et. Consequuntur ut dignissimos et accusantium minus sapiente sed exercitationem. Maxime ipsa consequatur aut.\n \rSunt facilis est harum adipisci. A est officiis assumenda quam. Quis vel est voluptatem. Aut dolor illo et dolorem et.\n \rNon vel dolor dicta praesentium delectus qui dolor placeat. Architecto voluptatum neque aspernatur. Et corrupti consequatur sunt ullam blanditiis tempore eius excepturi id.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.29689034463303",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 47,
                "text": "Nihil officiis corrupti perferendis aut.",
                "UserId": 1,
                "RestaurantId": 47,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 47,
                    "name": "Evie Lubowitz",
                    "tel": "1-102-958-0312 x7116",
                    "address": "63863 Harvey Roads",
                    "opening_hours": "08:00",
                    "description": "Dolor pariatur optio.\nAb excepturi odio illo labore amet sint ut.\nUt molestiae quis accusamus nesciunt aspernatur.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.82565315304338",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 50,
                "text": "Earum et ut voluptate voluptatem nesciunt enim vitae minus.",
                "UserId": 1,
                "RestaurantId": 50,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 50,
                    "name": "Elmore Wisoky",
                    "tel": "659-046-9134",
                    "address": "22762 Skyla Shore",
                    "opening_hours": "08:00",
                    "description": "Vel et facilis ipsum corporis praesentium voluptatum rerum aut. Reiciendis ipsam eius fuga expedita debitis. Quis aspernatur reiciendis doloribus maxime eos. Sit veniam porro molestias expedita. Voluptatem quasi tempore id vel voluptatem molestias eveniet maiores. Eos ut non aut perferendis.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.336532403722575",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 51,
                "text": "Excepturi quas ad id non exercitationem voluptatibus.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 56,
                "text": "Iusto eum eum molestias culpa tempora aut sint quasi est.",
                "UserId": 1,
                "RestaurantId": 6,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
                "id": 58,
                "text": "Numquam totam voluptatem.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
                "id": 63,
                "text": "Ducimus rerum voluptatem ea doloribus eaque.",
                "UserId": 1,
                "RestaurantId": 13,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 13,
                    "name": "Larry Effertz II",
                    "tel": "(867) 861-3099 x16749",
                    "address": "473 Corkery Harbors",
                    "opening_hours": "08:00",
                    "description": "natus fuga enim",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.0741114392703865",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 69,
                "text": "Cum voluptatem nihil minus et voluptatibus et.",
                "UserId": 1,
                "RestaurantId": 19,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 19,
                    "name": "Micheal Mohr I",
                    "tel": "229.383.2077 x738",
                    "address": "48901 Damien Parkways",
                    "opening_hours": "08:00",
                    "description": "Eum laborum et sunt. Quis assumenda atque ut similique facilis voluptas dolorem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.75196164485837",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 84,
                "text": "Esse eligendi fugiat corporis pariatur est.",
                "UserId": 1,
                "RestaurantId": 34,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 34,
                    "name": "Camilla Price",
                    "tel": "156.661.0886 x5854",
                    "address": "4700 Stewart Ways",
                    "opening_hours": "08:00",
                    "description": "Qui minus voluptatum rerum. Excepturi cupiditate cumque reiciendis. Aut delectus similique non aut.\n \rQuis ea alias iusto error. Consequatur explicabo voluptas voluptatem et nostrum provident tenetur adipisci. Perferendis ab consequatur.\n \rPlaceat ut temporibus perspiciatis asperiores aut rerum laudantium. Quae eius ea aut. Nulla ea beatae. Consequuntur hic qui id ex quidem velit odio dolore eos. Harum vero quam numquam cupiditate autem ut dolor. Ab rerum officia qui.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.33780820898345",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 85,
                "text": "Ipsum ut et et iste incidunt.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 35,
                    "name": "Helmer Koss",
                    "tel": "801.662.7928 x593",
                    "address": "938 Schneider Lights",
                    "opening_hours": "08:00",
                    "description": "Ut vel aliquid non incidunt.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.77689120862294",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 86,
                "text": "Pariatur id omnis atque vitae dolore at qui ab quia.",
                "UserId": 1,
                "RestaurantId": 36,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 36,
                    "name": "Michaela Beatty",
                    "tel": "341.072.3465",
                    "address": "50385 Lewis Oval",
                    "opening_hours": "08:00",
                    "description": "Fuga quisquam commodi qui totam. Esse unde ea delectus ratione dicta inventore repellendus neque. Vel commodi vel nam molestiae veritatis sed porro quibusdam.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.580198064119",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 91,
                "text": "Rem voluptatem ipsum totam id tempore.",
                "UserId": 1,
                "RestaurantId": 41,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 41,
                    "name": "Joaquin Kris III",
                    "tel": "1-253-810-4073",
                    "address": "14012 Boyle Valley",
                    "opening_hours": "08:00",
                    "description": "Consequuntur ut qui quaerat pariatur. Id aut ut. Quia sunt debitis. Architecto quia accusantium. Corrupti similique quia alias. Ea nesciunt et enim.\n \rProvident expedita nihil autem qui qui aperiam ut in soluta. Id dolore tempora itaque aut excepturi aliquam. In quia quas voluptatem.\n \rEt molestiae quia cum corrupti ad aut modi. Nesciunt facere vel et est quis sint. Deleniti qui dolor qui sint quo dolor explicabo nisi. Libero tenetur ex aut temporibus laboriosam magni nihil tenetur rerum.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.07273485710387",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 93,
                "text": "Fugiat sint nesciunt et quos ullam.",
                "UserId": 1,
                "RestaurantId": 43,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 97,
                "text": "Fugit commodi nesciunt sint aut magni.",
                "UserId": 1,
                "RestaurantId": 47,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 47,
                    "name": "Evie Lubowitz",
                    "tel": "1-102-958-0312 x7116",
                    "address": "63863 Harvey Roads",
                    "opening_hours": "08:00",
                    "description": "Dolor pariatur optio.\nAb excepturi odio illo labore amet sint ut.\nUt molestiae quis accusamus nesciunt aspernatur.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.82565315304338",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 99,
                "text": "Expedita perferendis sit corrupti aut at qui.",
                "UserId": 1,
                "RestaurantId": 49,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 49,
                    "name": "Paolo Rolfson",
                    "tel": "1-977-242-3663 x64308",
                    "address": "7259 Schowalter Lights",
                    "opening_hours": "08:00",
                    "description": "Voluptatem ipsum praesentium ea veritatis sit ipsum. Sed voluptate nulla. Enim ex animi. Ut et est qui.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.504060987934793",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 100,
                "text": "Nulla sed omnis.",
                "UserId": 1,
                "RestaurantId": 50,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 50,
                    "name": "Elmore Wisoky",
                    "tel": "659-046-9134",
                    "address": "22762 Skyla Shore",
                    "opening_hours": "08:00",
                    "description": "Vel et facilis ipsum corporis praesentium voluptatum rerum aut. Reiciendis ipsam eius fuga expedita debitis. Quis aspernatur reiciendis doloribus maxime eos. Sit veniam porro molestias expedita. Voluptatem quasi tempore id vel voluptatem molestias eveniet maiores. Eos ut non aut perferendis.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.336532403722575",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 102,
                "text": "Corporis dicta sequi.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
                "id": 110,
                "text": "Illo corporis aut ex excepturi quo.",
                "UserId": 1,
                "RestaurantId": 10,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
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
            },
            {
                "id": 121,
                "text": "Molestias nihil unde quasi et ut.",
                "UserId": 1,
                "RestaurantId": 21,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 21,
                    "name": "Tina Nolan",
                    "tel": "(229) 972-7303 x660",
                    "address": "6616 Lehner Creek",
                    "opening_hours": "08:00",
                    "description": "Exercitationem quis quisquam quos.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.60444618346789",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 123,
                "text": "Maxime aut et animi quia quo labore totam provident.",
                "UserId": 1,
                "RestaurantId": 23,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 23,
                    "name": "Jaylin Runolfsdottir",
                    "tel": "796-986-1158 x00745",
                    "address": "4090 Kunze Island",
                    "opening_hours": "08:00",
                    "description": "Animi beatae sint nihil earum ea placeat minima excepturi ab.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.362203907995447",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 126,
                "text": "Dolores odio enim harum.",
                "UserId": 1,
                "RestaurantId": 26,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 26,
                    "name": "Zechariah Raynor",
                    "tel": "988-507-0785",
                    "address": "79977 Jast Place",
                    "opening_hours": "08:00",
                    "description": "natus quibusdam dolorum",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.253545432079563",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 127,
                "text": "Laudantium ipsa minima.",
                "UserId": 1,
                "RestaurantId": 27,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 27,
                    "name": "Dayana Dickinson",
                    "tel": "1-913-558-6247 x84945",
                    "address": "11285 Von Points",
                    "opening_hours": "08:00",
                    "description": "Exercitationem numquam sed ipsam qui quo.\nMollitia qui magni dolores sint non necessitatibus ullam impedit.\nAspernatur nostrum at sit dolores est dolore optio ea.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.07942329358755",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 136,
                "text": "Eveniet recusandae id veritatis molestias et et.",
                "UserId": 1,
                "RestaurantId": 36,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 36,
                    "name": "Michaela Beatty",
                    "tel": "341.072.3465",
                    "address": "50385 Lewis Oval",
                    "opening_hours": "08:00",
                    "description": "Fuga quisquam commodi qui totam. Esse unde ea delectus ratione dicta inventore repellendus neque. Vel commodi vel nam molestiae veritatis sed porro quibusdam.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.580198064119",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 137,
                "text": "Est ut quis at deserunt natus temporibus.",
                "UserId": 1,
                "RestaurantId": 37,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 37,
                    "name": "Reginald Rice",
                    "tel": "696-056-4417 x6730",
                    "address": "359 Beau Forks",
                    "opening_hours": "08:00",
                    "description": "Nam quod nulla molestiae nam exercitationem non doloribus eligendi qui.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.582594331630332",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 141,
                "text": "Asperiores non doloribus sint.",
                "UserId": 1,
                "RestaurantId": 41,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 41,
                    "name": "Joaquin Kris III",
                    "tel": "1-253-810-4073",
                    "address": "14012 Boyle Valley",
                    "opening_hours": "08:00",
                    "description": "Consequuntur ut qui quaerat pariatur. Id aut ut. Quia sunt debitis. Architecto quia accusantium. Corrupti similique quia alias. Ea nesciunt et enim.\n \rProvident expedita nihil autem qui qui aperiam ut in soluta. Id dolore tempora itaque aut excepturi aliquam. In quia quas voluptatem.\n \rEt molestiae quia cum corrupti ad aut modi. Nesciunt facere vel et est quis sint. Deleniti qui dolor qui sint quo dolor explicabo nisi. Libero tenetur ex aut temporibus laboriosam magni nihil tenetur rerum.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.07273485710387",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 146,
                "text": "Voluptas et quasi non.",
                "UserId": 1,
                "RestaurantId": 46,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 46,
                    "name": "Abigayle Hand",
                    "tel": "374.650.3664 x66423",
                    "address": "11349 Bashirian Branch",
                    "opening_hours": "08:00",
                    "description": "Dolorem recusandae qui quibusdam. Sequi quos soluta voluptas officia ex. Consequatur corrupti dolores. Odio optio fugit eius molestiae eum accusantium repellendus dolores. Officia esse ea veniam sequi in est deserunt repudiandae iste.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.76031471080609",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 148,
                "text": "Ut et mollitia.",
                "UserId": 1,
                "RestaurantId": 48,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 149,
                "text": "Placeat et doloremque.",
                "UserId": 1,
                "RestaurantId": 49,
                "createdAt": "2022-04-18T14:04:25.000Z",
                "updatedAt": "2022-04-18T14:04:25.000Z",
                "Restaurant": {
                    "id": 49,
                    "name": "Paolo Rolfson",
                    "tel": "1-977-242-3663 x64308",
                    "address": "7259 Schowalter Lights",
                    "opening_hours": "08:00",
                    "description": "Voluptatem ipsum praesentium ea veritatis sit ipsum. Sed voluptate nulla. Enim ex animi. Ut et est qui.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.504060987934793",
                    "viewCounts": 0,
                    "createdAt": "2022-04-18T14:04:25.000Z",
                    "updatedAt": "2022-04-18T14:04:25.000Z",
                    "CategoryId": 2
                }
            }
        ],
        "FavoritedRestaurants": [],
        "Followers": [],
        "Followings": []
    },
    "isFollowed": false
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data () {
    return {
      users : [],
      currentUser: {}
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      this.users = dummyUsers.users
      this.currentUser = dummyCurrentUser
    },
    handleClick (userId) {
      this.users = this.users.map(user => {
        if(user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        } else {
          return user
        }
      })
    }
  }
}
</script>