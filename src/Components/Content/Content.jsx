import { FaUser } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
import Check from "../../assets/mobile/checkpoint.svg";

const Content = () => {
  const customerNumber = useSpring({
    customers: 10245,
    from: { customers: 0 },
  });
  const cardIssue = useSpring({ cards: 12650, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row md:gap-16">
      <div className="ml-[70px] mr-[54px] flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to bg-transparent rounded-xl md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customerNumber.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
          </div>
        </div>
        <div className="flex items-start gap-8 mb-16 ml-3">
          <IoCard size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {cardIssue.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Cards Issued</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[45px] my-[45px] mr-[35px] md:mt-0 md:pl-6 md:ml-36">
        <div className="check-content">
          <img src={Check} alt="checked point" className="mr-5 pr-[20px]" />
          <p className="text-13 md:text-16">Card reports sent to your phone erver weeks</p>
        </div>
        <div className="check-content">
          <img src={Check} alt="checked point" className="mr-5 pr-[20px]" />
          <p className="text-13 md:text-16">No external fees</p>
        </div>
        <div className="check-content">
          <img src={Check} alt="checked point" className="mr-5 pr-[20px]" />
          <p className="text-13 md:text-16">Set spending limits and restrictions </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
