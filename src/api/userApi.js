import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "617b64a52aaf2726a2e86244",
  },
});
