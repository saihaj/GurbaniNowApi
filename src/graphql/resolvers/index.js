import banis from './banis'
import meta from './meta'

const rootResolver = {
  Query: {
    ...banis,
    ...meta,
  },
}
export default rootResolver
