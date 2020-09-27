import Header from '@components/Header'
import Main from '@components/Main'
import client from 'apiClient'
import { gql } from 'graphql-request'
import React from 'react'

interface Talk {
  name: string
  time: string
  talkUrl: string
  description: string
  publicImageId: string
}

interface Props {
  talks: Talk[]
}

const Talks = ({ talks }: Props) => {
  // TODO: get cloudinary image

  return (
    <>
      <Header />

      <Main>
        <div>
          {talks.map((talk) => (
            <span key="talk">{talk.name}</span>
          ))}
        </div>
      </Main>
    </>
  )
}

const query = gql`
  query {
    allTalks {
      data {
        name
        time
        talkUrl
        description
        publicImageId
      }
    }
  }
`

export const getStaticProps = async () => {
  const {
    allTalks: { data },
  } = await client.request(query)

  return {
    props: {
      talks: data,
    },
  }
}

export default Talks
