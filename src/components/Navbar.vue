<template>
    <section>
        <div>
            <section class="lff">
                <div class="logo-container">
                    <img src="../../public/assets/lovesport.png" class="logo" />
                </div>
                <!-- <ul class="options">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul> -->
                <div class="search-bar">
                    <input placeholder="Search..." />
                    <div class="love"><img src="../../public/assets/love.png" alt="love" class="luv"></div>
                    <div class="love"><img src="../../public/assets/picon.png" alt="" class="luv"></div>
                </div>
            </section>
            <div class="under">
                <ul>
                    <li @mouseenter="dropdown" @mouseleave="undrop" class="dropdown">Sports</li>
                        <div v-show="drop" class="dropdown-content">
                            <p>fhhfifie</p>
                            <p>jdhhfioi</p>
                        </div>
                    <li>Footwear</li>
                    <li>Apparel</li>
                    <li>Bestsellers</li>
                    <li>Special deals</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            drop: false
        }
    },
    methods: {
        dropdown() {
            this.drop = true
        },
        undrop() {
            this.drop =  false
        }
    },
}
</script>

<style scoped>
section {
    border: 4px solid red;
}

.lff {
    /* border: 1px solid green; */
    width: 100%;
    height: 80px;
    background-color: black;
    text-align: left;
}

.main-container {
    border: 9px solid blueviolet;
    width: 100%;
    height: auto;
    padding: 70px 0px 0px;
}
.logo-container {
    width: 200px;       
    height: 35px;
    border: 1px solid red;
    position: relative;
    float: left;
    display: inline;
    margin: 25px 20px 15px 80px;
}

.logo {
    width: 100%;
    height: 100%;
}

/* .options {
    display: inline;
}

.options li {
    list-style-type: none;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 17px;
    border: 1px solid green;
    color: white;
} */

.search-bar {
    border: 1px solid blue;
    width: 400px;
    height: 45px;
    padding: 10px;
    margin: 20px 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    float: right;
}

.search-bar input {
    width: 300px;
    text-indent: 20px;
}

.love {
    width: 30px;
    height: 25px;
    background-color: lawngreen;
    padding: 5px;
}

.luv {
    width: 100%;
    height: 100%;
}
.under {
    width: 100%;
    height: 60px;
    padding: 1px;
    background-color: aqua;
    border-bottom: 1px solid black;
    text-align: left;
}

@keyframes sheriff {
    0% {
        top: 140px;
        opacity: 0;
    }
    100% {
        top: 115px;
        opacity: 1;
    }
}
.dropdown-content {
    width: 130px;
    height: auto;
    border: 2px solid green;
    background-color: beige;
    position: absolute;
    text-align: left;
    padding: 5px;
    animation-name: sheriff;
    animation-duration: .6s;
    animation-timing-function: ease-in-out;
}
.dropdown:hover .dropdown-content {
    background-color: burlywood;
}

.under ul {
    margin-left: 20px;
    /* border: 1px solid orangered; */
}

.under ul li {
    list-style-type: none;
    display: inline-block;
    padding: 5px 30px;
}


/* @media screen and (max-width: 1000px) {
    .options {
        display: none;
    }

} */

@media screen and (max-width: 750px) {
    .under li {
        font-size: 14px;
        padding: 5px 8px;
    }
    .search-bar {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .logo-container {
        margin-left: 30px;
    }
    .search-bar {
        display: none;
    }
    .under {
        display: block;
    }
    .under ul {
        margin-left: 0px;
    }
    .under ul li {
        padding: 5px;
        font-size:  12px;
        overflow: hidden;
    }


}
</style>