import axios from "axios";

export const customFetch = axios.create ({
    // baseURL:"https://api.unsplash.com/search/photos?client_id=5HeultTbGitWnflYwuOs-1UsKxqgJuQq3zTy42lxOcc&query="
    baseURL:`https://api.unsplash.com/search/photos?client_id=${
        import.meta.env.VITE_API_KEY
      }`

})

export default customFetch