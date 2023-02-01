/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-01 19:10:17
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-01 20:42:23
 * @Description: heroSection 滚动部分
 */
import React from 'react'
import { useNamespace } from '@/hooks/use-namespace'
import ""
function HeroSection() {

    const hs = useNamespace("HeroSection")
    return (
        <section className={hs.b()}>
            <div>
            </div>
        </section>
    )
}

export default HeroSection