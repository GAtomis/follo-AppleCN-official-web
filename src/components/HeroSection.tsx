
/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-01 19:10:17
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-02 00:03:49
 * @Description: heroSection 滚动部分
 */
import React from 'react'
import { useNamespace } from '@/hooks/use-namespace'
import mp4link from '@/assets/video/Ink - 21536.mp4'
import "./HeroSection.scss"
function HeroSection() {

    const hs = useNamespace("HeroSection")
    return (
        <section className={hs.b()}>
            <h1 className={hs.e("title")}>
                iPhone 14 Pro Max

            </h1>
            <div className={hs.e("textContainer")}>
                <span>so cold</span>
                <span>sp bad</span>
            </div>
            <div className={hs.e("videoContainer")}>
                <video src={mp4link} autoPlay muted loop></video>


            </div>

        </section>
    )
}

export default HeroSection