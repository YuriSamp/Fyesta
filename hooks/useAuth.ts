import { CustomParameters, getAuth, UserCredential } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { app } from 'Firebase/ClientApp';

export const useAuth = (
  Provider: (
    scopes?: string[] | undefined,
    customOAuthParameters?: CustomParameters | undefined
  ) => Promise<UserCredential | undefined>
) => {
  const auth = getAuth(app);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const HandleLoginWithProvider = (
    Provider: (
      scopes?: string[] | undefined,
      customOAuthParameters?: CustomParameters | undefined
    ) => Promise<UserCredential | undefined>
  ) => {
    Provider().then((res) => {
      if (res !== undefined) {
        return router.push('/teste');
      }
      if (res === undefined) {
        return undefined;
      }
    });
  };

  const HandleLoginWithEmailAndPassword = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password).then((res: any) => {
      if (res !== undefined) {
        return router.push('/teste');
      }
      if (res === undefined) {
        return undefined;
      }
    });
  };
};
