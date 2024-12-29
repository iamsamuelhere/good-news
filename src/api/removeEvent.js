const EVENTS_ENDPOINT = import.meta.env.VITE_EVENTS_ENDPOINT;

const removeEvent = async (query = "") => {
   try {
      console.log("removeEvent()");
      const request = await fetch(`${EVENTS_ENDPOINT}/remove-event/` + query, {
         method: "DELETE",
      });
      const result = await request.json();
      console.log("result", result);
      return result;
   } catch (error) {
      console.error("Error while removeEvent()", error);
      throw new Error(error);
   }
};

export default removeEvent;
