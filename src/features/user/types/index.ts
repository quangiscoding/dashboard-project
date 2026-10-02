// 1. Roles & Permissions (matching your RBAC system)
export type UserRole = "ADMIN" | "MEMBER" | "GUEST";

// 2. Base User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string; // Optional (fallback to initials/placeholder)
  role: UserRole;

  // Account Status / Metadata
  createdAt?: string; // ISO date string
  updatedAt?: string;
}

// 3. Partial or Session State (Useful for Auth hooks)
export interface UserSession {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}
