import pbLogo from '../images/pbLogo.JPG'
import CountdownTimer from '../components/CountdownTimer'

const Home = () => {
  return (
    <div>
      <h1>Welcome to The League</h1>
      <img className="homePageImage" src={pbLogo} alt="Logo" />
      <CountdownTimer date="Keepers Locked"/>
      <CountdownTimer date="Draft Day"/>
      <CountdownTimer date="Week 1"/>

    </div>
  );

}

export default Home;
