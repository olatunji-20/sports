<template>
    <div class="main">
        <div class="submain">

        </div>
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
        <br />
        <p>fetching {{ topic }}...</p>
    </div>
</template>

<script>
export default {
    name: "Preloader",
    data() {
        return {

        }
    },
    props: {
        topic: String,
    }
}
</script>

<style scoped>
.main {
    width: 200px;
    height: 100px;
    margin: 0px auto;
}
.submain {
    display: block;
}
@keyframes jump {
    0% {
        top: 20px;
    }
    25% {
        top: 40px;
    }
    50% {
        top: 20px
    }
    75% {
        top: 40px;
        transform: rotate(90deg);
    }
    100% {
        top: 20px;
    }
}
.one, .two, .three, .four {
    width: 15px;
    height: 15px;
    background: tomato;
    margin: 0px 10px;
    display: inline-block;
    position: relative;
    top: 40px;
    animation-name: jump;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
p {
    display: block;
    margin-top: 40px;
    font-size: 14px;
}
</style>