import React from 'react'
import { GrClose } from 'react-icons/gr'
const SideNav = () => {
  return (
    <section className='flex flex-row w-screen h-screen z-50 bg-mainBg'>
        <aside>
            <ul></ul>
        </aside>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <GrClose />
    </section>
  )
}

export default SideNav