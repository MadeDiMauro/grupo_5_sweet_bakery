import './Assets/css/app.css';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';
import SideBar from './Components/SideBar/SideBar';

function App() {
  
  return (
    <div id="wrapper">

		{/* <!-- Sidebar --> */}
		<SideBar />
		{/* <!-- End of Sidebar --> */}

		{/* <!-- Content Wrapper --> */}
		<ContentWrapper />
		{/* <!-- End of Content Wrapper --> */}

	</div>
  );
}

export default App;
