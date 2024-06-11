import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Google, Github]
});