import React, { useEffect } from 'react';
import Header from '../components/Header';
import lottieAnimation from '../components/LottieAnimation';
import { Grid, Container } from '@material-ui/core';
import style from './Home.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

// const loadScooterMobileAnim = {
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     animationData: require('../animations/ScooterOnMobile.json'),
// }
const load360DegreeEcommerceAnim = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../animations/360DegreeEcommerce.json'),
}
const loadDeliveryBoyWithBoxAnim = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../animations/deliveryBoyWithBox.json'),
}
const loadTruckWithLugageAnim = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../animations/truckWithLugage.json'),
}
const loadWareHouseAnim = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../animations/wareHouse.json'),
}

export default function () {

    useEffect(()=>{
        Aos.init({
            duration: 1000,
        })
      }, [])

    return (
        <div>
            <Header />
            <br /><br /><br /><br />
            <Container maxWidth='lg' >

                {/* <Grid container spacing={0} justify='center' alignItems='center' wrap='wrap-reverse' >
                    <Grid item xs={12} sm={6} className={style.grid} >
                        <div className={style.content} data-aos='fade-right' >
                            <h1>360-DegreEcommerce</h1>
                            <p>The 360-DegreEcommerce solution helps the online stores to focus on their product while taking care of all the hassles from confirming the order to the last mile delivery. The solution offers a complete e-commerce management suite along with the end to end fulfillment and warehousing services to manage the logistics for the online businesses in the most reliable way.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div className={style.section1} data-aos='fade-left' >
                            <div className={style.sectionCh}>
                                <lottieAnimation.AnimElem starter={loadScooterMobileAnim} />
                            </div>
                        </div>
                    </Grid>
                </Grid> */}
                <Grid container justify='center' alignItems='center' wrap='wrap-reverse' >
                    <Grid item xs={12} sm={6} className={style.grid} >
                        <div className={style.content} data-aos='fade-right' >
                            <h1>360-DegreEcommerce</h1>
                            <p>The 360-DegreEcommerce solution helps the online stores to focus on their product while taking care of all the hassles from confirming the order to the last mile delivery. The solution offers a complete e-commerce management suite along with the end to end fulfillment and warehousing services to manage the logistics for the online businesses in the most reliable way.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div data-aos='fade-left' >
                            <div >
                                <lottieAnimation.AnimElem starter={load360DegreeEcommerceAnim} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <br/><br/>

                <Grid container spacing={0} justify='center' alignItems='center' >
                    <Grid item xs={12} sm={6}  >
                        <div data-aos='fade-right' >
                            <div >
                                <lottieAnimation.AnimElem starter={loadDeliveryBoyWithBoxAnim} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={style.grid} >
                        <div className={style.content} data-aos='fade-left' >
                            <h1>Same Day Delivery</h1>
                            <p>In order to provide a time specific delivery, e.e a delivery belonging to a consignee of the same city as that of the origin city, we offers same day deliveries (currently available in Karachi, Lahore, Islamabad only).<br/><br/>With this service, shippers can select one of the timeslots of same day delivery timings, which would be set accordingly.</p>
                        </div>
                    </Grid>
                </Grid>
                <br/><br/>

                <Grid container spacing={0} justify='center' alignItems='center' wrap='wrap-reverse' >
                    <Grid item xs={12} sm={6} className={style.grid} >
                        <div className={style.content} data-aos='fade-right' >
                            <h1>Overland\Bulk Movements</h1>
                            <p>Trax Overland solution enables you to dispatch heavy consignments without any hassle. Our customized supply chain solutions for bulk movements ensure efficient handling and swift movement of goods ranging from furniture to pharmaceuticals, FMCG or farm-fresh produce, encouraging both online and offline merchants to ship their consignments across Pakistan.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div data-aos='fade-left' >
                            <div >
                                <lottieAnimation.AnimElem starter={loadTruckWithLugageAnim} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <br/><br/>

                <Grid container spacing={0} justify='center' alignItems='center' >
                    <Grid item xs={12} sm={6} >
                        <div  data-aos='fade-right' >
                            <div >
                                <lottieAnimation.AnimElem starter={loadWareHouseAnim} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={style.grid} >
                        <div className={style.content} data-aos='fade-left' >
                            <h1>Warehousing</h1>
                            <p>Our unique E-tail Warehousing solution comes at rescue for your e-commerce business, with complete control of order fulfilment and stock management.</p>
                        </div>
                    </Grid>
                </Grid>
                <br/><br/>

                <Grid container spacing={0} justify='center' alignItems='center' wrap='wrap-reverse' >
                    <Grid item xs={12} sm={6} className={style.grid} >
                        <div className={style.content} data-aos='fade-right' >
                            <h1>Cash On Delivery</h1>
                            <p>We offers the most agile Cash on Delivery service with the fastest payments and most efficient return management solutions. The shipment delivery network of more than 300 destinations helps you to cater orders from all over Pakistan. Our state-of-the-art technological solutions enable ease and access to your online business with increased transparency.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div data-aos='fade-left' >
                            <div className={style.codImg} > </div>
                        </div>
                    </Grid>
                </Grid>

            </Container>
        </div >
    );
}