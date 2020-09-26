import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <header className={cn('py-5 px-2 bg-gray-900', className)}>
      <nav>
        <ul className="flex justify-end w-full max-w-6xl space-x-4 mx-auto">
          <li>
            <NavLink to="/" name="Home" />
          </li>
          <li>
            <NavLink to="/experience" name="Experience" />
          </li>
          <li>
            <NavLink to="/talks" name="Talks" />
          </li>
          <li>
            <NavLink to="/blog" name="Blog" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

const NavLink = ({ to, name }: { to: string; name: string }) => {
  const router = useRouter()
  const isActive = router.pathname === to

  return (
    <Link href={to}>
      <a
        className={cn(
          'neo-noire transition-colors duration-200 hover:text-pink-800 hover:underline',
          {
            underline: isActive,
          },
          isActive ? 'text-active' : 'text-passive',
        )}
      >
        {/* NeoNoire font type is based on casing */}
        {name.toLowerCase()}
      </a>
    </Link>
  )
}
