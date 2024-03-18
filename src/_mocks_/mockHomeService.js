import mockGreetingMessage from "./mockGreetingMessage"

const mockHomeService = {
  getGreeting: () => Promise.resolve(mockGreetingMessage),
}

export default mockHomeService
