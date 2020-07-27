<template>
    <div class="avatar">
        <img :src="avatar" alt="">
        <span>欢迎你! {{nickname}}</span>
    </div>
</template>

<script>
export default {
    props: {
        avatar: { type: String, require: true },
        nickname: { type: String, require: true },
    }
}
</script>


<style>
.avatar img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>