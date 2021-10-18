import axios from "axios";
//we can create our own axios server
//we can send request to the server and export it to the whole application

//creating our Axios Server in unsplash.js
//and use it in other files
//actually it's not a server
//just a way to define our API call using Axios
export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID rEh2Fu1FElCbVogviPRS-oW7dy6WEQRVb671_lXvt5s",
  },
});
