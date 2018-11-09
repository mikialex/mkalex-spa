<template>
  <container-mid>
    <div class="experience">
      <h2 class="title">Experience</h2>

      <div v-for="exp in experience" :key="exp.work" class="experience-company">
        <div class="company-title">
          <h3>{{exp.work}}</h3>
          <span class="company-time">{{exp.time}}</span>
        </div>
        <div v-for="des in exp.decription" :key="des.time" class="work-des">
          <p>{{des.work}}</p>
          <span v-if="des.time" class="work-time">{{des.time}}</span>
        </div>
      </div>

    </div>
  </container-mid>
</template>

<script>
export default {
  data() {
    return {
      experience: [
        {
          work: "Qunhe InfoTech (KUJIALE)",
          workDes: "World largest interior design saas platform provider",
          job: "software engineer",
          time: "2017 12 - NOW",
          decription: [
            {
              work: `
              Founder and maintainer of ExaGraphic System, aimed for webgl 3D
              content rendering optimization. Responsible for design and implementation 
              of high performance render data structure and scene graph building and updating;
              Constuction of high performance space index data structure; Dynamic progressive
              render optimzation; IndexedDB disk swap component for memory swap system
              for low memory mobile device; Progressive ordered buffer loading and swapping impovement;
              `,
              time: "2018 4 - now"
            },
            {
              work: `
              Preliminary product and user interface design of coohom.com, which the 
              first international version of kujiale.com.
              Responsible for frontend interface implemenation use mix of Vue server side render
              and single page application architecture.
              `,
              time: "2017 12 - 2018 4"
            }
          ]
        },
        {
          work: "Shanhai BQ InfoTech",
          workDes: "Startup company with my friends in university",
          job: "frontend developer; product designer; tech partner",
          time: "2016 7 - 2017 10",
          decription: [
            {
              work: `
              State Grid xinjiang marketing big data frontend, design and implementate use
              Angular and Echarts.
              `
            },
            {
              work: `
              Qpen, online math education platform for college student, design and implementate
               use Vue. Includes marketing material design;
              `
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.experience {
  margin-top: 20px;
  padding: 10px;
  font-family: futura;
}

.title {
  margin: 0px;
}

.experience-company {
  font-size: 13px;
  color: #444;
  .company-title {
    display: flex;
    align-items: baseline;
  }
}

.work-des {
  display: flex;
  flex-direction: column;
  > p {
    margin: 0px;
  }
  margin-top: 10px;
  margin-bottom: 10px;
}

.company-time {
  font-size: 12px;
  margin-left: 10px;
  color: #999;
}

.work-time {
  color: #999;
  font-size: 12px;
  align-self: flex-end;
}
</style>
