<template>
  <div class="container py-5">
  
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            v-model="newCategoryName"
            class="form-control"
            placeholder="新增餐廳類別..."
          >
        </div>
        <div class="col-auto">
          <button
            type="button"
            @click.stop.prevent="createCategory"
            :disabled="isProcessing"
            class="btn btn-primary"
          >
            {{ isProcessing? '更新中': '新增'}}
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div 
              class="category-name"
              v-show="!category.isEditing"
            >
              {{ category.name }}
            </div>
            <input 
              type="text"
              v-show="category.isEditing"
              v-model="category.name"
              class="form-control">
            <span
              v-show="category.isEditing" 
              @click.stop.prevent="handleCancel(category.id)"            
              class="cancel"
            >
            X
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              type="button"
              v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)"
              class="btn btn-link mr-2"
            >
              Edit
            </button>
            <button
              type="button"
              v-show="category.isEditing"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name})"
              class="btn btn-link mr-2"
            >
              save
            </button>
            <button
              type="button"
              @click.stop.prevent="deleteCategory(category.id)"
              class="btn btn-link mr-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav
  },
  data () {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories.map(category =>({
        ...category,
        isEditing: false,
        nameCached: ''
      }))
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別資料，請稍後再試'
        })
      }
    },
    async createCategory () {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.categories.add({ 
          name: this.newCategoryName
        })
        if ( data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName
        })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法新增類別，請稍後再試'
        })
      }
      this.newCategoryName = ''
    },
    async deleteCategory (categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ id: categoryId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories = this.categories.filter(item => item.id !== categoryId)
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除類別，請稍後再試'
        })
      }
    },
    async updateCategory ({categoryId, name}) {
      try {
        const { data } = await adminAPI.categories.update({
          id: categoryId,
          name,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.toggleIsEditing(categoryId)
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法更新類別資料，請稍後再試'
        })
      }
    },
    toggleIsEditing (categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        } else {
          return category
        }
      })
    },
    handleCancel (categoryId) {
      this.categories = this.categories.map(category => {
        if(category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached
          }
        } else {
          return category
        }
      })

      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>