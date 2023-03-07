import Header from 'src/components/SettingsHeader';
import { useRouter } from 'next/router';

export default function Shortcuts() {
  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <section className='px-96 pt-16 text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]'>
        <Header
          Page={page}
        />
      </section>
    </>
  )
}
