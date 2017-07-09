<template>
  <section id="gl-logo-canvas" @mousemove="handleMousemoveOnCanvas">
  </section>
</template>

<script>
import * as THREE from 'three' 
import {vec, face} from './logo-geometry'
// import THREE from './three-js-select'
export default {
  data(){
    return{
      renderer:undefined,
      scene:undefined,
      camera:undefined,
      reA:undefined,
      mouseX:0,
      mouseY:0,
    }
  },
  mounted() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0,0,0);
    this.camera.up = new THREE.Vector3(0,1,0);
    this.camera.lookAt(new THREE.Vector3( 0, 0, -50 ))
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xfafafa, 1);
    document.getElementById('gl-logo-canvas').appendChild(this.renderer.domElement);

    let geometry = new THREE.Geometry();

    vec.forEach((element) =>{
      geometry.vertices.push(new THREE.Vector3(element[0],element[1],element[2]))
    });
    face.forEach((element) =>{
      geometry.faces.push(new THREE.Face3(element[0]-1,element[1]-1,element[2]-1))
    })

    geometry.computeBoundingSphere();
    geometry.computeFaceNormals();

    var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    material.side = THREE.DoubleSide;
    var logoG = new THREE.Mesh(geometry, material);

    // controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
    // // controls.addEventListener('change', render);
    // controls.enableZoom = true;

    // var axisHelper = new THREE.AxisHelper( 50 );
    // this.scene.add( axisHelper );
    this.scene.add(logoG);
    var animate =()=>{
      this.reA=window.requestAnimationFrame(animate);
      let halfWidth=window.innerWidth/2
      let halfHeight=window.innerHeight/2
      let xOffset=(this.mouseX-halfWidth)/halfWidth;
      let yOffset=(this.mouseY-halfHeight)/halfHeight;
      // console.log(this.renderer.domElement.width)
      this.camera.position.x = xOffset*yOffset*xOffset*500;
      this.camera.position.y = yOffset*xOffset*yOffset*500;
      // this.camera.position.x = xOffset*100;
      // this.camera.position.y = yOffset*100;
      this.camera.lookAt(new THREE.Vector3( 0, 0, -50 ))
      // logoG.rotation.y = this.mouseY*0.01;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
    window.addEventListener('resize', this.windowResize);
  },
  destroyed(){
    window.cancelAnimationFrame(this.reA);
    window.removeEventListener('resize', this.windowResize);
  },
  methods:{
    windowResize(){
      this.camera.aspect=window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);//fixme

    },
    handleMousemoveOnCanvas(e){
      this.mouseX=e.clientX
      this.mouseY=e.clientY
    }
  },

}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 110vh;
  // z-index: -1;
  // position: relative;
}
</style>

