import * as admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { env } from 'src/env.mjs';

if (!admin.apps.length) {
  initializeApp({
    credential: admin.credential.cert({
      projectId: env.FIREBASE_PROJECT_ID,
      clientEmail: env.FIREBASE_CLIENT_EMAIL,
      privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

export const adminSDK = admin;
