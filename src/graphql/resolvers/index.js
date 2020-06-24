import { GraphQLDate } from 'graphql-iso-date'

import banis from './banis'
import meta from './meta'
import shabad from './shabad'
import line from './line'
import hukamnama from './hukamnama'

const rootResolver = {
  Query: {
    ...banis,
    ...meta,
    ...shabad,
    ...line,
    ...hukamnama,
  },
  Date: GraphQLDate,
}

export default rootResolver
