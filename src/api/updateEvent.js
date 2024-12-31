
const EVENTS_ENDPOINT = import.meta.env.VITE_EVENTS_ENDPOINT

const updateEvent =async (payload)=>{
  console.log("updateEvent()")

    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

 const request =  await fetch(`${EVENTS_ENDPOINT}/update-event`, requestOptions)
   const result = await request.json();
  console.log("result", result)
  return result;

}

export default updateEvent;

