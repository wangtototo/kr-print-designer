export const mychooseOptions = [{
    type: 'braid-txt',
    isEdit: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: ''
  },
  {
    type: 'bar-code',
    isEdit: 1,
    title: '拣选单条码',
    value: '{拣选单条码}',
    defaultValue: '1234567890',
    name: 'stockoutCode',
    lodopStyle: {
      QRCodeVersion: '1',
      QRCodeErrorLevel: 'L'
    },
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '拣选单后5位数',
    value: '{拣选单后5位数}',
    defaultValue: '12345',
    name: 'chooseNoLast'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '拣选单类型',
    value: '{拣选单类型}',
    defaultValue: '',
    name: 'chooseType'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '是否补打',
    value: '{是否补打}',
    defaultValue: '',
    name: 'reprintType'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '库区',
    value: '{库区}',
    defaultValue: '',
    name: 'reservoirArea'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '商品品类',
    value: '{商品品类}',
    defaultValue: '0',
    name: 'shopTypeNum'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '商品数量',
    value: '{商品数量}',
    defaultValue: '0',
    name: 'shopNums'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '订单数量',
    value: '{订单数量}',
    defaultValue: '0',
    name: 'orderNums'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '预计出库时间',
    value: '{预计出库时间}',
    defaultValue: '2021-11-21 20:00:00',
    name: 'predictGoOutTime'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '货主',
    value: '{货主}',
    defaultValue: '',
    name: 'ownerName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '快递',
    value: '{快递}',
    defaultValue: '',
    name: 'expressName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '平台',
    value: '{平台}',
    defaultValue: '',
    name: 'plantFormName'
  },
  {
    type: 'braid-table',
    isEdit: 0,
    title: '拣选单商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [],
    columnsAttr: [{
        title: '序号',
        value: '{序号}',
        name: 'indexNum',
      },
      {
        title: '库位',
        value: '{库位}',
        name: 'storageLocation',
      },
      {
        title: '条码',
        value: '{条码}',
        name: 'barCode',
      },
      {
        title: '商品名称',
        value: '{商品名称}',
        name: 'productName',
      },
      {
        title: '数量',
        value: '{数量}',
        name: 'quantity',
      },
      {
        title: '配货位置',
        value: '{配货位置}',
        name: 'location',
      },
    ]
  },
  {
    type: 'braid-html',
    isEdit: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
    name: ''
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '打印人',
    value: '{打印人}',
    defaultValue: '',
    name: 'printerName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '打印时间',
    value: '{打印时间}',
    defaultValue: '',
    name: 'printerTime'
  },
  // {
  //   type: 'braid-txt',
  //   isEdit: 1,
  //   title: '打印时间',
  //   value: '{打印时间}',
  //   defaultValue: '',
  //   name: 'printerTime'
  // },
]
