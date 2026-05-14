import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CampaignDetail from './pages/CampaignDetail';
import InternalUpdate from './pages/InternalUpdate';
import Placeholder from './pages/Placeholder';
import BirthdayGame from './BirthdayGame';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaign/spring-collection" element={<CampaignDetail />} />
        <Route path="/internal" element={<InternalUpdate />} />
        <Route path="/birthday" element={<BirthdayGame />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
}
