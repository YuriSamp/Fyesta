import Header from '@ui/SettingsHeader';
import { useRouter } from 'next/router';

export default function Shortcuts() {
  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <section className='px-96 pt-16'>
        <Header
          Page={page}
        />
      </section>
    </>
  )
}
