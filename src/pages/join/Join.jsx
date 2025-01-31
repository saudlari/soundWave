import './Join.css'
import Header from '../../components/header/Header'
import Form from '../../components/form/Form';
import Footer from "../../components/footer/Footer";


function Join () {
  
    return (
<>
<Header />
<main className='joinContainer'>
<div className="circle1-join"></div>
<div className="circle2-join"></div>
<section>
    <h1>
        Join the <span className='spanJoin'>fun.</span>
    </h1>
    </section>
    
<Form />
 
</main>

<Footer />
</>
    )
};

export default Join;