import banis from './banis'
import meta from './meta'
import shabad from './shabad'

const rootResolver = {
  Query: {
    ...banis,
    ...meta,
    ...shabad,
  },
}
export default rootResolver
