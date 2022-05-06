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
import { mapState } from 'vuex'
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'


export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilters],
  computed: {
    ...mapState( [ 'currentUser' ])
  },
  methods: {
    async handleEventClicked (commentId) {
      try {
        const { data, statusText } = await commentsAPI.delete( commentId )
        
        if (data.status !== 'success' || statusText !== 'OK') {
          throw new Error(data.message)
        }
        
        this.$emit('after-delete-comment', commentId)

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      }
    }
  }
  
}
</script>