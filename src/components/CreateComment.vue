<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true,
    }
  },
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState( [ 'currentUser' ] )
  },
  methods: {
    async handleSubmit() {
      try {
        const { data, statusText } = await commentsAPI.create({
          currentUser: this.currentUser,
          text: this.text,
          restaurantId: this.restaurantId
        })

        const { status, commentId } = data

        if ( status !== 'success' || statusText !== 'OK') {
          throw new Error(data.message)
        }
        
        this.$emit('after-create-comment', { 
          commentId: commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })

        this.text = ''  
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }   
    }
  }
}

</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>