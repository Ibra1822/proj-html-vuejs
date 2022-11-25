import { reactive } from "vue";

export const store = reactive({
  nav: [
    {
      title: "Home",
      active: false,
    },
    {
      title: "About",
      active: true,
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
      title: "Performnace",
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
      titile: "Audit & Assurance",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: "fa-solid fa-suitcase",
      titile: "Financial Advisory",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: "fa-solid fa-chart-simple",
      titile: "Analytics and M&A",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: "fa-solid fa-plane-up",
      titile: "Middle Marketing",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: "fa-solid fa-earth-europe",
      titile: "Legal Consulting",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: "fa-solid fa-inbox",
      titile: "Regulatory Risk",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
