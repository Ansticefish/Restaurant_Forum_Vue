<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <br>
        <img :src="user.image | emptyImage " style="width:200px;height:200px">
        <input
          id="image"
          @change="handleImgChange"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file mt-3"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        {{ isProcessing? 'Sending': 'Submit'}}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from '../utils/mixins'

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      },
      isProcessing: false,
    }
  },
  computed: {
    ...mapState( [ 'currentUser' ])
  },
  mixins: [ emptyImageFilter ],
  methods: {
    async setUser () {
      try {
        const userId = Number(this.$route.params.id)
        
        if( userId !== this.currentUser.id) {
          this.$router.push( { name: '404'})
        }

        const { data, statusText } = await usersAPI.getCurrentUser()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { id, name, image } = data
        this.user = {
          ...this.user,
          id,
          name,
          image
        }

      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }

    },
    handleImgChange (e) {
      const {files} = e.target
      if(!files.length) {
        return this.user.image = ''
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.user.image = imgURL
      }
    },
    async handleSubmit (e) {
      try {
        this.isProcessing = true
        const form = e.target
        const formData = new FormData(form)
        const { data, statusText } = await usersAPI.update( { userId : this.user.id, formData})

        if( data.status !== 'success' || statusText !== 'OK') {
          throw new Error(data.message)
        }

        this.$router.go(-1)

      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '資料更新失敗，請稍後再試'
        })
      }
    
    }
  },
  created () {
    this.setUser()
  }

}
</script>