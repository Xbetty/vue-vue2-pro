<!--
 * @Author: your name
 * @Date: 2019-11-04 10:23:03
 * @LastEditTime: 2019-11-04 14:07:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2-pro\src\components\Plugins\html2canvas.vue
 -->
<template>
    <div>
        <div id="capture" ref="captureDom" style="padding:10px;background:#f5da55;">
            <h4 style="color: #000;">Hello World!</h4>
            <button @click="clickToPic">点击截图</button>
            <br/>
        </div>
        <img id="newImg" :src="imgSrc" alt="生成的截图"/>
    </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      imgSrc: ''
    }
  },
  methods: {
    clickToPic () {
    //   var captureDom = document.querySelector('#capture')
      var captureDom = this.$refs.captureDom
      html2canvas(captureDom).then(canvas => {
        console.log('canvas', canvas)
        // document.body.appendChild(canvas)
        /**
         * canvas转图片：
         * canvas.toDataURL(‘image/png’) ,返回生成的图片地址（base64）
         */
        this.imgSrc = canvas.toDataURL('image/png')
        console.log(this.imgSrc)

        /**
         * canvas图像转文件
         * canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality
         */
        // canvas.toBlob && canvas.toBlob(function (blob) {
        //   var url = URL.createObjectURL(blob)
        //   var newImg = document.querySelector('#newImg')
        //   newImg.onload = function () {
        //     URL.revokeObjectURL(url)
        //   }
        //   console.log(url)
        //   newImg.src = url
        // }, 'image/jpeg', 0.95)
      })
    }
  },
  mounted () {

  }
}
</script>
<style scoped>

</style>
