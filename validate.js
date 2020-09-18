// 自定义规则验证
// var validatePass = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('请输入密码'))
//   } else {
//     if (this.ruleForm.checkPass !== '') {
//       this.$refs.ruleForm.validateField('checkPass')
//     }
//     callback()
//   }
// }
// rules: {
//   pass: [{
//     validator: validatePass,
//     trigger: 'blur'
//   }]
// }

// 手机号验证
export var phoneNumber = (rule, value, callback) => {
  var regex = /^1[3456789][0-9]{9}$/
  if (!value || !(regex.test(value))) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}
// 电子邮箱验证
export var emailBox = (rule, value, callback) => {
  var regex = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$')
  if (!value || !(regex.test(value))) {
    callback(new Error('请输入正确的电子邮箱'))
  } else {
    callback()
  }
}
// 不允许输入空格！
export var businessCode = (rule, value, callback) => {
  if (/ /.test(value)) {
    callback(new Error('不允许输入空格！'))
  } else {
    callback()
  }
}
// pdf文件验证
export var card = (rule, value, callback) => {
  if (!/.pdf/.test(value)) {
    callback(new Error('请上传pdf文件'))
  } else {
    callback()
  }
}

// 邮政编码
export var postcode = (rule, value, callback) => {
  var regex = /^[0-9]{6}$/
  if (!value || !(regex.test(value))) {
    callback(new Error('邮政编码必须是6位数字'))
  } else {
    callback()
  }
}

// 最多保留6位小数
export var decimal = (rule, value, callback) => {
  var regex = /^(([1-9][0-9]*)|(([0]\.\d{0,6}|[1-9][0-9]*\.\d{0,6})))$/
  if (!value || !(regex.test(value))) {
    callback(new Error('请输入数字，且最多保留6位小数'))
  } else {
    callback()
  }
}


// 保留两位小数 无范围限制
export var keepDecimals = (rule, value, callback) => {
  var regex = new RegExp('^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$')
  if (!value || !(regex.test(value))) {
    callback(new Error('只能保留两位小数'))
  } else {
    callback()
  }
}

//  简单身份证验证
export var idcard = (rule, value, callback) => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!value || !(reg.test(value))) {
    callback(new Error('请输入正确的身份证号'))
  } else {
    callback()
  }
}

//  禁止输入汉字
export var isChineseChar = (rule, value, callback) => {
  var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
  if (!value || (reg.test(value))) {
    callback(new Error('不允许输入汉字'))
  } else {
    callback()
  }
}
