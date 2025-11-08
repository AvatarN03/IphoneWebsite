import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import ModalView from './ModalView'
import { yellowImg } from '../utils'

import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from '../constants'
import { animateWithGsapTimeline } from '../utils/animation'

const Modal = () => {
    const [size, setSize] = useState('small');
    const [modal, setModal] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg
    })

    //camera control
    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()

    const small = useRef(new THREE.Group())
    const large = useRef(new THREE.Group())

    //rotation control
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)

    const tl = gsap.timeline();

    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }

        if (size === 'small') {
            animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
                transform: 'translateX(0%)',
                duration: 2
            })
        }
    }, [size])

    useGSAP(() => {
        gsap.to("#heading", {
            y: 0,
            opacity: 1,
        })
    }, [])

    return (
        <section className="common-padding overflow-hidden">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">Take a Closer Look</h1>
                <div className="flex flex-col mt-4 items-center">
                    <div className="w-full h-[75vh] md:h-[90vh] relative overflow-hidden">
                        <ModalView 
                            index={1}
                            groupRef={small}
                            gsapType='view1'
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={modal}
                            size={size}
                        />
                        <ModalView 
                            index={2}
                            groupRef={large}
                            gsapType='view2'
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={modal}
                            size={size}
                        />

                        <Canvas
                            className='w-full h-full absolute inset-0'
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    
                    <div className="mx-auto w-full max-w-full px-4">
                        <p className='text-sm font-light text-center mb-5'>{modal.title}</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                            <ul className="color-container flex justify-center">
                                {models.map((model, index) => (
                                    <li 
                                        key={index} 
                                        className='w-6 h-6 rounded-full mx-2 cursor-pointer flex-shrink-0'
                                        style={{
                                            backgroundColor: model.color[0]
                                        }}
                                        onClick={() => setModal(model)} 
                                    />
                                ))}
                            </ul>

                            <div className='size-btn-container flex bg-gray-800/70 rounded-full p-1'>
                                {sizes.map(({ label, value }) => (
                                    <span 
                                        key={label} 
                                        className='size-btn px-4 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer flex-shrink-0'
                                        style={{
                                            backgroundColor: size === value ? "white" : "transparent",
                                            color: size === value ? "#000" : "white",
                                        }}
                                        onClick={() => setSize(value)}
                                    > 
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal