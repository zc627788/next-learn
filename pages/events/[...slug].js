import {getFilteredEvents} from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/result-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
function FilteredEventsPage() {
  const router = useRouter();
  const params = router.query.slug;
  if (!params) {
    return <p className="center">loading...</p>;
  }
  const [year, month] = params;
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2023 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filterData =  getFilteredEvents({ year, month });
  if (!filterData || filterData.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(year, month - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filterData} />
    </div>
  );
}
export default FilteredEventsPage;
