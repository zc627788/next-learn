import { getEventById, getFeaturedEvents } from "../../helper/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function EventDetailPage({ selectEvent }) {
  if (!selectEvent) {
    return <p>No event Page</p>;
  }
  return (
    <>
      <EventSummary title={selectEvent.title} />
      <EventLogistics
        date={selectEvent.date}
        address={selectEvent.location}
        image={selectEvent.image}
        imageAlt={selectEvent.title}
      />

      <EventContent>
        <p>{selectEvent.description}</p>
      </EventContent>
    </>
  );
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: { selectEvent: event },
    
  };
};
export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const path = events.map((item) => ({
    params: {
      eventId: item.id,
    },
  }));
  return {
    paths: path,
    fallback: false,
  };
};
export default EventDetailPage;
