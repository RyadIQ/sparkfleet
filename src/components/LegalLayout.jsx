import { Link } from 'react-router-dom'
import Footer from './Footer'
import Logo from './Logo'

const PROSE_CLASS = [
  'flex flex-col gap-5 text-[15px] leading-[1.75] text-mid',
  "[&_h2]:mt-6 [&_h2]:text-[20px] [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink",
  '[&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-ink',
  '[&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2.5',
  "[&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:before:mt-px [&_li]:before:shrink-0 [&_li]:before:font-mono [&_li]:before:text-xs [&_li]:before:text-spark-dk [&_li]:before:content-['→']",
  '[&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2',
  '[&_strong]:font-semibold [&_strong]:text-ink',
  '[&_dl]:grid [&_dl]:grid-cols-[minmax(140px,auto)_1fr] [&_dl]:gap-x-6 [&_dl]:gap-y-2.5 max-sm:[&_dl]:grid-cols-1 max-sm:[&_dl]:gap-y-0.5',
  '[&_dt]:label-mono [&_dt]:pt-1 [&_dt]:text-mid',
  '[&_dd]:text-ink max-sm:[&_dd]:mb-3',
].join(' ')

export default function LegalLayout({ title, intro, children }) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper/95 px-12 py-[18px] backdrop-blur-[10px] max-md:px-5">
        <div className="mx-auto flex max-w-[760px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <Logo className="h-9 w-auto max-sm:h-8" />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-mid transition-colors hover:text-ink max-sm:text-[13px]"
          >
            ← Retour au site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-12 py-16 max-md:px-5 max-md:py-10">
        <p className="label-mono mb-5 flex items-center gap-2 text-mid before:inline-block before:h-px before:w-4 before:bg-mid before:content-['']">
          SparkFleet
        </p>
        <h1 className="mb-4 text-[clamp(28px,4vw,40px)] leading-[1.1] font-bold tracking-[-0.025em]">
          {title}
        </h1>
        {intro && <p className="mb-10 text-[17px] leading-[1.7] text-mid">{intro}</p>}

        <div className={PROSE_CLASS}>{children}</div>
      </main>

      <Footer />
    </div>
  )
}
