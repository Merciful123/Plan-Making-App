const initState = {
  projects: [
    {
      id: 1,
      title: "Testify kalima",
      content: "None is worthy of worship, but Allah",
    },
    { id: 2, title: "Salah", content: "Offer salah for Allah only" },
    {
      id: 3,
      title: "Offer Zakat",
      content: "Help needy ones for sake of Allah only ",
    },
  ],
};
const projectReducer = (state = initState, action) => {
  return state;
};
export default projectReducer;
