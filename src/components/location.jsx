const Location = () => {
  return (
    <section
      id='location'
      className='bg-gray-900 rounded-lg flex justify-evenly py-20 my-24'
    >
      {data.map((el) => (
        <div key={el.text} className='flex gap-5'>
          <img src={el.icon} alt='' />
          <div>
            <p className='font-medium text-white'>{el.text}</p>
            <p className='text-2xl font-bold text-white'>{el.details}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Location;

const data = [
  {
    icon: require("../assets/images/location/Group 32.svg").default,
    text: "We are open monday-friday",
    details: "7:00 am - 9:00 pm",
  },
  {
    icon: require("../assets/images/location/Group 34.svg").default,
    text: "Have a question?",
    details: "+2546 251 2658",
  },
  {
    icon: require("../assets/images/location/Group 35.svg").default,
    text: "Need a repair? our address",
    details: "Liza Street, New York",
  },
];
