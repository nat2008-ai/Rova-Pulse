import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CampaignDetail from './pages/CampaignDetail';
import InternalUpdate from './pages/InternalUpdate';
import Placeholder from './pages/Placeholder';
import BirthdayGame from './BirthdayGame';
import PmDashboard from './pages/PmDashboard';
import PmStage2 from './pages/PmStage2';
import PmPublished from './pages/PmPublished';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaign/spring-collection" element={<CampaignDetail />} />
        <Route path="/internal" element={<InternalUpdate />} />
        <Route path="/pm" element={<PmDashboard />} />
        <Route path="/pm/update" element={<PmStage2 />} />
        <Route path="/pm/published" element={<PmPublished />} />
        <Route path="/birthday" element={<BirthdayGame />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
}
