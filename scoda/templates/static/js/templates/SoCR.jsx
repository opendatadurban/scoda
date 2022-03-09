import React,{useState, lazy} from 'react';
const Hero =  lazy(() => import('../components/socr/Hero'));
const Cards =  lazy(() => import('../components/socr/Card'));
const SoCR_Modal =  lazy(() => import('../components/socr/SoCR.Modal'));
const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="socr--home">
            <Navigation_scoda box_shadow={true} />
            <Hero setIsOpen={setIsOpen}/>
            <Cards />
            <SoCR_Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Footer />
        </div>
    )
};
export default Home;