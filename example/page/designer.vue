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
import { mychooseOptions } from '../data/mychooseOptions'
export default {
  data() {
    return {
      index: '',
      value: {
        title: '拣选单',
        width: 791,
        height: 1118,
        pageWidth: 210,
        pageHeight: 297,
        tempItems: [],
      },
      widgets: mychooseOptions,
      // value: {
      //   title: 'demo',
      //   width: 750,
      //   height: 550,
      //   pageWidth: 76,
      //   pageHeight: 130,
      //   tempItems: [],
      // },
      // widgets: OutStockOptions,
    }
  },

  created() {
    this.index = this.$route.query.index
    let tempList = JSON.parse(localStorage.getItem('tempList')) || []
    this.value = tempList[this.index]
    // try {
    //   let tempList = JSON.parse(localStorage.getItem('tempList')) || []
    //   this.value = tempList[this.index]
    //   this.widgets = this.value.type == 1 ? OutStockOptions : InStockOptions
    // } catch (err) {
    //   console.error(err)
    // }
    //根据页面宽高（mm）计算出模板宽高（px）
    this.value.width = this.value.pageWidth * this.getOneMmsPx()
    this.value.height = this.value.pageHeight * this.getOneMmsPx()
  },
  //页面宽高改变后，改变模板的宽高
  // watch: {
  //   'value.pageWidth': {
  //     handler(newVal, oldVal) {
  //       this.value.width = newVal * this.getOneMmsPx()
  //       this.initTemp()
  //     },
  //     deep: true,
  //   },
  //   'value.pageHeight': {
  //     handler(newVal, oldVal) {
  //       this.value.height = newVal * this.getOneMmsPx()
  //       console.log('页面高度改变', newVal)
  //       this.initTemp()
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
