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
              v-if="user.id !== currentUser.id"
              @click.stop.prevent="handleClick({userId: user.id, adminData: user.isAdmin})"
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
import { mapState } from 'vuex'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'


export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data () {
    return {
      users : [],
    }
  },
  computed: {
    ...mapState( [ 'currentUser'] )
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers () {
      try {
        const { data, statusText } = await adminAPI.users.get()

        console.log(data)

        if ( statusText !== 'OK') {
          throw new Error(statusText)
        }
        
        this.users = data.users

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    async handleClick ({userId, adminData}) {
      try {
        const isAdmin = JSON.stringify(!adminData)
        const { data, statusText } = await adminAPI.users.update( { userId, isAdmin })

        if( data.status !== 'success' || statusText !== 'OK') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
            if( user.id === userId ) {
            return {
                ...user,
                isAdmin: !user.isAdmin
            }
            } else {
            return user
            }
        })

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '角色轉換失敗，請稍後再試'
        })
      }

    }
  }
}
</script>