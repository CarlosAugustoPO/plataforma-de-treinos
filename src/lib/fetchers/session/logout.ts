import { signOut } from 'next-auth/react';

export default function logout() {
  signOut({ redirect: false });
}
