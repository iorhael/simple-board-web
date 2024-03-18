import ApiService from "services/ApiSerivice"

const resource = ""

class HomeService {
  constructor(apiService = ApiService) {
    this.apiService = apiService
  }

  getGreeting() {
    return this.apiService
      .get(resource)
      .then((data) => data.json())
      .catch((err) => console.log(err))
  }
}

export default HomeService
