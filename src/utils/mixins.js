import moment from 'moment'

export const fromNowFilters = {
  filters: {
    fromNow(time) {
      if (!time) return '-'
      return moment(time).fromNow()
    }
  }
}