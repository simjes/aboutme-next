import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  return (
    <header className="py-5 px-2 bg-gray-900">
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
          'font-bold text-blue-500 transition-colors duration-200 hover:text-pink-500',
          {
            'text-pink-500': isActive,
            underline: isActive,
          },
        )}
      >
        {name}
      </a>
    </Link>
  )
}
