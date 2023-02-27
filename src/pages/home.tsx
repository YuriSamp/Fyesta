import { GetServerSidePropsContext } from 'next/types';
import { adminSDK } from 'src/server/Firebase/ServerApp';
import nookies from 'nookies'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  try {
    const cookies = nookies.get(ctx);
    const token = await adminSDK.auth().verifyIdToken(cookies.token);
    console.log(token)
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
};

export default function Home() {


  return (
    <div className='flex justify-center items-center'>
      <p>Em construção</p>
    </div>
  )
}
