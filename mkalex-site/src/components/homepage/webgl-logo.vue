<template>
  <section id="gl-logo-canvas" @mousemove="handleMousemoveOnCanvas">
  </section>
</template>

<script>
import * as THREE from 'three' 
import {vec, face} from './logo-geometry'
import testV from './gl/test-vertex.glsl'
import testF from './gl/test-fragment.glsl'
// import THREE from './three-js-select'
export default {
  data(){
    return{
      renderer:null,
      scene:null,
      camera:null,
      raycaster:null,
      reA:null,
      mouse:null,
      mouseX:0,
      mouseY:0,
      intersected:null,
      shaderUniform: {
        time:       { value: 1.0 },
        resolution: { value: new THREE.Vector2(100,100) }
      }
    }
  },
  mounted() {
    console.log(testV)
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 1000);
    // this.camera.up = new THREE.Vector3(0,1,0);
    // this.camera.lookAt(new THREE.Vector3( 0, 0, -50 ))
    this.renderer = new THREE.WebGLRenderer();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xfafafa, 1);
    document.getElementById('gl-logo-canvas').appendChild(this.renderer.domElement);
    
    //load logo geometry
    face.forEach((face) =>{
      let geometry = new THREE.Geometry();
      face.forEach((point)=>{
        point--;
        geometry.vertices.push(new THREE.Vector3(vec[point][0], vec[point][1], vec[point][2]))
      })
      geometry.faces.push(new THREE.Face3(0,1,2))
      geometry.computeBoundingSphere();
      geometry.computeFaceNormals();
      let material = new THREE.MeshBasicMaterial({ color: 0x000000 });
      material.side = THREE.DoubleSide;
      this.scene.add(new THREE.Mesh(geometry, material));
    })

    this.camera.position.set(0,0,1);
    this.camera.lookAt(new THREE.Vector3( 0, 0, -50 ))

     
      // let materialS = new THREE.ShaderMaterial( {
      //   uniforms: this.shaderUniform,
      //   vertexShader: testV,
      //   fragmentShader:testF
      // } );
      // let geometryS = new THREE.PlaneBufferGeometry( 1,1,1,1 );
      // let meshS = new THREE.Mesh( geometryS, materialS );
      // this.scene.add( meshS );

    // let geometry = new THREE.Geometry();
    // vec.forEach((element) =>{
    //   geometry.vertices.push(new THREE.Vector3(element[0],element[1],element[2]))
    // });
    // face.forEach((element) =>{
    //   geometry.faces.push(new THREE.Face3(element[0]-1,element[1]-1,element[2]-1))
    // })
    // geometry.computeBoundingSphere();
    // geometry.computeFaceNormals();
    // var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    // material.side = THREE.DoubleSide;
    // var logoG = new THREE.Mesh(geometry, material);
    // this.scene.add(logoG);


    // var axisHelper = new THREE.AxisHelper( 50 );
    // this.scene.add( axisHelper );

    var animate =()=>{
      this.reA=window.requestAnimationFrame(animate);

      //mouse perpective change effect
      if(this.mouseX!==0&& this.mouseY!==0){ //prevent mobile inital screen misposition
        let halfWidth=window.innerWidth/2
        let halfHeight=window.innerHeight/2
        let xOffset=(this.mouseX-halfWidth)/halfWidth;
        let yOffset=(this.mouseY-halfHeight)/halfHeight;
        let deltaCenter=xOffset*xOffset+yOffset*yOffset
        // console.log(this.renderer.domElement.width)
        this.camera.position.x = -xOffset*deltaCenter*20;
        this.camera.position.y = yOffset*deltaCenter*20;
        // this.camera.position.x = xOffset*100;
        // this.camera.position.y = yOffset*100;
        this.camera.lookAt(new THREE.Vector3( 0, 0, -50 ))
        // logoG.rotation.y = this.mouseY*0.01;
      }

      //hover change
      this.raycaster.setFromCamera( this.mouse, this.camera );
      let intersects = this.raycaster.intersectObjects( this.scene.children );
      if( this.intersected){
        this.intersected.object.material.color.set( 0x000000 );
        this.intersected=null;
      }
      if(intersects.length>0){
        this.intersected=intersects[ 0 ];
        this.intersected.object.material.color.set( 0xff0000 );
      }

      this.shaderUniform.time.value += 0.05;

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
      this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	    this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    },
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

