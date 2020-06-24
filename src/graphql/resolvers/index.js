import banis from './banis'
import meta from './meta'
import shabad from './shabad'
import line from './line'

const rootResolver = {
  Query: {
    ...banis,
    ...meta,
    ...shabad,
    ...line,
  },
}
export default rootResolver
