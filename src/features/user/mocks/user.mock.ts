import type { User } from "../types";

export const MOCK_USER: User = {
  id: "user_123",
  name: "Quang Nguyen",
  email: "quang.nguyenminh@kyanon.digital",
  avatarUrl: "https://github.com/shadcn.png",
  role: "ADMIN", // Change to 'USER' to test non-admin views
};
