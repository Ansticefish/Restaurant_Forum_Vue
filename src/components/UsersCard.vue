<template>
   <div class="col-3">
        <router-link :to="{ name: 'user', params: {id: user.id}}">
          <img
            :src="user.image | emptyImage"
            width="140px"
            height="140px"
          > 
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            v-if="user.isFollowed"
            @click="removeFollow(user.id)"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            type="button"
            v-else
            @click="addFollow(user.id)"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
</template>


<script>
import { emptyImageFilter } from '../utils/mixins'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      user: this.initialUser
    }
  },
  methods: {
    async addFollow (userId) {
      try {
        const { data } = await usersAPI.followUser(userId)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = {
          ...this.user,
          isFollowed: true,
          FollowerCount: this.user.FollowerCount + 1
        }

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤該帳號，請稍後再試'
        })
      }
    },
    async removeFollow (userId) {
      try {
        const { data } = await usersAPI.unfollowUser(userId)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = {
          ...this.user,
          isFollowed: false,
          FollowerCount: this.user.FollowerCount - 1
        }

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤該帳號，請稍後再試'
        })
      }
    },
  },
   mixins: [emptyImageFilter]
}
</script>

<style scoped>
  img {
    object-fit: cover;
  }
</style>