<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img :src="user.image" width="300px" height="300px">
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
            <li><strong>{{user.followersLength}}</strong> followers (追隨者)</li>
          </ul>
          <p>
              <router-link to="/users/2/edit" v-if="currentUser.id === user.id">
                <button type="submit" class="btn btn-primary">
                  edit
                </button>
              </router-link>
              <template v-else>
                <button type="submit" class="btn btn-primary" 
                v-if="isFollowed === false" 
                @click.stop.prevent="addFollow">
                  追蹤
                </button>
                <button type="submit" class="btn btn-danger" 
                v-else @click.stop.prevent="removeFollow">
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
      isFollowed: this.initialIsFollowed
    }
  },
  methods: {
    addFollow () {
      // send data to database
      this.isFollowed = true
    },
    removeFollow () {
      // send data to database
      this.isFollowed = false
    }
  }
}
</script>