import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "48586763cbc04c6f8191deccb6fbf1a5",
  },
});
