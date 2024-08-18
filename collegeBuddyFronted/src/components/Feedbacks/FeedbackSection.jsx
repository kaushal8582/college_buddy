import React from 'react';
import TestimonialCard from '../testimonialCard/TestimonialCard'; 
import "../../cssss/FeedbackSection.css"
import kauImg from "../../assets/resources/img/kaushal img2.png"
import shivamPatelImg from "../../assets/resources/img/Ellipse 3.png"
import priyaDes from "../../assets/resources/img/Ellipse 4.png"
import anlitkumar from "../../assets/resources/img/Ellipse 5.png"
import simarn from "../../assets/resources/img/Ellipse 6.png"
import "../../cssss/Responsive.css"
const FeedbackSection = () => {

  const dataArray = [
    {
      content:"College Buddy not only helped me ace my exams but also prepared me for the job market. The career guidance and skill development workshops gave me the confidence to land my dream job in IT.",
      name:"kaushal kumar",
      year:"BCA Student (2019-2022)",
      img : kauImg
    },
    {
      content:"College Buddy has been a game-changer for my academics. The resources and community support helped me improve my grades significantly. I went from struggling to excelling in my exams!",
      name:"Shivam Patel",
      year:"BBA Student (2022-2025)",
      img : shivamPatelImg
    },
    {
      content:"My experience with College Buddy was phenomenal. The personalized coaching and hands-on projects were crucial in developing my practical skills. Thanks to them, I now work at a top software firm.",
      name:"Amit Kumar",
      year:"BSc IT Student (2021-2024)",
      img : priyaDes
    },
    {
      content:"I was initially unsure about my career path, but College Buddy's career counseling sessions provided clarity and direction. Their mock interviews and resume workshops were essential in landing my current role.",
      name:"Beauty Singh",
      year:"Bca Student (2021-2024)",
      img : anlitkumar
    },
    {
      content:"The mentorship program at College Buddy paired me with industry veterans who guided me throughout my studies and job search. Their insights and advice were invaluable in securing my current position.",
      name:"golu Singh",
      year:"BSc IT (2020-2023)",
      img : simarn
    },
    {
      content:"From exam preparation to job placement, College Buddy was with me every step of the way. Their dedication to student success is unmatched, and I am grateful for their unwavering support in achievin my career goals.",
      name:"kaushal kumar",
      year:"Bca Student (2022-2025)",
      img : kauImg,
    },
    {
      content:"The mentorship I received from College Buddy was outstanding. My mentor guided me through difficult subjects and helped me build a strong foundation. I couldn't have achieved my goals without their support.",
      name:"kaushal kumar",
      year:"Bca Student (2022-2025)",
      img : kauImg
    },
    {
      content:"The career workshops and networking events hosted by College Buddy were invaluable. They connected me with industry professionals and provided insights that helped me navigate the job market effectively.",
      name:"kaushal kumar",
      year:"Bca Student (2022-2025)",
      img : kauImg
    },
    {
      content:"I was able to balance my studies and part-time job effectively thanks to College Buddy's flexible learning schedule. Their support system ensured I could manage my time efficiently and still excel in my courses.",
      name:"kaushal kumar",
      year:"Bca Student (2022-2025)",
      img : kauImg
    },

  ]


  return (
    <section id="feedback" className="py-[100px]  gap-[20px] overflow-hidden bg-gray-200">
      <h1 className="feadh1 text-center text-[64px] md:text-[58px] max-md-xs:-text-[2vw] capitalize font-light">
        our student <span className="text-orange-500 font-medium">loves</span> us....
      </h1>
      <div className="fcards flex items-center mt-[50px] gap-[20px] animate-animFeedback hover:animation-play-state-paused">
      { dataArray.map((item,i)=>(
        <TestimonialCard content={item.content} img={item.img} name={item.name} year={item.year} key={i} />
      ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
