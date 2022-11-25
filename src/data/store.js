import { reactive } from "vue";

export const store = reactive({
  nav: [
    {
      title: "HOME",
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
