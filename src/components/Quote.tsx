/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-31 22:01:21
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-15 00:27:34
 * @Description: Quote 引用片段
 */
import React, { useLayoutEffect, useRef } from 'react'
import './Quote.scss'
import { useNamespace } from '@/hooks/use-namespace'
import gsap from "gsap";

import useGsap from '@/hooks/use-gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Quote() {
  const sn = useNamespace("section")
  const wrapRef = useRef(null)
  // const gsap = useGsap()
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    console.log(wrapRef.current);
    ScrollTrigger.create({
      trigger: "#Quote"||wrapRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
      markers:true
    })




  }, [])






  return (
      <section id='Quote' className={sn.b()} ref={wrapRef} >
        <div className={sn.e("describeContainer")}>
          <p><span style={{ animationDelay: '0s' }} >灵动的 iPhone 新玩法，迎面而来。重</span></p>
          <p><span style={{ animationDelay: `${0.4 * 2}s` }} >大的安全新功能，为拯救生命而设计。</span></p>
          <p><span style={{ animationDelay: `${0.4 * 3}s` }} >创新的 4800 万像素主摄，让细节纤</span></p>
          <p><span style={{ animationDelay: `${0.4 * 4}s` }} >毫毕现。更有 iPhone 芯片中的速度</span></p>
          <p><span style={{ animationDelay: `${0.4 * 5}s` }}>之王，为一切提供强大原动力。</span></p>
        </div>
      </section>
  )
}
