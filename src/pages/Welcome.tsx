import React, {useEffect} from 'react';
import {Scene,WebGLRenderer,PerspectiveCamera,LineBasicMaterial,Vector3,BufferGeometry,Line} from "three";


export default (): React.ReactNode => {
  useEffect(()=>{

    const render = new WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight );
    window.document.getElementById("demo")?.appendChild(render.domElement);

    const camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 200 );
    camera.position.set(0,0,0,100);
    camera.lookAt(0,0,0)

    const scene = new Scene();
    scene.background = { color: 0xffffff }
    const material = new LineBasicMaterial({ color: 0x0000ff } );

    const points = [];
    points.push(new Vector3(-10,0,0))
    points.push(new Vector3(0,10,0))
    points.push(new Vector3(10,0,0))

    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry,material);

    scene.add(line);
    render.render(scene,camera);

  })




  return (
    <>
      <div id="demo"/>
    </>
  );
};
