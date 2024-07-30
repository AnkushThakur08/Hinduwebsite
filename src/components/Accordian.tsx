import React from "react";
import AccordionList from "./AccordianList";

const Accordian = () => {
  return (
    <div className="py-12 bg-white">
      <div className="text-center">
        <h2 className="text-base text-2xl md:text-4xl text-orange-500 font-semibold tracking-wide uppercase">Frequent Asked Question</h2>
        <p className="mt-6 text-xl leading-8 tracking-tight text-black sm:text-lg">FAQ's Question</p>
      </div>

      <div className="flex flex-col items-center">
        <AccordionList title="Trimbakeshwar temple history">
          <p>
            Trimbakeshwar Temple in Maharashtra, India, is an ancient and revered shrine dedicated to Lord Shiva. Legend has it that the
            Godavari River originates near the temple, adding to its spiritual significance. The black stone temple showcases the
            Hemadpanthi architectural style, featuring intricate carvings and a three-faced Trimbak Shivalinga, representing the Hindu
            trinity. As one of the twelve Jyotirlingas, it holds immense religious importance for devotees seeking blessings and spiritual
            solace. The temple’s historical charm and cultural heritage continue to attract visitors worldwide, offering a profound
            connection to divinity and an enriching experience of India’s timeless spiritual heritage.
          </p>
        </AccordionList>

        <AccordionList title="Trimbakeshwar temple contact number">
          <p>The distance from Nashik city to Trimbakeshwar Temple is approximately 28 kilometers (17.4 miles) by road.</p>
        </AccordionList>

        <AccordionList title="Nashik to trimbakeshwar temple distance">
          <p>The distance from Nashik city to Trimbakeshwar Temple is approximately 28 kilometers (17.4 miles) by road.</p>
        </AccordionList>

        <AccordionList title="Nearest railway station to Trimbakeshwar temple">
          <p>
            The nearest railway station to Trimbakeshwar Temple is the Nashik Road Railway Station. It is located at a distance of
            approximately 36 kilometers (22.4 miles) from the temple. From Nashik Road Railway Station, you can easily hire a taxi or use
            other modes of transportation to reach Trimbakeshwar Temple.
          </p>
        </AccordionList>

        <AccordionList title="Authorized pandit in Trimbakeshwar">
          <p>
            Pandit Shivesh Guruji is a Authorised pandit in trimbakeshwar revered and knowledgeable priest at Trimbakeshwar Temple, known
            for conducting various religious ceremonies and guiding devotees on their spiritual journeys. Whether you seek assistance in
            performing specific rituals or wish to receive divine blessings, Guruji is available to provide his expertise and support.
          </p>
        </AccordionList>

        <AccordionList title="Nasik road railway station to trimbakeshwar temple distance">
          <p>The distance from Nasik Road Railway Station to Trimbakeshwar Temple is approximately 30 kilometers (18.6 miles) by road.</p>
        </AccordionList>

        <AccordionList title="Who built trimbakeshwar temple">
          <p>
            The exact historical origins of Trimbakeshwar Temple are not well-documented, but it is believed to have been constructed in its
            current form during the reign of the Peshwa rulers in the 18th century. The temple showcases the Hemadpanthi architectural
            style, which flourished during the Yadava dynasty’s rule in the region. It is essential to note that the temple’s existence and
            religious significance go back much further in history. Trimbakeshwar Temple is one of the twelve Jyotirlingas, considered the
            most sacred shrines dedicated to Lord Shiva. The Jyotirlingas are believed to be self-manifested forms of Lord Shiva, and each
            holds a unique mythological tale associated with its origin. The temple’s sacredness and relevance in Hindu mythology and
            spiritual practices have attracted millions of devotees over the centuries, making it a revered pilgrimage site and an integral
            part of India’s cultural and religious heritage.
          </p>
        </AccordionList>

        <AccordionList title="Best time to visit trimbakeshwar temple">
          <p>
            The best time to visit Trimbakeshwar Temple is during the winter and early summer months, from November to February, and also in
            the monsoon season, from July to September. These months offer favourable weather conditions and a pleasant atmosphere, making
            it ideal for a comfortable and enriching pilgrimage experience. Winter (November to February): The winter months are generally
            cool and pleasant in Trimbak, with temperatures ranging from 10°C to 25°C (50°F to 77°F). The weather during this time is
            suitable for exploring the temple and its surroundings without the discomfort of extreme heat. Monsoon (July to September): The
            monsoon season brings lush greenery to the region, and the surroundings become enchantingly beautiful. However, it is essential
            to be prepared for occasional heavy rainfall during this time.
          </p>
        </AccordionList>
      </div>
    </div>
  );
};

export default Accordian;
