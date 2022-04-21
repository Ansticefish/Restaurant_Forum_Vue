<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <!-- User Cards -->
      <div class="row text-center mt-5">
        <UsersCard v-for="user in users" :key="user.id" :initial-user="user"/> 
      </div>
    </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import UsersCard from '../components/UsersCard.vue'

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$Q/Rfi9vzgzniO5VNKjIlq.o5cHt9vVhi2d8YcQdzehNg3H63hok9.",
            "isAdmin": true,
            "image": 'https://bn1305files.storage.live.com/y4m-a2ok7LDvdq-zEvZBRgUEBNpmE52xMjLAZHldW6oR1kFhfanuLR734usKNRTSgoZVsgtOrwBhuIRWfLnutC7f9g_7QMaR2X5su4tToH9NtJaAvLCj-v-10b8Uc7sTG4qB9XewTKVXOhxFNw0JGoBcg8uQiT5c1MZG2OonxFRCVrEhZdN4QSBi0In_6zHBDzr?width=5184&height=3456&cropmode=none',
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$aMTa.s09pEyzSTvEtnoVgeq5ZDPkYY.16KR2hh7wugjCGSQRDZwwW",
            "isAdmin": false,
            "image": 'https://bn1305files.storage.live.com/y4m-JPnzQlk8rQXlvqh-yfrhHZootBVmDkcq1TwO8OdcHNjKcfPLWDpGW2aL19jG9xS8z0QM4q0c3J9yk8CSLb-e-LpKZJSiv4fgJ3ILjZOtAaMSQNGtdW-G_WNt6ig8GXtYaL0o-fcvE4LScTsGL_hpwYnXznC2RDUT3IPDT8ISSzK5IyeiGAFHQuh--nMMFN_?width=5184&height=3456&cropmode=none',
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "Followers": ['titi'],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$zMNK1ZwWZC9TeM2yFt0aVuaN1rEhPTBgnU97RtebKvklicH18xehy",
            "isAdmin": false,
            "image": 'https://bn1305files.storage.live.com/y4mvhsF87ahNnSaBeZ19VmJghT8mmiOS6Elf8HqheAor-1Z1UK2XzNqIeIX7RrSdG-iIhSnlV8cW2w-2aDeV5aH_5bMm0dSwGk_SPZyQ1HhO0QFFjqIrufzY_TbOE3_z4n7kHjQXLuHcVaOp4pBY1oBLn6UkMmMNk1Au9VmGtn_39sOKwSCegKJjOIF19v-TpHu?width=5184&height=3456&cropmode=none',
            "createdAt": "2022-04-18T14:04:25.000Z",
            "updatedAt": "2022-04-18T14:04:25.000Z",
            "Followers": ['mandy', 'judy'],
            "FollowerCount": 2,
            "isFollowed": true
        },
        {
            "id": 4,
            "name": "Fish",
            "email": "ansticefish0106@gmail.com",
            "password": "$2a$10$QLtptRSF2GUfyE5DbGjOeu9fzNRjNrbOtJ6.pVuTnCBBOb/DtodtK",
            "isAdmin": false,
            "image": 'https://bn1305files.storage.live.com/y4m1QQGkU2WTm0c51gLo1W5q6ORxrznuVRJF9gJ7WbopV7_PLbSh3pGwn0Yr6R5H8QLp_R5hBiYtckJ6BHW6pCwMH9tg1pH5bYF6XDx3MoFVptbT3queEp-EuuXGrwVX8IrkxN4ECP3UF69uZqmUnUJ44FR2yTCQtdb_WLZsW5dTDydo49obabcFCo9Aa0YCV14?width=5184&height=3456&cropmode=none',
            "createdAt": "2022-04-18T14:10:29.000Z",
            "updatedAt": "2022-04-18T14:10:29.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}


export default {
  name: 'UsersTop',
  components: {
    NavTabs,
    UsersCard,
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers () {
      this.users = dummyData.users
    }
  },
  created () {
    this.fetchUsers()
  }
}
</script>