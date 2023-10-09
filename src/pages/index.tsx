import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    window.scroll({ top: 0 })
    const paths: NodeListOf<SVGPathElement> = document.querySelectorAll('path.path__main');

    paths.forEach((path, i) => {
      const pathLength = path!.getTotalLength();

      path.style.strokeDasharray = `${pathLength} ${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;

      window.addEventListener('scroll', function () {

        const elemRect = path.getBoundingClientRect();

        const viewportHeight = (window.innerHeight || document.documentElement.clientHeight) - 200;

        const visibleHeight = Math.min(elemRect.bottom, viewportHeight) - Math.max(elemRect.top, 0);

        const percentageVisible = (visibleHeight / elemRect.height) * 100;

        if ((path.parentNode as SVGElement).classList.contains('scaled') && !path.classList.contains("finished")) {
          console.log(paths[i].style.strokeDashoffset, i, parseInt(path.style.strokeDashoffset) !== 1671.1)
          path.style.strokeDashoffset = parseFloat(path.style.strokeDashoffset) !== 1671.1 ? `${pathLength - (-percentageVisible * pathLength / 100)}` : `${0}`;

        } else {
          path.style.strokeDashoffset = parseInt(path.style.strokeDashoffset) !== 0 ? `${pathLength - (percentageVisible * pathLength / 100)}` : `${0}`;

        }

        if (parseInt(path.style.strokeDashoffset) === 0) {
          path.classList.add('finished')
        }

      })

    })

    return () => {
      window.removeEventListener('scroll', function () {

      });
    }
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 relative ${inter.className}`}
    >
      <section className="h-[700px] -z-10 -mb-5 flex items-center justify-center font-semibold bg-red-400 text-white">TEXT TESTING</section>
      <svg className='first__center' viewBox="0 0 279 319" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
        <path d="M277 0V102.153C277 115.96 265.807 127.153 252 127.153H139.5H27C13.1929 127.153 2 138.346 2 152.153V319" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M277 0V102.153C277 115.96 265.807 127.153 252 127.153H139.5H27C13.1929 127.153 2 138.346 2 152.153V319" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>

      <svg className='left__to__right' viewBox="0 0 552 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <svg className='left__to__right scaled -scale-y-[1]' viewBox="0 0 552 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <svg className='left__to__right' viewBox="0 0 552 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <svg className='left__to__right scaled -scale-y-[1]' viewBox="0 0 552 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <svg className='left__to__right' viewBox="0 0 552 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <svg className='left__to__right scaled -scale-y-[1]' viewBox="0 0 552 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#E0E0E0" strokeWidth="3" strokeLinejoin="round" />
        <path className='path__main relative' d="M2 0V126.82C2 140.627 13.1929 151.82 27 151.82H525C538.807 151.82 550 163.013 550 176.82V309" stroke="#11AEB3" strokeWidth="3" strokeLinejoin="round" />
      </svg>

      <section className="h-[700px] -z-10 -mb-5 flex items-center justify-center font-semibold bg-red-400 text-white">TEXT TESTING</section>
    </main>
  )
}
