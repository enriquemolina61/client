import { BicycleLista } from 'components/BicycleLista/BicycleLista';
import NavBar from 'components/NavBar/NavBar';
import './Home.css';

export function Home() {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <div className="Home_container">
        <BicycleLista />
      </div>
    </div>
  );
}
