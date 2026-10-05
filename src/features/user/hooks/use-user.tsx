import { MOCK_USER } from "../mocks/user.mock";
import { type User } from "../types/";

type UseUserReturn =
  { user: User; isLoading: false } | { user: null; isLoading: true };

export function useUser(): UseUserReturn {
  // In dev / offline mode, return mock data instantly
  if (process.env.NODE_ENV === "development") {
    return {
      user: MOCK_USER,
      isLoading: false,
    };
  }

  // Production logic goes here when ready (e.g., fetch from API / SWR / TanStack Query)
  return { user: null, isLoading: true };
}
