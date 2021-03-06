const codeString = `
<h4>基本操作</h4>
<div>
  <button onclick="toastClear()">关闭</button>
  <button onclick="toastText('你好啊')">显示文本</button>
  <button onclick="toasInfo()">显示不会自动关闭的信息</button>
  <button onclick="toastSuccess()">显示成功</button>
  <button onclick="toastError()">显示失败</button>
  <button onclick="toastWarning()">显示警告</button>
  <button onclick="showLoading()">显示加载中</button>
  <button onclick="showLoading2()">动态修改文本</button>
  <button onclick="toastForbidClick()">禁止点击的Toast</button>
</div>

<h4>加载有 8 中样式可选</h4>
<div>
  <button onclick="showLoadingWithStyle('style0')">样式0</button>
  <button onclick="showLoadingWithStyle('style1')">样式1</button>
  <button onclick="showLoadingWithStyle('style2')">样式2</button>
  <button onclick="showLoadingWithStyle('style3')">样式3</button>
  <button onclick="showLoadingWithStyle('style4')">样式4</button>
  <button onclick="showLoadingWithStyle('style5')">样式5</button>
  <button onclick="showLoadingWithStyle('style6')">样式6</button>
  <button onclick="showLoadingWithStyle('style7')">样式7</button>
</div>



function toastClear() {
  clearInterval(time)
  Toast.clear()
}

function toastText(text) {
  Toast.text(text)
}

function toasInfo() {
  Toast.info("请输入姓名", {
    // duration 设置为 0 或负数，则不会自动关闭
    duration: 0,
  })
}

function toastSuccess() {
  Toast.success("操作成功")
}

function toastError() {
  Toast.error("操作失败")
}

function toastWarning() {
  Toast.warning("请输入姓名")
}

function showLoading() {
  // loading 默认不会自动关闭，如果需要自动关闭请设置 duration
  // Toast.loading({
  //   duration: 1000,
  //   text: "加载中...",
  // })

  Toast.loading()
}

function showLoadingWithStyle(style) {
  Toast.loading({
    text: "加载中",
    style,
  })
}

let time

function showLoading2() {
  clearInterval(time)
  const loading = Toast.loading({
    text: "加载中",
  })

  let count = 3

  time = setInterval(() => {
    loading.setText("倒计时：" + count)
    count--
    if (count === -1) {
      Toast.success("操作成功")
      clearInterval(time)
    }
  }, 1000)
}

function toastForbidClick() {
  Toast.info("禁止点击哦,10秒后关闭", {
    forbidClick: true,
    duration: 1000 * 10,
  })
}

`