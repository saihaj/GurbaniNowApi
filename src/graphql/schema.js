/* eslint-disable no-tabs */
import { gql } from 'apollo-server-express'

export default gql`
type Query {
    banis: [Banis]!
    bani(baniId: String): BaniInfo
}

interface defaults { 
	id: ID!
	akhar: String!
	unicode: String!
	english: String!
}

type Banis implements defaults {
	akhar: String!
	unicode: String!
	english: String!
	id: ID!
	baniInfo: BaniInfo
}

type BaniInfo implements defaults {
	id: ID!
	akhar: String!
	unicode: String!
	english: String!
	pageno: String!
	source : Source!
	writer: Writer!
	raag: Raag!
	count: Int!
	lines: [Line]!
}

type Source implements defaults { 
	id: ID!
	akhar: String!
	unicode: String!
	english: String!
	length: Int!
	pageName : Name
}

type Name { 
	akhar: String!
	unicode: String!
	english: String!
}

type Writer implements defaults {
	akhar: String!
	unicode: String!
	english: String!
	id: ID!
}

type Raag implements defaults {
	akhar: String!
	unicode: String!
	english: String!
	id: ID!
	startang: String!
	endang: String!
	raagwithpage: String!
}

type Line {
	id: ID!
	shabadid: ID!
	gurmukhi: LineDefaults
	larivaar: LineDefaults
	translation: Translations
	transliteration: Transliterations
	pageno: Int!
	lineno: Int!
	firstletters: LineDefaults
}

type LineDefaults {
	akhar: String!
	unicode:String!
}

type Translations { 
	english: String
	punjabi: LineDefaults!
	spanish: String
}

type Transliterations { 
	english: TranslitLine
	devanagari: TranslitLine
	urdu: TranslitLine
}

type TranslitLine { 
	text: String
	larivaar: String
}

`
