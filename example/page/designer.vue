<template>
  <kr-print-designer
    ref="printDesigner"
    :temp-value="value"
    :widget-options="widgets"
    @save="handleSave"
  />
</template>
<script>
import { OutStockOptions, InStockOptions } from '../data/options'
export default {
  data() {
    return {
      index: '',
      value: {
        title: 'demo',
        width: 750,
        height: 550,
        pageWidth: 76,
        pageHeight: 130,
        tempItems: [],
      },
      widgets: OutStockOptions,
    }
  },

  created() {
    this.index = this.$route.query.index
    try {
      let tempList = JSON.parse(localStorage.getItem('tempList')) || []
      this.value = tempList[this.index]
      this.widgets = this.value.type == 1 ? OutStockOptions : InStockOptions
    } catch (err) {
      console.error(err)
    }
    //根据页面宽高（mm）计算出模板宽高（px）
    // this.value.width = this.value.pageWidth * this.getOneMmsPx()
    // this.value.height = this.value.pageHeight * this.getOneMmsPx()
  },
  //页面宽高改变后，改变模板的宽高
  // watch: {
  //   'value.pageWidth': {
  //     handler(newVal, oldVal) {
  //       console.log(newVal, '宽')
  //       this.value.width = newVal * this.getOneMmsPx()
  //       console.log(newVal * this.getOneMmsPx())
  //     },
  //     deep: true,
  //   },
  //   'value.pageHeight': {
  //     handler(newVal, oldVal) {
  //       console.log(newVal, '高')
  //       this.value.height = newVal * this.getOneMmsPx()
  //     },
  //     deep: true,
  //   },
  // },
  methods: {
    handleSave(data) {
      let tempList = JSON.parse(localStorage.getItem('tempList')) || []
      tempList[this.index] = data
      localStorage.setItem('tempList', JSON.stringify(tempList))
      this.$router.back()
    },
    // 手动初始话模板数据
    initTemp() {
      this.$refs.printDesigner.initTemp(this.value, this.widgets)
    },
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
