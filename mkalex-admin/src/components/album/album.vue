<template>
  <div>
    <div class="upload-bar">
      <input type="file" class="file" style="display:none" @change="upload">
      <el-button @click="prepare" :disabled="isUploading">UPLOAD</el-button>
      <el-progress  class="upload-progress" v-if="isUploading"
      :text-inside="true" :stroke-width="18" :percentage="ratio"></el-progress>
    </div>
    <div class="container">
      <div class="image-block"
      v-for="image in currentImageList" :key="image.id">
        <div class="image-container">
          <img @click="viewBig(image.storage_name)"
          :src="getUrl(image.storage_name)" alt="">
        </div >
        <div class="delete op" @click="deleteImage(image.storage_name)"><i class="fas fa-times"></i></div>
        <div class="string op" @click="setImage(image.storage_name)" v-if="useforEditor"><i class="fas fa-copy"></i></div>
        <div class="string op" @click="setCoverImage(image.storage_name)" v-if="useforCover"><i class="fas fa-file-image"></i></div>
        <div class="info">
          <span class="name">{{image.name}}</span>
          <span class="id">{{image.id}}</span>
        </div>
        <span style="font-size:12px;">{{image.storage_name}}</span>
      </div>

      <mk-pager
      :list="imageList"
      :currentIndex="currentPage"
      :eachPage="eachPage"
      @switchPage="switchPage"
      ></mk-pager>

    </div>
    <div class="big-view" v-if="bigView" @click="closeBig">
      <img :src="BigUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bigView:false,
      BigUrl:'',
      isUploading: false,
      ratio:0,

      currentPage: 0,
      eachPageNumber: 8,
    }
  },
  computed:{
    imageList(){
      return this.$store.state.image.imageList;
    },
    currentImageList() {
      const current = this.currentPage;
      const from = current * this.eachPageNumber;
      const to = (current + 1) * this.eachPageNumber;
      return this.imageList.slice(from, to);
    }
  },
  props:['useforEditor','useforCover'],
  methods:{
    switchPage(page){
      this.currentPage = page;
    },
    prepare(){
      this.$el.querySelector('input').click();
    },
    async upload(){
      if(this.$el.querySelector('.file').files[0]){
        this.isUploading=true;
        await this.$store.dispatch('image/uploadImage',
        {
          file: this.$el.querySelector('.file').files[0],
          name:'testfile',
          progressCallBack:this.progress
        })
        this.isUploading=false;
      }
    },
    progress(e){
      this.ratio=Math.ceil(e.loaded/e.total);
    },
    async deleteImage(name){
      this.$confirm('删除图片会导致引用该图片的资源失效，是否删除？', '警告', {
          confirmButtonText: '取消',
          cancelButtonText: '删除',
          type: 'warning',
          closeOnPressEscape:false,
          closeOnClickModal:false,
          showClose:false
        }).then(() => {
        }).catch(() => {
          this.$store.dispatch('image/deleteImage',name);
        });
    },
    getUrl(url){
      return process.env.STATIC_ROOT + 'image/'+ url.split('.')[0] + '_overview.jpg';
    },
    viewBig(url){
      this.bigView=true;
      this.BigUrl=process.env.STATIC_ROOT + 'image/'+ url;
    },
    closeBig(){
      this.bigView=false;
      this.BigUrl='';
    },
    setImage(img){
      this.$emit('selectImage',img);
    },
    setCoverImage(img){
      this.$emit('selectCoverImage',img);
    },
    preventScroll(e){
      // console.log(e.target);
      // e.preventDefault();
    }
  },
  mounted(){
    this.$store.dispatch('image/getImageList');
    if(this.useforEditor||this.useforCover){
      document.body.addEventListener('mousewheel',this.preventScroll);
    }
  },
  destroy(){

  }
}
</script>


<style lang="scss" scoped>
.upload-bar{
  display: flex;
  align-items: center;
  >.upload-progress{
    width:200px;
    margin:15px;
  }
}

.container{
  overflow-y:scroll;
  height: calc( 100vh - 50px);
}

.image-block{
  width:200px;
  margin:5px;
  display: inline-block;
  position: relative;
  &:hover{
    >.op{
      opacity: 1;;
    }
  }
  >.image-container{
    border:1px solid #f7f7f7;
    border-radius:3px;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
      max-width: 200px;
      max-height: 200px;
    }
  }
  >.info{
    font-size:12px;
    padding:5px;
    display:flex;
    justify-content: center;

    >.name{
      margin-right:10px;

    }
    >.id{
      color:#aaa;
    }
  }
  >.delete{
    top:5px;
    right:5px;
  }
  >.string{
    top:5px;
    right:40px;
  }
  >.op{
    opacity: 0;
    transition:200ms;
    position: absolute;;
    width:30px;
    height:30px;
    background: rgba(0, 0, 0, 0.8);
    border-radius:15px;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}

.big-view{
  position:fixed;
  width:100vw;
  height:100vh;
  background: rgba(0,0,0,0.5);
  top:0px;
  left:0px;
  display: flex;
  align-items: center;
  justify-content: center;
  >img{
    max-width:100vw;
    max-height:100vh;
  }
}
</style>

