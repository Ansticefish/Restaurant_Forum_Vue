import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  create ( { currentUser, text, restaurantId } ) {
    return apiHelper.post('/comments', {
      currentUser,
      text,
      restaurantId
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
    
    )
  },
  delete ( commentId ) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}