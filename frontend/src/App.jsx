import React from 'react'
import FloatingShap from './components/FloatingShap'

const App = () => {
  return (
  <>
  <div className='min-h-screen bg-gradient-to-br
   from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
    <FloatingShap
    color = "bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0}
    />
    <FloatingShap
    color = "bg-green-500" size="w-48 h-48" top="70%" left="80%" delay={5}
    />

<FloatingShap
    color = "bg-green-500" size="w-32 h-32" top="50%" left="-10%" delay={2}
    />


  </div>
  
  </>
  )
}

export default App
