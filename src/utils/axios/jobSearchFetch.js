import axios from "axios";

export const jobSearchFetch = axios.create({
  baseURL:
    "https://api.adzuna.com/v1/api/jobs/it/search/1?app_id=bf28faaa&app_key=01c1ff0ee28a24a814eacddee49cc720",
});
