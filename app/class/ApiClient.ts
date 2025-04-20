class ApiClient {
  private baseURL = "";

  constructor(baseURL: string = "") {
    this.baseURL = baseURL;
  }

  async request(url: string, method: string, extraHeader: object, body?: any) {
    const response = await fetch(this.baseURL + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...extraHeader,
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    return response.json();
  }

  async get(url: string, headers = {}) {
    return this.request(url, "GET", headers, null);
  }

  async post(url: string, body: any, headers = {}) {
    return this.request(url, "POST", headers, body);
  }

  async put(url: string, body: any, headers = {}) {
    return this.request(url, "PUT", headers, body);
  }

  async delete(url: string, headers = {}) {
    return this.request(url, "DELETE", headers, null);
  }
}

// For backward compatibility, export a default instance
const defaultInstance = new ApiClient();
export default defaultInstance;

// Also export the class for when custom instances are needed
export { ApiClient };
