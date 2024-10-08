import { people } from 'utils/data.js';
import { getImageUrl } from 'utils/utils.js';
import banner1 from 'assets/banner1.png';
import banner2 from 'assets/banner2.png';
import banner3 from 'assets/banner3.png';
import banner4 from 'assets/banner4.png';
import boardgameImg from 'assets/boardgame.png';
import sgkImg from 'assets/sgk.png';
import vanhocImg from 'assets/vanhoc.png';
import thieunhiImg from 'assets/thieunhi.png';
import ngoaivanImg from 'assets/ngoaivan.png';

import './style.scss';  

export default function HomePage() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <>
      <div className='container mb-4 p-0'>
        <img src={banner1} alt='banner1' className='main-banner img-fluid' />
      </div>
      <div className='container d-flex justify-content-between'>
        <img src={banner2} alt='banner2' className='small-banner img-fluid' />
        <img src={banner3} alt='banner3' className='small-banner img-fluid' />
        <img src={banner4} alt='banner4' className='small-banner img-fluid' />
      </div>
      <div className='container mt-4'>
      <h3>Danh mục sản phẩm</h3>
      <div className='row text-center product-category'>
        <div className='col'>
          <img src={boardgameImg} alt='Boardgame' className='img-fluid' />
          <p>Boardgame</p>
        </div>
        <div className='col'>
          <img src={sgkImg} alt='SGK 2024' className='img-fluid' />
          <p>SGK 2024</p>
        </div>
        <div className='col'>
          <img src={vanhocImg} alt='Văn học' className='img-fluid' />
          <p>Văn học</p>
        </div>
        <div className='col'>
          <img src={thieunhiImg} alt='Thiếu nhi' className='img-fluid' />
          <p>Thiếu nhi</p>
        </div>
        <div className='col'>
          <img src={ngoaivanImg} alt='Ngoại văn' className='img-fluid' />
          <p>Ngoại văn</p>
        </div>
      </div>
    </div>
    <div className='container mt-4'>
  <h3 className="section-title">Xu hướng mua sắm</h3>
  
  <div className='row text-center d-flex'>  
    {people.map((person, index) => (
      <div className='col-3' key={index}>  
        <img src={getImageUrl(person)} alt={person.name} className='product-img'/>
        <p>
          <b>{person.name}</b>
        </p>
        <p><b className='price'>{person.price} Đ</b></p>
      </div>
    ))}
  </div>

  <div className='text-center mt-4'>
    <button className='btn btn-danger'>Xem thêm</button>
  </div>
</div>
<div className='container-fluid mt-4'>
  <h3 className="border-footer"></h3>
  </div>
    </>
  );
}
