<template>
   <div class="col-3">
        <router-link :to="{ name: 'user', params: {id: user.id}}">
          <img
            :src="user.image"
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
            @click="removeFollow"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            type="button"
            v-else
            @click="addFollow"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
</template>


<script>
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
    addFollow () {
      this.user = {
        ...this.user,
        isFollowed: true,
      }
    },
    removeFollow () {
      this.user = {
        ...this.user,
        isFollowed: false,
      }
    },
  }
}
</script>

<style scoped>
  img {
    object-fit: cover;
  }
</style>