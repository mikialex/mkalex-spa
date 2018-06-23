<template>
  <div class="image-block">
    <div class="image-container">
      <img @click="viewBig(image.storage_name)"
      :src="getUrl(image.storage_name)" alt="">
    </div >
    <div class="ops">
      <div class=" op" @click="deleteImage(image.storage_name)"><i class="fas fa-times"></i></div>
      <div class=" op" :id="'img'+image.id" ><i class="fas fa-copy"></i></div>
      <div class=" op" @click="setCoverImage(image.storage_name)" v-if="canSetCover"><i class="fas fa-file-image"></i></div>
    </div>
    <div class="info">
      <span class="name">{{image.name}}</span>
      <span class="id">{{image.id}}</span>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
var clipboard ;
export default {
  props:{
    image:{require: true},
    canSetCover:{default: false}
  },
  mounted(){
    clipboard = new ClipboardJS('#img'+this.image.id, {
    text: (trigger) => {
        return this.image.storage_name;
    }
});
  },
  destory(){
    clipboard.destroy();
  },
  methods:{
    getUrl(url){
      return process.env.STATIC_ROOT + 'image/'+ url.split('.')[0] + '_overview.jpg';
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
    setCoverImage(img){
      this.$emit('selectCoverImage',img);
    },
    copyToClipboard(){
      this.image
    }
  }
}
</script>

<style lang="scss" scoped>
.image-block{
  width:200px;
  margin:5px;
  display: inline-block;
  position: relative;
  &:hover{
    .op{
      opacity: 0.8;
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
}

.ops{
  position: absolute;
  top:0px;
  right:0px;
  display: flex;
  width:100%;
  flex-direction: row-reverse;
  padding:2px;
}

  .op{
    opacity: 0;
    margin:2px;
    transition:200ms;
    width:30px;
    height:30px;
    background: rgba(0, 0, 0, 0.8);
    border-radius:15px;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
      opacity: 0.9 !important;
      transition:0ms;
    }
    &:active{
      opacity: 1 !important;
    }
  }
</style>


