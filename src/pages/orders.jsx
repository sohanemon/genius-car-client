import axios from "axios";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { Header } from "../components/header";
import SecondaryBtn from "../components/secondaryBtn";
import { useAuth } from "../contexts/auth-provider";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, isLoading } = useAuth();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_host}/orders/?email=${user?.email}`)
      .then((res) => setOrders(res.data));

    return () => {};
  }, [isLoading]);

  return (
    <section>
      <Header
        pageName={"Services"}
        title={"Manage All Orders"}
        subTitle='Home - Manage All Orders'
      />
      <div className='h-28' />
      <div className='space-y-7'>
        {orders?.map((el) => (
          <OrderItem key={el._id} {...el} />
        ))}
      </div>
    </section>
  );
};

export default Orders;

function OrderItem({ email, serviceName, displayName }) {
  const [service, setService] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_host}/service/?title=${serviceName}`)
      .then((res) => setService(res.data));

    return () => {};
  }, [serviceName]);
  return (
    <div className='grid grid-cols-5 items-center'>
      <div className='col-span-2 flex items-center gap-7'>
        <MdCancel className='text-4xl text-gray-600 hover:scale-105 duration-300 cursor-pointer' />
        <img
          src={service?.img}
          alt=''
          className='w-36 h-36 rounded-lg bg-gray-200 object-cover'
        />
        <div>
          <p className='text-lg font-semibold leading-loose text-gray-700'>
            {serviceName}
          </p>
          <p className='w-28 text-sm leading-loose text-gray-400'>
            By: {displayName}
          </p>
        </div>
      </div>

      <div className=' font-medium leading-loose text-gray-700'>{email}</div>
      <div className=' font-medium leading-loose text-gray-800'>22-10-2022</div>
      <SecondaryBtn className={"w-max cursor-not-allowed"}>
        Disabled
      </SecondaryBtn>
    </div>
  );
}
