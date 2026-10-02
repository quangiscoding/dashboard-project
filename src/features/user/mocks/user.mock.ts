import type { User } from "../types";

export const MOCK_USER: User = {
  id: "usr_123",
  name: "Alex Rivera",
  email: "alex.rivera@company.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  role: "ADMIN", // Change to 'USER' to test non-admin views
};
