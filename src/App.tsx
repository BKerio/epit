import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/models/theme-provider";
import ScrollToTop  from "@/models/scrollup";
import Navbar from "@/models/navbar";
import Footer from "@/models/footer";
import ContactButton from "@/models/contact-button";
import Home from "@/pages/home";
import About from "@/pages/about";
import Methodology from "@/pages/methodology";
import Certifications from "@/pages/certification";
import Solutions from "@/pages/solutions";
import ContactPage from "@/pages/contact";

{/** solutions*/}
import ProjectManagement from "@/solutions/projectmanagement";
import MERL from "@/solutions/merl";
import OrganizationalDevelopment from "@/solutions/organizationaldevelopment";
import WellnessInclusion from "@/solutions/wellnessinclusion";
import EmployeeEngagement from "@/solutions/employee-engagement";
import PolicyGovernanceFundraising from "@/solutions/policygovernance";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
          <Navbar />
          <ScrollToTop />
          {/** Scroll to top button */}
          <main className="flex-grow">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/certification" element={<Certifications />} />
              <Route path="/solutions" element={<Solutions />} />
             
              {/**path for contact */}
              <Route path="/contact" element={<ContactPage />} />

              {/**path for solutions */}
              <Route path="/Projectmanagement" element={<ProjectManagement />} />
              <Route path="/merl" element={<MERL />} />
              <Route path="/organizationaldevelopment" element={<OrganizationalDevelopment />} />
              <Route path="/wellnessinclusion" element={<WellnessInclusion />} />
              <Route path="/employee-engagement" element={<EmployeeEngagement />} />
              <Route path="/policy-governance-fundraising" element={<PolicyGovernanceFundraising />} />

              
            </Routes>
          </main>
          <Footer />
          <ContactButton />
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;