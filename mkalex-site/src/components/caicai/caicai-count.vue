<template>
<div style="position:relative">
  <div class="caicai">
    <svg width="80px" height="70px" viewBox="0 0 162 144">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD-Copy-2" transform="translate(-640.000000, -383.000000)">
          <g id="Page-1" transform="translate(640.000000, 383.000000)">
            <path d="M157.581054,24.1014816 C155.235363,19.3013856 147.625392,
                6.0029856 131.359211,1.4551776 C116.16574,-2.7928224 103.755907,3.4613856 100.927381
                ,4.9923936 C87.1099034,12.4720416 82.2194025,25.3606176 80.9930366,29.0815776 C79.7669584
                ,25.3606176 74.8764575,12.4720416 61.0589798,4.9923936 C58.230454,3.4613856 45.820621
                ,-2.7928224 30.6271503,1.4551776 C14.3609691,6.0029856 6.75099751,19.3013856 4.40530657,
                24.1014816 C-1.00284618,35.1670176 -0.116881705,45.4319136 0.376887389,50.4053856 C2.21327105,
                68.9090976 12.9751929,81.6421536 22.4370863,92.8375776 C24.832557,95.6714976 29.1003794,
                100.48801 44.3056476,113.765386 C54.1767133,122.384938 66.4141876,132.610666 80.8836938,
                143.720266 L80.8839815,143.888746 C80.9208128,143.86081 80.9564931,143.832874 80.9930366,
                143.80465 C81.0298679,143.832874 81.0655481,143.86081 81.1023794,143.888746 L81.1026671,
                143.720266 C95.5721734,132.610666 107.809648,122.384938 117.680426,113.765386 C132.885982,
                100.48801 137.153804,95.6714976 139.548987,92.8375776 C149.011168,81.6421536 159.77309,
                68.9090976 161.609474,50.4053856 C162.103243,45.4319136 162.989207,35.1670176 157.581054,
                24.1014816" id="Fill-1" fill="#FC3550"></path>
          </g>
        </g>
      </g>
    </svg>
    <span @click="countDays()">miki & caicai
      <br> been together
      <br> {{dayShow}} days !</span>
  </div>

  <img src="../../assets/caicai.png" alt="" class="back-img">
  </div>
</template>

<script>
import Tween from '@tweenjs/tween.js'
export default {
  data() {
    return {
      days:0,
      dayShow: 0,
      tween:{},
      request: 0,
      inter:0,
    }
  },
  mounted(){
    this.tween=require('@tweenjs/tween.js')
    this.days=this.countDays()
    this.inter=window.setInterval(()=>{
      this.days=this.countDays()
    },10000)
  },
  destroyed(){
    this.tween.removeAll()
    window.cancelAnimationFrame(this.request);
    window.clearInterval(this.inter);
  },
  watch: {
    days: function (newValue, oldValue) {
      window.cancelAnimationFrame(this.request);
      var vm = this
      function animate(time) {
        vm.request=window.requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      var TWEEN = this.tween;
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 3000)
        .onUpdate(function () {
          vm.dayShow = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    }
  },
  methods: {
    countDays() {
      let sDate1 = new Date()
      let sDate2 = new Date()
      sDate2.setFullYear(2017)
      sDate2.setMonth(2)
      sDate2.setDate(16)
      return this.days= parseInt(Math.abs(sDate1.getTime() - sDate2.getTime()) / 1000 / 60 / 60 / 24) + 1;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';
.caicai {
  width: rem(200px);
  height: rem(200px);
  border-radius: rem(200px);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >span {
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
    font-size: rem(20px);
    font-family: JosefinSans;
  }
}

.back-img{
  width: rem(200px);
  height: rem(200px);
  border-radius: 100%;
  position:absolute;
  top:0px;
  opacity: 0;
  transition: 1s;
  &:hover{
    opacity: 1;
  }
}
</style>
