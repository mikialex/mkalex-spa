<template>
<div class="reader-back">
  <container-mid>
    <block-flex :end="true">
      <section class="reader">
        <h1>{{info.title}}</h1>
        <h2>{{info.sub_title}}</h2>
        <hr class="slash-hr">
        <div class="placeholder" v-if="!hasLoaded"></div>
        <markdown-render 
        v-if="hasLoaded"
        :content="info.content" 
        :urlname="this.$route.params.u_name"></markdown-render>
        <hr class="slash-hr">
        <div class="footer">
          <span class="signature">mkalex {{info.publish_time}}</span>
        </div>
      </section>
    </block-flex>
  </container-mid>
</div>
</template>

<script>
import markdown from "@/components/markdown-render";
export default {
  components: {
    "markdown-render": markdown
  },
  data: function() {
    return {
      info: {},
      hasLoaded: false
    };
  },
  mounted() {
    this.$ajax
      .get(this, this.$ajax.apis.articleDetial, {
        urlname: this.$route.params.u_name
      })
      .then(data => {
        this.info = data;
        this.hasLoaded = true;
      })
  }
};
</script>

<style lang="scss" scoped>
.reader-back {
  background: #eee;
  width: 100vw;
  min-height: 100vh;
}

.reader {
  margin-top: 100px;
  margin-bottom: 100px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #ddd;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  @media (min-width: 500px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  > h1 {
    font-size: 30px;
    font-family: futura;
    color: rgb(72, 117, 133);
    text-align: center;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  > h2 {
    font-size: 20px;
    font-family: futura;
    color: #444;
    text-align: center;
    margin-bottom: 20px;
  }
  > span {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}

.placeholder {
  height: 300px;
}

.slash-hr {
  border: 1px solid #ddd;
  border-bottom: 1px solid #fff;
}

.footer {
  height: 50px;
  .signature {
    float: right;
    font-size: 14px;
    color: #666;
    font-family: futura;
  }
}
</style>



