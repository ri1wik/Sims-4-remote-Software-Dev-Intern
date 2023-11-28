import Homescreen from './Components/Homescreen';
import GroupingByStatus from './Components/GroupingByStatus';
import GroupingByUser from './Components/GroupingByUser';
import GroupingByPriority from './Components/GroupingByPriority';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homescreen/>} />
        <Route exact path='/users' element={<GroupingByUser/>}/>
        <Route exact path='/priority' element={<GroupingByPriority/>}/>
        <Route exact path='/status' element={<GroupingByStatus/>}/>
      </Routes>
    </div>
    
    
  );
}

export default App;
