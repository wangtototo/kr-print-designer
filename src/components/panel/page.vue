<template>
  <div>
    <el-form label-width="80px" :model="pageInfo" size="mini" class="kr-form">
      <el-row>
        <el-form-item label="模板名称">
          <el-input v-model="pageInfo.title" class="full-w"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="模板宽度">
            <el-input-number
              v-model="pageInfo.width"
              controls-position="right"
              :min="1"
              class="min-input"
              :precision="0"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模板高度">
            <el-input-number
              v-model="pageInfo.height"
              controls-position="right"
              :min="1"
              class="min-input"
              :precision="0"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="纸张宽度">
          <el-input-number
            v-model="pageInfo.pageWidth"
            controls-position="right"
            :min="1"
            class="min-input"
          ></el-input-number>
          <span class="unit-text">(mm)</span>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="纸张高度">
          <el-input-number
            v-model="pageInfo.pageHeight"
            controls-position="right"
            :min="1"
            class="min-input"
          ></el-input-number>
          <span class="unit-text">(mm)</span>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  computed: {
    pageInfo() {
      return this.$vptd.state.page
    },
  },
  watch: {
    'pageInfo.pageWidth': {
      handler(newVal, oldVal) {
        this.$vptd.commit('setModelWidth', newVal * this.getOneMmsPx())
      },
      deep: true,
    },
    'pageInfo.pageHeight': {
      handler(newVal, oldVal) {
        this.$vptd.commit('setModelHeight', newVal * this.getOneMmsPx())
      },
      deep: true,
    },
  },
  methods: {
    //获取px和mm的转换比例
    getOneMmsPx() {
      let div = document.createElement('div')
      div.id = 'mm'
      div.style.width = '1mm'
      document.querySelector('body').appendChild(div)
      // 原生方法获取浏览器对元素的计算值
      let mm1 = document.getElementById('mm').getBoundingClientRect()
      // console.log(mm1)
      return mm1.width
    },
  },
}
</script>

