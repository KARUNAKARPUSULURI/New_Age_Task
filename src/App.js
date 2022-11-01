import './App.css';
import ColumnBoxes from './Components/ColumnBoxes';
import DisplayImages from './Components/DisplayImages';
import FullWidthBanner from './Components/FullWidthBanner';
import HeroBanner from './Components/HeroBanner';
import InputForm from './Components/InputForm';
import ProductsSection from './Components/ProductsSection';
// import TaskTracker from './Components/TaskTracker';
import TopBanner from './Components/TopBanner';

function App() {
 
  return (
    <div className="App">
      {/* <TopBanner /> */}
      <HeroBanner />
      <FullWidthBanner />
      <ProductsSection />
      <ColumnBoxes />
      <DisplayImages />
      {/* <TaskTracker /> */}
      <InputForm />
    </div>
  );
}

export default App;
