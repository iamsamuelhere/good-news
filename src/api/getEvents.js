
const EVENTS_ENDPOINT = import.meta.env.VITE_EVENTS_ENDPOINT

const getEvents =async (query="")=>{
  console.log("getEvents()")
 const request =  await fetch(`${EVENTS_ENDPOINT}/get-event/`+query)
   const result = await request.json();
  console.log("result", result)
  return result;

}

export default getEvents;

