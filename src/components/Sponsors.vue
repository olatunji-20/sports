<template>
    <section>
        <div class="container">
            <div class="scroll">
                <div class="spons"><img src="../../public/assets/apple.png" alt="apple" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/champion.png" alt="champion" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/nike.png" alt="nike" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/reebok.png" alt="reebok" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/sony.png" alt="sony" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/airbnb.png" alt="airbnb" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/amazon.png" alt="amazon" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/grab.png" alt="grab" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/netflix.png" alt="netflix" class="sponsor" /></div>
                <div class="spons"><img src="../../public/assets/sony.png" alt="sony" class="sponsor" /></div>
            </div>
        </div>
        <div class="sky">
            <div class="sky1"><img class="image" src="../../public/assets/fly.png" /></div>
            <div class="sky2">
                <h1>Subscribe to newsletter</h1>
                <p>Stay up to date with our latest news and promotions by signing up for our newsletter.</p>
                <input type="text" class="input">
                <input style="display: inline; height: 15px; width: 15px;" type="checkbox" />
                <p style="display: inline">I agree to the Terms & Conditions and Privacy Policy</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Sponsors",
    data() {
        return {

        }
    }
}   
</script>

<style scoped>
section {
    width: 100%;
    height: auto;
}

.container {
    width: 100%;
    height: auto;
    padding: 0.4375rem;
    overflow: auto;
    margin-bottom: 0.625rem;
}

::-webkit-scrollbar {
    height: 0.3125rem;
    padding: 0.3125rem;
}

::-webkit-scrollbar-track {
    background-color: #65DAFF;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #F77E23;
}

.scroll {
    height: 100%;
    width: 125rem;
    padding: 0.9375rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.spons {
    padding: 1.25rem;
    width: 5.25rem;
    height: 5.25rem;
}

.sponsor {
    width: 100%;
    height: 100%;
}

.sky {
    width: 100%;
    height: 31.25rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.sky1 {
    width: 50%;
    height: 31.25rem;
}

.sky .sky1 .image {
    width: 100%;
    height: 100%;
}

.sky2 {
    width: 50%;
    height: 31.25rem;
    background-color: whitesmoke;
    padding: 6.25rem 7.5rem 6.26rem 5rem;
    text-align: left;
}

.input {
    width: 100%;
    height: 2.5rem;
    border: 1px solid black;
    margin: 3.75rem auto;
}

@media screen and (max-width: 500px) {
    .scroll {
        overflow: auto;
    }

    ::-webkit-scrollbar {
        height: 0px;
    }

    .sky {
        width: 100%;
        height: 700px;
    }

    .sky1 {
        width: 100%;
        height: 350px;
    }

    .sky2 {
        width: 100%;
        height: 350px;
        padding: 10px;
    }

    .input {
        margin: 15px auto;
    }
}
</style>