import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Clubs } from './pages/Clubs';
import { ClubDetails } from './pages/ClubDetails';
import { Events } from './pages/Events';
import { CreateEvent } from './pages/CreateEvent';
import { Profile } from './pages/Profile';
import { Recruitment } from './pages/Recruitment';
import { LivePolls } from './pages/LivePolls';
import { AppsLibrary } from './pages/AppsLibrary';
import { Auth } from './pages/Auth';
import { GearVault } from './pages/features/GearVault';
import { Treasury } from './pages/features/Treasury';
import { SponsorCRM } from './pages/features/SponsorCRM';
import { AutoCert } from './pages/features/AutoCert';
import { VenueBooker } from './pages/features/VenueBooker';
import { MissionControl } from './pages/features/MissionControl';
import { DailyQuests } from './pages/features/DailyQuests';
import { WhisperBox } from './pages/features/WhisperBox';
import { ClubWars } from './pages/features/ClubWars';
import { Gatekeeper } from './pages/features/Gatekeeper';
import { TheArchives } from './pages/features/TheArchives';
import { LegacyHall } from './pages/features/LegacyHall';
import { SyncUp } from './pages/features/SyncUp';
import { TheBroadcast } from './pages/features/TheBroadcast';
import { Hierarchy } from './pages/features/Hierarchy';
import { Breadcrumbs } from './components/Breadcrumbs';
import { NotFound } from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.22, ease: 'easeOut' },
};

function AnimatedRoutes() {
  const location = useLocation();
  // removed unused `isHome`

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Landing: full-width, no inner padding */}
        <Route path="/" element={
          <motion.div {...PAGE_TRANSITION}>
            <Landing />
          </motion.div>
        } />

        {/* Auth */}
        <Route path="/auth" element={
          <motion.div className="max-w-7xl mx-auto w-full px-4 md:px-6 pt-6" {...PAGE_TRANSITION}>
            <Auth />
          </motion.div>
        } />

        {/* All other routes: contained in max-w layout */}
        {[
          ['/dashboard', <Dashboard />],
          ['/clubs', <Clubs />],
          ['/clubs/:id', <ClubDetails />],
          ['/events', <Events />],
          ['/create-event', <CreateEvent />],
          ['/profile', <Profile />],
          ['/recruitment', <Recruitment />],
          ['/polls', <LivePolls />],
          ['/apps', <AppsLibrary />],
          ['/apps/inventory', <GearVault />],
          ['/apps/finance', <Treasury />],
          ['/apps/sponsors', <SponsorCRM />],
          ['/apps/certificates', <AutoCert />],
          ['/apps/booking', <VenueBooker />],
          ['/apps/tasks', <MissionControl />],
          ['/apps/quests', <DailyQuests />],
          ['/apps/feedback', <WhisperBox />],
          ['/apps/versus', <ClubWars />],
          ['/apps/scanner', <Gatekeeper />],
          ['/apps/docs', <TheArchives />],
          ['/apps/alumni', <LegacyHall />],
          ['/apps/meetings', <SyncUp />],
          ['/apps/newsletter', <TheBroadcast />],
          ['/apps/org', <Hierarchy />],
          ['/apps/voting', <LivePolls />],
        ].map(([path, element]) => (
          <Route
            key={path as string}
            path={path as string}
            element={
              <motion.div className="max-w-7xl mx-auto w-full px-4 md:px-6 pt-6 pb-16" {...PAGE_TRANSITION}>
                <Breadcrumbs />
                {element as React.ReactNode}
              </motion.div>
            }
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
