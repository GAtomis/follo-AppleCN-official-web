/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-31 21:48:06
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-04 11:04:03
 * @Description: 头部注释
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//初始化样式
import 'reset-css'
// import '@/styles/global.scss'
import "@/styles/global.scss"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
