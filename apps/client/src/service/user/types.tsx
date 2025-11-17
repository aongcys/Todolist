export type RegisterArgs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type LoginArgs = {
  email: string;
  password: string;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  email: string;
}

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
}

export type UserupdateArgs = {
  firstName?: string;
  lastName?: string;
  email?: string;
  profileImage?: string
}

export type ChangePasswordArgs = {
  currentPassword: string;
  newPassword: string;
}

