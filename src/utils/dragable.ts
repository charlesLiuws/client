
import { ElMessage } from 'element-plus'
import { FILE_MAX_SIZE } from './option'
import { ref } from 'vue';

export let selectFile = ref(null)
export const dragenter = (e:any)=>{
    e.stopPropagation();
    e.preventDefault();
}
export const dragover = (e:any)=>{
    e.stopPropagation();
    e.preventDefault();
}
export const dragleave = (e:any)=>{
    e.stopPropagation();
    e.preventDefault();
}
export const drop = (e:any)=>{
    e.stopPropagation();
    e.preventDefault();
    const {files} = e.dataTransfer;
    const file = files[0];
    console.log(files);
    if(!file){
        return ElMessage.error({message:"请选择上传文件！"})
    }
    if(!file.type.startsWith("video") && !file.type.startsWith("image")){
        return ElMessage.error({message:"请上传视频或者图片格式的文件！"})
    }
    if(file.size > FILE_MAX_SIZE){
        return ElMessage.error({message:"文件大小不能超过2G！"})
    }
    selectFile = file;
}

