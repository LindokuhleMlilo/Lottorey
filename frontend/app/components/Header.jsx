'use client'
import Link from 'next/link'
import React from 'react'
import ConnectWallet from './ConnectWallet'

const Header = () => {
  return (
    <header className='bg-[#00094B] text-white py-4 w-full'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-lg font-bold'>
          <Link href={'/'} className='hover:text-gray-300 transition-colors'>
            Lottery Dapp
          </Link>
        </h1>
        <ConnectWallet/>
      </div>
    </header>
  )
}

export default Header