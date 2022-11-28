import { reactive } from "vue";

export const store = reactive({
  companyInfoName: "",
  companyInfoEmail: "",
  isCorrectSend: false,
  companyInfo: [
    {
      name: "Lucia",
      mail: "heyo@example.com",
    },
  ],

  isClicked: false,
  name: "",
  mail: "",
  phone: "",
  message: "",
  info: "",

  usersMessage: [
    {
      name: "Mario",
      mail: "hello@example.com",
      phone: "5+(333)3432342",
      message: "Hello I will more Info",
      info: "Prices",
    },
  ],

  nav: [
    {
      title: "Home",
      active: false,
    },
    {
      title: "About",
      active: false,
    },
    {
      title: "Services",
      active: false,
    },
    {
      title: "Pricing",
      active: false,
    },
    {
      title: "Blog",
      active: false,
    },
  ],

  QualityArray: [
    {
      title: "Human Capital",
      logo: "fa-solid fa-user-group",
      desc: " Humanizing business:Harness the power of technology to improve the way people work ",
    },
    {
      title: "Core Business",
      logo: "fa-solid fa-chart-pie",
      desc: "It takes innovative approaches to transform modernize and run existing platforms",
    },
    {
      title: "Performance",
      logo: "fa-solid fa-gauge-high",
      desc: "Achieving maximum impact and value from investments in finance and supply chain",
    },
  ],

  networkArray: [
    {
      icon: "fa-solid fa-medal",
      title: "Transition",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "fa-solid fa-lock",
      title: "Security",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "fa-regular fa-pen-to-square",
      title: "Certificate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Expertise",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],

  businessArray: [
    {
      icon: "fa-solid fa-network-wired",
      title: "Audit & Assurance",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      more: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
      isMore: false,
    },
    {
      icon: "fa-solid fa-suitcase",
      title: "Financial Advisory",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      more: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
      isMore: false,
    },
    {
      icon: "fa-solid fa-chart-simple",
      title: "Analytics and M&A",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      more: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
      isMore: false,
    },
    {
      icon: "fa-solid fa-plane-up",
      title: "Middle Marketing",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      more: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
      isMore: false,
    },
    {
      icon: "fa-solid fa-earth-europe",
      title: "Legal Consulting",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      more: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
      isMore: false,
    },
    {
      icon: "fa-solid fa-inbox",
      title: "Regulatory Risk",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      more: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
      isMore: false,
    },
  ],

  priceArray: [
    {
      icon: "fa-solid fa-rocket",
      title: "Standard",
      price: "$ 490/mo",
      popular: false,
      offer: [
        {
          type: "Standard Accounting",
          isTrue: true,
        },
        {
          type: "Platfotm Access",
          isTrue: true,
        },
        {
          type: "Business Orientation",
          isTrue: false,
        },
        {
          type: "Dedicated Consultant",
          isTrue: false,
        },
        {
          type: "Personal Assistance",
          isTrue: false,
        },
      ],
    },
    {
      icon: "fa-solid fa-suitcase",
      title: "Professional",
      price: "$ 890/mo",
      popular: true,
      offer: [
        {
          type: "Standard Accounting",
          isTrue: true,
        },
        {
          type: "Platfotm Access",
          isTrue: true,
        },
        {
          type: "Business Orientation",
          isTrue: true,
        },
        {
          type: "Dedicated Consultant",
          isTrue: false,
        },
        {
          type: "Personal Assistance",
          isTrue: false,
        },
      ],
    },
    {
      icon: "fa-regular fa-gem",
      title: "Ultimate",
      price: "$ 1.390/mo",
      popular: false,
      offer: [
        {
          type: "Standard Accounting",
          isTrue: true,
        },
        {
          type: "Platfotm Access",
          isTrue: true,
        },
        {
          type: "Business Orientation",
          isTrue: true,
        },
        {
          type: "Dedicated Consultant",
          isTrue: true,
        },
        {
          type: "Personal Assistance",
          isTrue: true,
        },
      ],
    },
  ],

  newsArray: [
    {
      image: "news-1.jpg",
      title: "Increasing creativity is possible dor everyone",
      desc: "Lorem ipsum dolor sit amet.",
      user: "Laura Johnson",
      last: "2 Days ago",
      visible: true,
    },
    {
      image: "news-2.jpg",
      title: "Because market research is part of of the business plan",
      desc: "Lorem ipsum dolor sit amet.",
      user: "Anderea Miller",
      last: "1 Days ago",
      visible: true,
    },
    {
      image: "news-3.jpg",
      title: "Working from home is now a trend",
      desc: "Lorem ipsum dolor sit amet.",
      user: "Elisa Simpson",
      last: "4 Days ago",
      visible: true,
    },
    {
      image: "news-4.jpg",
      title: "Start to work",
      desc: "Lorem ipsum dolor sit amet.",
      user: "Elisa Simpson",
      last: "4 Days ago",
      visible: false,
    },
    {
      image: "news-5.jpg",
      title: "I found a Inspiration",
      desc: "Lorem ipsum dolor sit amet.",
      user: "Elisa Simpson",
      last: "4 Days ago",
      visible: false,
    },
  ],

  aboutus: [
    {
      icon: "fa-solid fa-phone",
      info: "1+(305)1234+5678",
    },
    {
      icon: "fa-solid fa-envelope",
      info: "hello@example.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      info: "Main Avenue, 987",
    },
  ],

  weAre: [
    {
      title: "About",
      inside: [
        "The Company",
        "Institutional",
        "Social & Events",
        "Innovation",
        "Environment",
        "Tecnology",
      ],
    },
    {
      title: "Services",
      inside: [
        "Audit & Assurance",
        "Financial Advisory",
        "Analytics M&A",
        "Middle Marketing",
        "Legal Consulting",
        "Regulatory Risk",
      ],
    },
    {
      title: "Support",
      inside: [
        "Responsability",
        "Terms of Use",
        "About Cookies",
        "Privacy Policy",
        "Accessibility",
        "Information",
      ],
    },
  ],
});
