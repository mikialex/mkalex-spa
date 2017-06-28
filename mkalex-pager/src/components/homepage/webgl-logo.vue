<template>
  <section id="gl-logo-canvas">
  </section>
</template>

<script>
// import { Scene,PerspectiveCamera ,WebGLRenderer,BoxGeometry,MeshBasicMaterial,Mesh,AmbientLight} from 'three'
import * as THREE from 'three'
export default {
  data(){
    return{
      renderer:undefined,
      scene:undefined,
      camera:undefined,
      reA:undefined,
    }
  },
  mounted() {

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xfafafa, 1);
    document.getElementById('gl-logo-canvas').appendChild(this.renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x455667 });
    var cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;
    var animate =()=>{
      this.reA=window.requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
      // console.log(this.camera.aspect)
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
      this.renderer.setSize(window.innerWidth, window.innerHeight);

    }
  },

}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 110vh;
  background: rgba(0, 0, 0, 0.1);
  margin-top: -100px;
}
</style>

