export async function getAllEvents() {
  const response = await fetch(
    "https://xx-net-271306-default-rtdb.firebaseio.com/event.json"
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}
export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();


  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);

    return eventDate.getFullYear() === Number(year) && eventDate.getMonth() === Number(month) - 1;
  });

  return filteredEvents;
}