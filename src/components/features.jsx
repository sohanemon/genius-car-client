import Heading from "./heading";

const Features = () => {
  return (
    <section id='features'>
      <Heading
        title='Core Features'
        details='Why Choose Us'
        descriptions="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className='flex justify-evenly w-full'>
        {data.map((el) => (
          <div
            key={el.title}
            className='border p-6 rounded-xl flex flex-col items-center gap-4 hover:shadow-lg'
          >
            <img src={el.icon} alt='' className='h-14' />
            <p className=' font-bold text-center text-gray-700'>{el.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

const data = [
  {
    title: "Expert Team",
    icon: require("../assets/icons/group.svg").default,
  },
  {
    title: "Timely Delivery",
    icon: require("../assets/icons/Group 38729.svg").default,
  },
  {
    title: "24/7 Support",
    icon: require("../assets/icons/group.svg").default,
  },
  {
    title: "Best Equipment",
    icon: require("../assets/icons/Wrench.svg").default,
  },
  {
    title: "100% Guranty",
    icon: require("../assets/icons/check.svg").default,
  },
  {
    title: "Fast Shipping",
    icon: require("../assets/icons/deliveryt.svg").default,
  },
];
