import * as admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

if (!admin.apps.length) {
  initializeApp({
    credential: admin.credential.cert(
      process.env.GOOGLE_APPLICATION_CREDENTIALS
    ),
  });
}

export const adminSDK = admin;
