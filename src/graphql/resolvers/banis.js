import { getBanis, getBaniLines } from '../lib/banis'

const BANIS = {
  banis: () => getBanis(),
  bani: async ( _, { baniId } ) => {
    const { baniinfo, bani } = await getBaniLines( baniId )

    return {
      ...baniinfo,
      lines: bani.map( ( { line } ) => line ),
    }
  },
}

export default BANIS
