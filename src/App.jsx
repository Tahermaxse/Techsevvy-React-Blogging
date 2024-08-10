import Footer from './Components/Footer'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import './css/style.css'
import './css/blog.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostDetail from './Components/PostDetail'
import TermAndCondition from './Components/TermAndCondition'
import Newsletter from './Components/Newsletter'
import CookieBanner from './Components/CookieBanner'
import PrivacyPolicy from './Components/PrivacyPolicy'
import NotFound from './Components/NotFound'
import Layout from './Components/Layout'
function App() {

  return (
    <>
    <Layout>
    <BrowserRouter>
    <div className="page-wrapper">
    
      <div
        data-w-id="af8b4153-b31b-38d7-5ac3-c4f56e09a7d6"  
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
      
      <Navbar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path='/terms' element={<TermAndCondition/>} />
        <Route exact path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route exact path='/joinnewsletter' element={<Newsletter/>} />
        <Route path="/post/:id" element={<PostDetail/>}  />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
      <Footer/>
      <CookieBanner/>
    </div>
    </BrowserRouter>
    </Layout>
    </>
  )
}

export default App
