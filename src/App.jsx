import React from 'react'
import  {Header,CourseFAQs,BoxCardSection,FieldSelector,Banner,FixedActionButtons,LogoSlider,Courses,MyComponent,DownloadButton,YtVideo,LogoSliding,CardSection,Infrastructure,OurVision,HeroSection,Footer} from './components'

 const logos = [
   { src: './images/logo/digi-logo.svg', alt: 'Logo 1' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 2' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 3' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 4' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 5' },
   { src: './images/logo/digi-logo.svg', alt: 'Logo 6' },
 ];

 const goals = [
  { text: 'Get a promotion' },
  { text: 'Industry Certification'},
  { text: 'Move to a new career path' },
  { text: 'Study Abroad'},
  { text: 'Free Course'},
  { text: 'Prepare for your first job'},
  { text: 'Ace interview skills'},
  { text: 'Get an international degree' },
];



function App() {
  return (
    <>
    <FixedActionButtons/>
    <Header/>
    <main className="pt-20">
      <FieldSelector />
    <div>
      <HeroSection
        title="Master tomorrow's skills today."
        subtitle="Excel with India’s top upskilling platform."
        searchPlaceholder="Tell us what you're looking to learn"
        goals={goals}
        learnerCount="1,809,832"
        imageSrc="https://d2o2utebsixu4k.cloudfront.net/1sr%20persona-d3d4f120e8b2439a99ec96449bbdb5be.webp"
        imageAlt="Persona 1"
      />
     </div>
     <MyComponent/>
     <LogoSliding/>
     <Courses />
     <BoxCardSection/>
     <CardSection/>
     <OurVision/>
     <Infrastructure/>
     <CourseFAQs/>
      {/*<LogoSlider logos={logos} animation='animate-marquee' />
      
      
      <DownloadButton />
      <YtVideo/>
      
      <CardSection/>
      <DownloadButton />
      
       */}
    </main>
    <Footer/>
    </>
  )
}

export default App