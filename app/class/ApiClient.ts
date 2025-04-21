// Define a more explicit discriminated union type for API responses
export type ApiResult<T> =
  | { success: true; data: T; error: null }
  | { success: false; data: null; error: string };

class ApiClient {
  private baseURL = "";

  constructor(baseURL: string = "") {
    this.baseURL = baseURL;
  }

  private getFullUrl(url: string): string {
    // If we already have a full URL or baseURL is set, use that
    if (this.baseURL || url.startsWith("http")) {
      return this.baseURL + url;
    }

    // For server-side requests to internal API routes, we need to use absolute URLs
    if (typeof window === "undefined") {
      // Server-side: use NEXT_PUBLIC_API_URL env var if available, or fallback to localhost
      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      return baseUrl + url;
    }

    // Client-side: relative URLs work fine
    return url;
  }

  async request<T>(
    url: string,
    method: string,
    extraHeader: object,
    body?: any
  ): Promise<ApiResult<T>> {
    try {
      const fullUrl = this.getFullUrl(url);
      const response = await fetch(fullUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...extraHeader,
        },
        ...(body && { body: JSON.stringify(body) }),
      });

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        return {
          success: false,
          data: null,
          error:
            errorData?.error || `Request failed with status ${response.status}`,
        };
      }

      const data = await response.json();
      return data as ApiResult<T>;
    } catch (error) {
      // Return a standardized error format that matches the API routes
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async get<T>(url: string, headers = {}): Promise<ApiResult<T>> {
    return this.request<T>(url, "GET", headers, null);
  }

  async post<T>(url: string, body: any, headers = {}): Promise<ApiResult<T>> {
    return this.request<T>(url, "POST", headers, body);
  }

  async put<T>(url: string, body: any, headers = {}): Promise<ApiResult<T>> {
    return this.request<T>(url, "PUT", headers, body);
  }

  async delete<T>(url: string, headers = {}): Promise<ApiResult<T>> {
    return this.request<T>(url, "DELETE", headers, null);
  }
}

const defaultInstance = new ApiClient();
export default defaultInstance;
