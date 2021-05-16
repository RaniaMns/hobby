import http from "./httpService";
import apiUrl from "../utils/config.json";

const apiEndpoint = apiUrl.apiURL + "/events";

async function getEvent() {
  return await http.get(apiEndpoint);
}

async function ajoutEvent(event) {
  http.post(apiEndpoint  + event.id,{
    name: event.name,
    description: event.description,
    place: event.place,
    date: event.date,
  });
  console.log(event.nom);
}
async function deleteEvent(event) {
  http.delete(apiEndpoint + event.id);
}

const event = {
  getEvent,
  ajoutEvent,
  deleteEvent,
};
export default event;
