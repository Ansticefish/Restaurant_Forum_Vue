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
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

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
    async fetchUsers () {
      try {
        const { data } = await usersAPI.getUsersTop()
        this.users = data.users
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  },
  created () {
    this.fetchUsers()
  }  
}
</script>