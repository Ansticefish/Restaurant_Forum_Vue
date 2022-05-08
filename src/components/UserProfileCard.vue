<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img :src="user.image | emptyImage" width="300px" height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">
            {{user.email}}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{user.commentLength}}</strong> 已評論餐廳</li>
            <li><strong>{{user.favoritedLength}}</strong> 收藏的餐廳</li>
            <li><strong>{{user.followingLength}}</strong> followings (追蹤者)</li>
            <li><strong>{{followers}}</strong> followers (追隨者)</li>
          </ul>
          <p>
              <router-link :to="{name: 'user-edit', params: {id: user.id}}" v-if="currentUser.id === user.id">
                <button type="submit" class="btn btn-primary">
                  edit
                </button>
              </router-link>
              <template v-else>
                <button type="submit" class="btn btn-primary" 
                v-if="isFollowed === false" 
                @click.stop.prevent="addFollow(user.id)">
                  追蹤
                </button>
                <button type="submit" class="btn btn-danger" 
                v-else @click.stop.prevent="removeFollow(user.id)">
                  取消追蹤
                </button>
              </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  name: 'UserProfileCard',
  props: {
    user: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed,
      followers: this.user.followersLength
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    async addFollow (userId) {
      try {
        const { data, statusText } = await usersAPI.followUser(userId)

        if( data.status !== 'success' || statusText !== 'OK') {
          throw new Error(data.message)
        }

        this.isFollowed = true
        this.followers += 1

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤用戶，請稍後再試'
        })
      }
      
    },
     async removeFollow (userId) {
      try {
        const { data, statusText } = await usersAPI.unfollowUser(userId)

        if( data.status !== 'success' || statusText !== 'OK') {
          throw new Error(data.message)
        }

        this.isFollowed = false
        this.followers -= 1

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤用戶，請稍後再試'
        })
      }
    }
  },
  watch: {
    initialIsFollowed ( newValue ){
      this.isFollowed = newValue
    },
    user (newValue) {
      this.followers = newValue.followersLength
    }
  }
}
</script>