<template>
    <section>
        <div>
            <section class="lff">
                <router-link to="/">
                    <div class="logo-container">
                        <img src="../../public/assets/lovesport.png" class="logo" />
                    </div>
                </router-link>
                <div class="search-bar">
                    <input placeholder="Search..." />
                    <div class="love"><img src="../../public/assets/love.png" alt="love" class="luv"></div>
                    <div class="love"><img src="../../public/assets/picon.png" alt="" class="luv"></div>
                </div>
            </section>
            <cartboard />
            <div class="under">
                <ul>
                    <li @mouseenter="dropdownA" @mouseleave="undropA" class="dropdown">Sports</li>
                        <div @mouseenter="dropdownA" @mouseleave="undropA" v-show="dropA" class="dropdown-content">
                            <p>Packs & Bags</p>
                            <p>Bikes</p>
                            <p>Ball sports</p>
                            <p>Protection</p>
                        </div>
                    <li @mouseenter="dropdownB" @mouseleave="undropB" class="dropdown">Footwear</li>
                        <div @mouseenter="dropdownB" @mouseleave="undropB" v-show="dropB" class="dropdown-contentB">
                            <p>Snowboard boots</p>
                            <p>Outdoor shoes</p>
                            <p>Running shoes</p>
                            <p>Fitness</p>
                            <p>Sport shoes</p>
                        </div>
                    <li>Apparel</li>
                    <li>Special deals</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import Cartboard from './Cartboard.vue';
export default {
    name: "Navbar",
    data() {
        return {
            dropA: false,
            dropB: false
        };
    },
    methods: {
        dropdownA() {
            this.dropA = true;
        },
        undropA() {
            this.dropA = false;
        },
        dropdownB() {
            this.dropB = true;
        },
        undropB() {
            this.dropB = false;
        }
    },
    components: { Cartboard }
}
</script>

<style scoped>
section {
    border: 0px solid red;
}

.lff {
    /* border: 1px solid green; */
    width: 100%;
    height: 5rem;
    background-color: #28282d;
    text-align: left;
}

/* .main-container {
    border: 9px solid blueviolet;
    width: 100%;
    height: auto;
    padding: 4.375rem 0rem 0rem;
} */
.logo-container {
    width: 12.5rem;       
    height: 2.1875rem;
    /* border: 1px solid red; */
    position: relative;
    float: left;
    display: inline;
    margin: 1.5625rem 1.25rem 0.9375rem 5rem;
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
    /* border: 1px solid blue; */
    width: 25rem;
    height: 2.8125rem;
    padding: 0.624rem;
    margin: 1.25rem 1.875rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    float: right;
}

.search-bar input {
    width: 18.75rem;
    text-indent: 1.25rem;
}

.love {
    width: 1.875rem;
    height: 1.5625rem;
    /* background-color: lawngreen; */
    padding: 0.3125rem;
}

.luv {
    width: 100%;
    height: 100%;
}
.under {
    width: 100%;
    height: 3.75rem;
    padding: 1px;
    background-color: #FFFFFF;
    border-bottom: 1px solid black;
    text-align: left;
    box-shadow: 0.0625rem 0.0625rem 0.375rem 0.0625rem #999999;
}
.dropdown {
    cursor: pointer;
    /* border: 1px solid red; */
}
.dropdown-content {
    width: 130px;
    height: auto;
    border-top: 6px solid #28282d;
    border-radius: 0px 0px 5px 5px;
    background-color: #FFFFFF;
    position: absolute;
    line-height: 11px;
    text-align: left;
    padding: 5px;
    z-index: 9;
}
.dropdown-content p:hover {
    text-decoration: underline;
    cursor: pointer;
}
.dropdown-contentB {
    width: 160px;
    height: auto;
    border-top: 6px solid #28282d;
    border-radius: 0px 0px 7px 7px;
    background-color: #FFFFFF;
    position: absolute;
    line-height: 11px;
    left: 170px;
    text-align: left;
    padding: 2px 5px;
    z-index: 9;
}
.dropdown-contentB p:hover {
    text-decoration: underline;
    cursor: pointer;
}

.under ul {
    margin-left: 1.25rem;
    /* border: 1px solid orangered; */
}

.under ul li {
    list-style-type: none;
    display: inline-block;
    padding: 0.6rem 1.875rem;
}






@media screen and (max-width: 750px) {
    .under li {
        font-size: 14px;
        padding: 5px 8px;
    }
    .search-bar {
        display: none;
    }
    .dropdown-content {
        display: none;
    }
    .dropdown-contentB {
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