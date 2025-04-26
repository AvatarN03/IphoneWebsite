import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import Lights from "./Lights"
import IPhone from "./IPhone"
import Loader from './Loader'
import * as THREE from "three"
const ModalView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotatiomState,
  size,
  item
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`  absolute w-full h-full ${index === 2 ? 'right-[-100%]' : ""}`}
    >
      {/* ambientLight */}
      <ambientLight intensity={5} />



      {/* camera  */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
       makeDefault
       ref={controlRef}
       enableZoom={false}
       enablePan={false}
       rotateSpeed={0.4}
       target={new THREE.Vector3(0,0,0)}
       onEnd={()=>setRotatiomState(controlRef.current.getAzimuthalAngle())}      
      />

      <group ref={groupRef} name={`${index === 1}? 'small':'large'`} position={[0, 0, 0]}>

        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View >
  )
}

export default ModalView