import Link from "next/link"

type Props = {
    category: string,
    isActive: boolean
}
const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link className={`navLink ${isActive && 'underline underline-offset-2 underline-orange-400 font-bold text-lg'}`} href={`/news/${category}`}>{category}</Link>
  )
}

export default NavLink