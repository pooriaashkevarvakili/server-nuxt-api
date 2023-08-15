import axios from "axios";
export default defineEventHandler(async (event) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = response.data;
  return {
    data,
  };
});
