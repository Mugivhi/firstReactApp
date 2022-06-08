import '../css/add.css'
import pic  from '../components/images/sideview.png';
import pic2 from '../components/images/side2.png';
import pic3 from '../components/images/topv.png';
import pic4 from '../components/images/backview.png'
function Leftisite(){
    return(
        <div className='second'>
            <div className='toptekkie'>
            <img src={pic}></img>
            </div>
            <div className='dowtekkies'>
            <img src={pic2}></img>
            <img src={pic3}></img>
            <img src= {pic4}></img>
            </div>
           
        </div>
    )
}


export default Leftisite;