import { z } from 'zod';

const server = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  FIREBASE_PROJECT_ID: z.string().min(1),
  FIREBASE_CLIENT_EMAIL: z.string().min(1),
  FIREBASE_PRIVATE_KEY: z.string().min(1),
});

const client = z.object({
  NEXT_PUBLIC_FIREBASE_APIKEY: z.string(),
  NEXT_PUBLIC_AUTHDOMAIN: z.string(),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
  NEXT_PUBLIC_STORAGEBUCKET: z.string(),
  NEXT_PUBLIC_MESSAGINGSENDERID: z.string(),
  NEXT_PUBLIC_APPID: z.string(),
});

/** @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}*/
const processEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  NEXT_PUBLIC_AUTHDOMAIN: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_STORAGEBUCKET: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  NEXT_PUBLIC_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  NEXT_PUBLIC_APPID: process.env.NEXT_PUBLIC_APPID,
};

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === 'undefined';

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer ? merged.safeParse(processEnv) : client.safeParse(processEnv)
  );

  if (parsed.success === false) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== 'string') return undefined;
      if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
        throw new Error(
          process.env.NODE_ENV === 'production'
            ? '❌ Attempted to access a server-side environment variable on the client'
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };
