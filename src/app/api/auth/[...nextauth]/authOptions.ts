/* eslint-disable no-console */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '@/lib/prismaDB';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Received credentials:', credentials);

        try {
          if (!credentials?.email || !credentials.password) {
            console.error('Invalid credentials');
            return null;
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          console.log('User found in database:', user);

          if (!user || !user.password) {
            console.error('Email or password is incorrect!');
            return null;
          }

          const validPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
          console.log('Valid password:', validPassword);

          if (!validPassword) {
            console.error('Email or password is incorrect!');
            return null;
          }

          return user;
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
  pages: { signIn: '/login' },
  debug: process.env.NODE_ENV === 'development',
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};
