import React, {Suspense, useState} from 'react';
import './main-page.style.scss';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";

export function Chair(props) {
    const {nodes, materials} = useGLTF('assets/SheenChair.gltf')
    return (
        <group {...props} dispose={null} scale={3}>
            <mesh geometry={nodes.SheenChair_fabric.geometry} material-color={props.materials.fabric}
                  material={materials['fabric Mystere Mango Velvet']}/>
            <mesh geometry={nodes.SheenChair_wood.geometry} material-color={props.materials.wood}
                  material={materials['wood Brown']}/>
            <mesh geometry={nodes.SheenChair_metal.geometry} material-color={props.materials.metal}
                  material={materials.metal}/>
            <mesh geometry={nodes.SheenChair_label.geometry} material={materials.label} position={[0, 0.24, 0.06]}
                  rotation={[-0.09, 0, 0]}/>
        </group>
    )
}

export function Cube(props) {
    const { nodes, materials } = useGLTF('assets/Cube/cube.gltf')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Cube.geometry} material-color={props.materials.fabric} material={materials.Cube} />
        </group>
    )
}


function MainPage(props) {

    const [fabricColor, setFabricColor] = useState('#cf0012');
    const [woodColor, setWoodColor] = useState('black');
    const [metalColor, setMetalColor] = useState('black');

    return (
        <>
            <div className={"wrapper"}>
                <h1>Choose your favourite material</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores atque blanditiis
                    corporis culpa cupiditate enim laudantium nisi, odio perferendis quidem, reprehenderit temporibus
                    totam veniam.</p>

                <div className="card-wrapper">
                    <div className="card">
                        <Canvas>
                            <Suspense fallback={null}>
                                {/*If you want to change the model, just replace Chair with Cube and vice versa*/}
                                <Chair materials={{fabric: fabricColor, wood: woodColor, metal: metalColor}}/>
                                <ambientLight intensity={0.5}/>
                                <spotLight angle={0.1} intensity={0.5} position={[100, 100, 30]} />
                                <OrbitControls enablePan={true} maxZoom={3000}/>
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="selections-wrapper">
                        <p>Choose your favourite color</p>
                        <div className="input">
                            <label htmlFor="fabricColor">Fabric color</label>
                            <input value={'#cf0012'} name='fabricColor' type="color" onChange={(e) => setFabricColor(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label htmlFor="woodColor">Wood color</label>
                            <input type="color" onChange={(e) => setWoodColor(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label htmlFor="metalColor">Metal color</label>
                            <input type="color" onChange={(e) => setMetalColor(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
