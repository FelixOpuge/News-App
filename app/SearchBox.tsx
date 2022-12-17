'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const SearchBox = () => {
  const [input, setInput] = useState('')

  const router = useRouter()

  const handleSearch = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input) return;

    router.push(`/search?term=${input}`)
  }
    
  return (
    <form onSubmit={handleSearch} className='max-w-6xl mx-auto flex justify-between items-center p-5'>
        <input value={input} onChange={ (e) => setInput(e.target.value) } className='flex-1 w-full rounded-sm h-14 placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400' placeholder='Search KeyWords...' type="text" />
        <button className="text-orange-400 disabled:text-gray-400" disabled={!input} type="submit">Search</button>
    </form>
  )
}

export default SearchBox