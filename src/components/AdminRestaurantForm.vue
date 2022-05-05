<template>
  <form 
   @submit.stop.prevent="handleSubmit"
   v-show="!isLoading"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{category.name}}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img :src="restaurant.image"
        v-if="restaurant.image" 
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="imageUpload"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
      @submit.stop.prevent="handleSubmit"
    >
      {{isProcessing? '處理中': '送出' }}
    </button>
  </form>
</template>

<script>
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminRestaurantForm',
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
          id: -1,
          name: '',
          tel: '',
          address: '',
          openingHours: '',
          description: '',
          image: '',
          categoryId: '',
      }),
    },
    isProcessing: {
        type: Boolean,
        default: false
      }
  },
  data () {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant,
      },
      isLoading: true
    }
  },
  methods: { 
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法載入餐廳分類，請稍後再試'
        })
      }
    },
    imageUpload (e) {
      const {files} = e.target
      if( files.length === 0) {
        this.restaurant.image = ''
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imgURL
      }
    },
    handleSubmit (e) {
      if(!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填入餐廳名稱'
        })
        return
      } else if(!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  },
  created () {
    this.fetchCategories() 
  },
  watch: {
    initialRestaurant(newValue){
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  }
}
</script>