import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabs, setTabs] = useState([
    {
      label: "Tab 1",
      content: "This is the content for Tab 1"
    }, 
    {
      label: "Tab 2",
      content: "This is the content for Tab 2"
    }, 
    {
      label: "Tab 3",
      content: "This is the content for Tab 3"
    }
  ]);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <p>{tabs[activeTab].content}</p>
    </div>
  );
}

export default App;
