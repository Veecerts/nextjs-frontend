'use client'

import React from 'react'
import DatePickerDemo from '@/components/ui/date-picker'
import TabsDemo from '@/components/ui/toggle-button'

const Search = () => {
  return (
      <div className='flex space-x-12'>
          <div className=''>
          <input
              className=" h-12 shadow p-6 rounded-full bg-slate-100 text-slate-500 outline-none"
              placeholder="Search files"
            />
          </div>
          <div className='pt-3'>
              <DatePickerDemo/>
          </div>
          <div className=''>
              <TabsDemo/>
          </div>
    </div>
  )
}

export default Search