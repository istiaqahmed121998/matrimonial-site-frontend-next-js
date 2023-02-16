
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
export const sessionOptions = {
  password: 'istiaqahmed/Desktop/project/matrimonial/frontend/node_modules/next/dist/server/api-utils/node.js:363:15',
  cookieName: 'iron-session/examples/next.js',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}