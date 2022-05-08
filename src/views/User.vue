<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard :user="user" :initial-is-followed="isFollowed" :currentUser="currentUser"/>     
      <div class="row">
        <div class="col-md-4">
          <UserFollowingCard :followings="followings"/>
          <br>
          <UserFollowersCard :followers="followers"/>
        </div>
        <div class="col-md-8">
          <UserCommentCard :comments="comments"/>
          <br>
          <UserFavoritedRestaurantsCard :favoriteRestaurants="favoriteRestaurants"/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingCard from '../components/UserFollowingCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentCard from '../components/UserCommentCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingCard,
    UserFollowersCard,
    UserCommentCard,
    UserFavoritedRestaurantsCard,
  },
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: '',
        email: '',
        commentLength: 0,
        favoritedLength: 0,
        followingLength: 0,
        followersLength: 0,
      },
      followings: [],
      followers: [],
      comments: [],
      favoriteRestaurants: [],
      isFollowed: false,
    }
  },
  computed: {
    ...mapState( [ 'currentUser' ])
  },
  methods: {
    async fetchData (userId) {
      try {
        const { data, statusText } = await usersAPI.getUser({ id: userId })

        console.log(data)
        
        if (statusText !== 'OK'){
          throw new Error(statusText)
        }

        const {id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings} = data.profile
      this.user = {
        ...this.user,
        id,
        name,
        image,
        email,
        commentLength: Comments.length,
        favoritedLength: FavoritedRestaurants.length,
        followingLength: Followings.length,
        followersLength: Followers.length,
      },
      this.followings = Followings
      this.followers = Followers
      this.comments = Comments
      this.favoriteRestaurants = FavoritedRestaurants
      this.isFollowed = data.isFollowed

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
    const { id } = this.$route.params
    this.fetchData (id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchData(id)
    next()
  }
}
</script>