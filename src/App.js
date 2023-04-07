import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  const data = {
    image :"imagePesona.png",
    fullName: 'Fatima Zahra Boudrar',
    name : 'BOUDRAR Fatima Zahra',
    from : 'Morocco , Casablanca',
    email : 'boudrarfatimazahra10@gmail.com',
    gitHub : 'https://github.com/boudrarfatimazahra' ,
    bio: ' I am a highly skilled and motivated Full Stack Developer with experience building e-commerce platforms. I completed a bootcamp program at Gomycode where I honed my skills in front-end and back-end web development, with a focus on React JS. I am passionate about creating innovative and efficient solutions for clients and have a proven track record of delivering high-quality products.',
    profession: ': As a Full Stack Developer, I am proficient in JavaScript, React JS, Node JS, and various other web technologies. I have experience developing e-commerce platforms, including online stores and marketplaces, and have extensive knowledge of payment gateways, shopping carts, and other e-commerce features. I am also experienced in database design, server management, and API development. I am committed to staying up-to-date with the latest technologies and trends to deliver the best solutions to my clients.',
}
  return (
    <div className="bio">
     <ProfilePhoto dataOne = {data}/>
     <FullName dataOne = {data}/>
     <Address/>
    </div>
  );
}

export default App;
