<script setup lang="ts">
import { ElButton,ElIcon } from 'element-plus'
import { onMounted, ref } from 'vue'
import { dragenter, drop,dragover,dragleave, selectFile} from '../utils/dragable'

const uploadRef = ref();
onMounted(()=>{
    uploadRef.value.addEventListener("dragenter", dragenter)
    uploadRef.value.addEventListener("drop", drop)
    uploadRef.value.addEventListener("dragover", dragover)
    uploadRef.value.addEventListener("dragleave", dragleave)
    console.log(selectFile)
})

</script>

<template>
  <div class="upload" ref="uploadRef">
    <ElIcon :size="30">
        <Edit />
    </ElIcon>
  </div>
  <ElButton type="primary">上传</ElButton>
</template>

<style scoped>
.upload{
    height: 200px;
    width: 100%;
    border-radius: 10px;
    line-height: 200px;
    text-align: center;
    background: #f5f5f5;
    margin-bottom: 20px;
}
</style>
