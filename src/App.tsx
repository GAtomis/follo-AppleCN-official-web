/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-31 21:48:06
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-02 00:33:18
 * @Description: main
 */
import { useState } from 'react'
import  Quote from '@/components/Quote'
import HeroSection from './components/HeroSection'
import PhoneModel from './components/PhoneModel'

function App() {

  return (
    <div className="App">
      <Quote></Quote>
      <HeroSection></HeroSection>
      <PhoneModel></PhoneModel>
      
    </div>
  )
}

export default App
