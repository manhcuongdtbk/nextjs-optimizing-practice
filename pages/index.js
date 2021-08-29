import {getFeaturedEvents} from "../helpers/api-utils"
import EventList from "../components/events/event-list"
import Head from "next/head"

function HomePage(props) {
  return (
    <div>
      <Head>
        <meta name='description' content='Find a lot of great events that allow you to evolve'/>
      </Head>
      <EventList items={props.events}/>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800 // 30 minutes
  }
}

export default HomePage
