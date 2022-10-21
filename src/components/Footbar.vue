<template>
    <section>
        <div class="foot1">
            <div class="foot-image">
                <img src="../../public/assets/lovesport.png" alt="lovesport" class="logo" />
            </div>
            <div class="socials">
                <div class="social-media"><img src="../../public/assets/facebook.png" alt="facebook" class="soc"></div>
                <div class="social-media"></div>
                <div class="social-media"></div>
                <div class="social-media"></div>              
            </div>
        </div>
        <div class="foot2">
            <h3>About</h3>
            <ul>
                <li>About Us</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
                <li>Custom links</li>
            </ul>
        </div>
        <div class="foot2">
            <h3>Account</h3>
            <ul>
                <li>My Acount</li>
                <li>Wishlist</li>
                <li>Newsletter</li>
                <li>Gift certificates</li>
            </ul>
        </div>
        <div class="foot2">
            <h3>Categories</h3>
            <ul>
                <li>Skiing</li>
                <li>Sport Watches</li>
                <li>Racket sports</li>
                <li>Bikes</li>
                <li>Footwear</li>
                <li>Leisure games</li>
            </ul>
        </div>
        <div class="foot5"><h3>© FALANA SHERIFF OLATUNJI.</h3></div>
    </section>
</template>

<script>
    export default {
        name: "Footbar",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    section {
        /* border: 2px solid tomato; */
        width: 100%;
        height: auto;
        background-color: #28282d;
        text-align: left;
        color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .foot1 {
        width: 17.5rem;
        height: 16.5rem;
        /* border: 2px solid red; */
        padding: 1.25rem 0.3125rem;
    }

    .foot-image {
        width: 11rem;
        height: 2rem;
        /* border: 2px solid red; */
        margin: 0.625rem auto;
    }

    .logo {
        height: 100%;
        width: 100%;
    }

    .socials {
        width: 100%;
        height: auto;
        /* border: 2px solid green; */
        margin-top: 3.75rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .social-media {
        width: 2.5rem;
        height: 2.5rem;
        background-color: black;
        padding: 0.625rem;
        margin: 1px;
        border-radius: 50%;
    }

    .soc {
        width: 100%;
        height: 100%;
    }

    .foot2 {
        width: 12.5rem;
        height: 16.5rem;
        /* border: 2px solid green; */
        /* background-color: salmon; */
        padding: 1.25rem 0rem;
        text-align: left;
    }
    .foot2 h3 {
        text-indent: 2.5rem;
        line-height: 0.8125rem;
    }
    .foot2 ul li {
        list-style-type: none;
        line-height: 1.5625rem;
    }
    .foot2 ul li:hover {
        text-decoration: underline;
        transition: .9s;
        cursor: pointer;
    }

    .foot5 {
        width: 100%;
        height: 3.75rem;
        /* border: 1px solid blue; */
        text-align: center;
        border-top: 1px solid white;
    }




    @media screen and (max-width: 500px) {
        .foot1 {
            width: 100%;
            height: 250px;
            padding: 40px 35px;
        }
        .foot-image {
            margin: 0px;
        }
        .socials {
            justify-content: flex-start;
        }
        .foot2 {
            width: 100%;
            height: auto;
        }
    }





</style>