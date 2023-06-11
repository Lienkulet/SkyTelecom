'use client';
import React from 'react'
import Slider from 'react-slick'
import Testimonial from '../tetimonial/Testimonial';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const testimonials = [
    {
      image: '/kathimerini.png',
      width: 200,
      height: 200,
      desc: '«Η Sky Telecom τοποθετείται ως ο 1ος πάροχος στην κατηγορία του σε αριθμό συνδρομητών στα Βαλκάνια, επιδιώκοντας να αποτελέσει μέσα στην επόμενη πενταετία μία από τις τρεις μεγαλύτερες ευρωπαϊκές εταιρείες παροχής ασύρματου Ιντερνετ.»'
    },
    {
      image: '/thetoc.png',
      width: 150,
      height: 150,
      desc: '«Την ώρα που οι ταχύτητες των οπτικών ινών σταματούν στα 200 Mbps, το ασύρματο ίντερνετ της SkyTelecom αγγίζει τα 500 πραγματικά Mbps. Η δε διαφορά της ταχύτητας των οπτικών ινών είναι χαοτική σε σύγκριση με το δίκτυο χαλκού, από το οποίο ακόμα εξασφαλίζουν ίντερνετ εκατομμύρια κατοικίες και επιχειρήσεις στη χώρα μας.»'
    },
    {
      image: '/naftemporiki.png',
      width: 200,
      height: 200,
      desc: '«Με δεδομένο ότι το μεγαλύτερο μέρος της χώρας παραμένει όμηρος απαρχαιωμένων υποδομών και χαμηλών ταχυτήτων, ακόμα και μέσα στην Αθήνα, η απόβαση της SkyTelecom αναμένεται να δημιουργήσει ισχυρό αντίκτυπο στην αγορά.»'
    },
    {
      image: '/msr.png',
      width: 100,
      height: 100,
      desc: ' «Περνάει στην επίθεση σιγά-σιγά η SkyTelecom που φιλοδοξεί να αποτελέσει Νο1 Πάροχο Ασύρματου Internet και εγγυάται 100% πραγματικές ταχύτητες ίντερνετ έως και 500Mbps.» '
    },
    {
      image: '/cretalive.png',
      width: 150,
      height: 150,
      desc: ' «Η SkyTelecom δημιούργησε και προσφέρει μοναδικά πακέτα internet και σταθερής που χαρακτηρίζονται από κλειδωμένες ταχύτητες και άριστη ποιότητα, καθώς και τιμές που σέβονται τον καταναλωτή.» '
    },
    {
      image: '/kriti.png',
      width: 150,
      height: 150,
      desc: ' «Η ραγδαία ανάπτυξη της SkyTelecom, του no1 σε συνδρομητές WISP παρόχου σε Ελλάδα και Βαλκάνια, δε θα μπορούσε να επιτευχθεί, αν το προϊόν το οποίο προσέφερε στους καταναλωτές δεν διακρινόταν από πραγματική καινοτομία και υψηλή ποιότητα.» '
    },
    {
      image: '/news247.png',
      width: 100,
      height: 100,
      desc: '«Το πιο βασικό πλεονέκτημα της SkyTelecom για τους πελάτες της δεν είναι άλλο από την δυνατότητα πλοήγησης με ταχύτητες 500Mbps. Πρόκειται για τη μοναδική εταιρεία που διαθέτει εμπορικά πακέτα με αυτή την ταχύτητα.» '
    }
    ]


    

  return (
    <section className='hidden md:flex flex-col items-center justify-center bg-white pt-40 pb-20'>
        <header className='flex flex-col items-center justify-center gap-10 mb-14'>
          <h1 className='text-5xl'>Έγραψαν για μας</h1>
          <p className='text-lg'>Διαβάστε τα τελευταία online δημοσιεύματα για τη SkyTelecom & τις υπηρεσίες της!</p>
        </header>
        <div className='max-w-[1200px] testimonialsSlider'>
          <Slider {...settings}>
            {testimonials.length > 0 && testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
        <button className='px-[3.5rem] py-[1rem] items-center z-8 font-regular
                   text-base font-medium hoverBg purpleBorder hover:text-white duration-100 ease-in-out 
                 text-center rounded-md cursor-pointer mt-16'>
                Διάβασε περισσότερα
        </button>
    </section>
  )
}

export default Testimonials