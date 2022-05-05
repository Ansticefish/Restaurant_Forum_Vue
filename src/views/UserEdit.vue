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
        <img :src="user.image" style="width:200px;height:200px">
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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  "id": 2,
  "name": "user1",
  "email": "user1@example.com",
  "password": "$2a$10$aMTa.s09pEyzSTvEtnoVgeq5ZDPkYY.16KR2hh7wugjCGSQRDZwwW",
  "isAdmin": false,
  "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.574574830269853",
  "createdAt": "2022-04-18T14:04:25.000Z",
  "updatedAt": "2022-04-18T14:04:25.000Z",
}

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      }
    }
  },
  methods: {
    fetchUser (UserId) {
      console.log(UserId)

      const {id, name, image} = dummyUser
      this.user = {
        ...this.user,
        id,
        name,
        image
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
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      // send data to server

      for(let [name, value] of formData.entries()){
        console.log(name, ':', value)
      }
    }
  },
  created () {
    const {id} = this.$route.params
    this.fetchUser(id)
  }

}
</script>