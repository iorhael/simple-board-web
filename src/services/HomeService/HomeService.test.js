import HomeService from "./HomeService"
import mockApiService from "_mocks_/mockApiService"
import mockGreetingMessage from "_mocks_/mockGreetingMessage"

describe("Home service", () => {
  test("getGreeting should return json with greeting message", async () => {
    const mockResponse = new Response(JSON.stringify(mockGreetingMessage))
    const mockGet = jest.fn(() => Promise.resolve(mockResponse))
    const expectedEndpoint = ""
    mockApiService.get.mockImplementation(mockGet)

    const homeService = new HomeService(mockApiService)
    const message = await homeService.getGreeting()

    expect(mockApiService.get).toHaveBeenCalledWith(expectedEndpoint)
    expect(message).toEqual(mockGreetingMessage)
  })
})
