import React from 'react'
import  {Header,Banner,FixedActionButtons,LogoSlider,Courses,MyComponent,DownloadButton,YtVideo,LogoSliding,CardSection,Infrastructure,OurVision,Footer} from './components'

 const logos = [
   { src: './images/logo/digi-logo.svg', alt: 'Logo 1' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 2' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 3' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 4' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 5' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 6' },
 ];

function App() {
  return (
    <>
    <FixedActionButtons/>
    <Header/>
    <main>
    <Banner
      title="Enroll for the most Advanced Digital Marketing Course in India"
      description={`- Digital Marketing Course with Placement Guarantee in Mumbai
        - Basic to Advance Classroom Training Program (Mumbai)
        - International Certificate in Strategic Management
        - Guaranteed Internship / Placement
        - No Cost EMI`}
      highlightedWords={['Digital', 'Marketing']}
      />
      <LogoSlider logos={logos} animation='animate-marquee' />
      <Courses />
      <MyComponent/>
      <DownloadButton />
      <YtVideo/>
      <LogoSliding/>
      <CardSection/>
      <DownloadButton />
      <Infrastructure/>
      <OurVision/>
    </main>
    <Footer/>
    </>
  )
}

export default App