<template>
    <div>
        <div>
            子组件（父组件向子组件进行传值）：
            <span>{{inputName}}</span>
        </div>
    </div>
</template>
<script>
export default {
  // 接收父组件的值
  props: {
    inputName: String,
    required: true
  }
}
</script>
