import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import { AppRouters } from './router'

import 'react-perfect-scrollbar/dist/css/styles.css'

function App() {
  return (
    <Suspense fallback={<div className='flex justify-center text-3xl'>Loading...</div>}>
      <AppRouters />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff'
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black'
            }
          }
        }}
      />
    </Suspense >
  )
}

export default App
