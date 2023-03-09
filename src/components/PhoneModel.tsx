import React, { Suspense,  useLayoutEffect } from 'react'
import "./PhoneModel.scss"
import { useNamespace } from '@/hooks/use-namespace'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import gsap from "gsap";
import useGsap from '@/hooks/use-gsap'


function PhoneModel() {

  const runAnimation = ()=>{
    let t1 = gsap.timeline({
      scrollTrigger:{
        trigger:"#canvas",
        start:"top top",
        end:"bottom+=500 bottom",
        markers:true

      }
    })
    t1.fromTo(camera.position,{y:2},{y:0})


  }
  useLayoutEffect(() => {
    //渲染dom
    const warp = document.getElementById("canvas")
    warp?.appendChild(renderer.domElement)
    /****初始化结束 */
    // //创建轨道控制器
    // controls = new OrbitControls(camera, renderer.domElement)
    // //设置控制器阻尼
    // controls.enableDamping = true
    runAnimation()
    loadModel()
    render()
    setAxesHelper()

    return () => {

    }
  }, [])
  


  const winWidth = window.innerWidth / 5,
    winHeight = window.innerHeight / 2
  const scene = new THREE.Scene()
  // scene.background = new THREE.Color( 0xa0a0a0 );



  const camera = new THREE.PerspectiveCamera(45, winWidth / winHeight, 0.1, 100)
  camera.position.set(0, 0, 10)
  scene.add(camera)

  //初始化渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  // renderer.setClearColor( 0xffffff, 0 );
  addAmbientLight()
  addEnvRender()
  //设置渲染尺寸
  console.log(winWidth, winHeight);
  renderer.setSize(winWidth, winHeight)
  // const boxMesh= addBoxGeometry()
  const light = addDirectionalLight()

  /* 初始化部分 */
  // const clock = new THREE.Clock()
  let controls: OrbitControls

  const pm = useNamespace("PhoneModel")
  function render(time?: number) {
    // cube.position.z+=.01
    // time&&setMoveCube(time)
    // runClock()
    // time&&rotationAni(group,time)
    //渲染阻尼效果
    controls?.update()
    renderer.render(scene, camera)
    //渲染下一个帧数会调用render函数
    requestAnimationFrame(render)
  }
  /**
      * @description: 设置坐标轴辅助器&添加入场景
      * @return {*}
      */
  const setAxesHelper = () => {
    //添加坐标轴辅助器
    const axesHelper = new THREE.AxesHelper(5)
    //添加入场景
    scene.add(axesHelper)
  }

  function addAmbientLight() {
    const light = new THREE.AmbientLight(0xffffff, 1.2); // soft white light
    scene.add(light);
    return light
  }
  function addDirectionalLight() {
    //背面
    const directionalLightBack = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightBack.position.set(0, 0, 100)
    // directionalLightBack.target.position.set(0,1,0)
    //屏幕
    const directionalScreen = new THREE.DirectionalLight(0xffffff, 1);
    directionalScreen.position.set(0, 0, -10)
    directionalScreen.target.position.set(0, 1, 0)

    //y- 下
    const directionalLightBottom = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightBottom.position.set(0, -10, 0)

    //y+ 上
    const directionalLightTop = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightTop.position.set(0, 10, 0)

    //x+ 右
    const directionalLightRight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightRight.position.set(10, 0, 0)

    //x- 左
    const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightLeft.position.set(-10, 0, 0)

    // scene.add( directionalScreen,directionalLightBack, directionalLightBottom,directionalLightTop,new THREE.DirectionalLightHelper(directionalLightBack));
    // scene.add(directionalLightRight,new THREE.DirectionalLightHelper(directionalLightLeft),directionalLightLeft)
    scene.add(directionalLightBack, new THREE.DirectionalLightHelper(directionalLightBack))
    return directionalLightBack
  }
  function addEnvRender() {

    scene.environment = new RGBELoader().load('./model/equirectangular/venice_sunset_1k.hdr');
    scene.environment.mapping = THREE.EquirectangularReflectionMapping;


  }


  function loadModel() {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./model/draco/gltf/');
    loader.setDRACOLoader(dracoLoader)
    loader.load("./model/apple_iphone_13_pro_max.glb", (gltf) => {
      const iphone = gltf.scene

      console.log(iphone);

      iphone.scale.set(6, 6, 6)

      // useGui(gui => {
      //   gui.add(iphone.rotation, "y", 0, Math.PI * 2, Math.PI / 36).name("手机旋转")
      // })
      scene.add(iphone)
    })
  }

  return (
    <section className={pm.b()}>

      <Suspense fallback={null}>
        <div id="canvas">


        </div>

      </Suspense>

    </section>
  )
}

export default PhoneModel