import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </>
  );
}
export default AllEventsPage;
