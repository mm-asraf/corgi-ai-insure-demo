import lifeInsuranceImg from '../../assets/LIFE-INSURANCE.png';
import autoInsuranceImg from '../../assets/auto-insurance.jpg';
import healthInsuranceImg from '../../assets/health-insurance.jpeg';
import homeInsuranceImg from '../../assets/home_insurance.jpeg';

interface Products {
    name: string;
    image: string;
    description: string;
    link: string;
  }

export const products:Products[] = [
    {
        name: 'Life Insurance',
        image: lifeInsuranceImg,
        description: 'Secure your family’s future with comprehensive life insurance plans.',
        link:'#'
    },
    {
        name: 'Auto Insurance',
        image: autoInsuranceImg,
        description: 'Protect your vehicle and yourself with our reliable auto insurance.',
        link:'#'
    },
    {
        name: 'Health Insurance',
        image: healthInsuranceImg,
        description: 'Get the best medical care without financial stress.',
        link:'#'
    },
    {
        name: 'Home Insurance',
        image: homeInsuranceImg,
        description: 'Safeguard your home against unexpected events.',
        link:'#'
    },
  
  
];



export const  reviews = [
    {
      name: "Michael Johnson",
      rating: 5,
      feedback: "The life insurance policy I purchased has given me peace of mind knowing my family will be taken care of. The process was straightforward, and the customer support was exceptional!",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Sarah Lee",
      rating: 4,
      feedback: "I recently filed a health insurance claim, and I was impressed with how quickly it was processed. The coverage options are great, and the support team is always available to answer my questions.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "David Martinez",
      rating: 5,
      feedback: "After comparing several options, I chose this company for my motor insurance. They offered the best coverage at a reasonable price. Filing a claim after an accident was hassle-free and quick.",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      name: "Emma Wilson",
      rating: 4,
      feedback: "I’m happy with the health insurance plan I’ve chosen. It covers all my needs, from regular check-ups to emergency care. The policy is flexible, and I feel secure knowing I’m well-covered.",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
    },
  ];
  