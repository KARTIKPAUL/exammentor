import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/LayOut';
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/Privacy';
import TermsAndConditions from './Pages/Terms';
import QuizApp from './Pages/QuizApp';
import AffiliatePage from './Pages/Affiliates';
import BlogPage from './Pages/Blog';
import CareerPage from './Pages/Carrer';
import PricingPage from './Pages/Pricing';
import ContactForm from './Pages/Contact';
import FeaturesPage from './Pages/Features';
import AboutPage from './Pages/About';
import SSCExamPage from './Pages/Exam/SSC';
import FAQsPage from './Pages/Faqs';
import UPSCExamPage from './Pages/Exam/UPSC';
import NEETExamPage from './Pages/Exam/NEET';
import BankingExamPage from './Pages/Exam/Banking';
import JEEExamPage from './Pages/Exam/IIT-JEE';
import GATEExamPage from './Pages/Exam/Gate';
import MockTestsPage from './Pages/MockTest';
import VideoLecturePage from './Pages/VideoLecture';
import PreviousPapers from './Pages/PreviousYearPaper';
import PracticeTests from './Pages/PracticeTest';
import StudyNotesPage from './Pages/StudyNotes';


function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/terms-conditions' element={<TermsAndConditions />}/> 
          <Route path='/affiliates' element={<AffiliatePage />}/> 
          <Route path='/blog' element={<BlogPage />}/>
          <Route path='/careers' element={<CareerPage />}/>
          <Route path='/contact' element={<ContactForm />}/>
          <Route path='/pricing' element={<PricingPage />}/>
          <Route path='/features' element={<FeaturesPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/quiz' element={< QuizApp />}/>
          <Route path='/exam/ssc' element={<SSCExamPage />}/>
          <Route path='/exam/upsc' element={<UPSCExamPage />}/>
          <Route path='/exam/neet' element={<NEETExamPage />}/>
          <Route path='/exam/banking' element={<BankingExamPage />}/>
          <Route path='/exam/iit-jee' element={<JEEExamPage />}/>
          <Route path='/exam/gate' element={<GATEExamPage />}/>
          <Route path='/faqs' element={<FAQsPage />}/>
          <Route path='/mock-test' element={<MockTestsPage />}/>
          <Route path='/video-lectures' element={<VideoLecturePage />}/>
          <Route path='/previous-papers' element={<PreviousPapers />}/>
          <Route path='/practice-tests' element={<PracticeTests />}/>
          <Route path='/study-notes' element={<StudyNotesPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

