<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleEventClicked(comment.id)"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{name: 'user', params: {id: comment.User.id}}">
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import {fromNowFilters} from '../utils/mixins'

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilters],
  data () {
    return {
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    handleEventClicked (commentId) {
      console.log('handleEventClicked', commentId)

      // Ask database to delete data through API

      this.$emit('after-delete-comment', commentId)
    }
  }
  
}
</script>