
const EVENTS_ENDPOINT = import.meta.env.VITE_EVENTS_ENDPOINT
const createEvent =async (payload)=>{
  console.log("createEvent()")

    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

 const request =  await fetch(`${EVENTS_ENDPOINT}/create-event`, requestOptions)
   const result = await request.json();
  console.log("result", result)
  return result;

}

export default createEvent;

