import Cards from "../../assets/desktop/isocard.svg";

const Slogan = () => {
  return (
    <section className="text-36 relative my-32 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-40">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Earn <span className="text-purple-300"> More</span>
        </p>
        <p>Pay Less</p>
        <button className="dark:text-white md:text-32 p-3 mt-4 bg-purple-500 rounded-[14px] text-24 hover:bg-pink-500 transition-all duration-400">
          Start
        </button>
      </div>
      <div className="mt-6 md:absolute md:right-[4rem]">
        <img src={Cards} alt="credit card" />
      </div>
    </section>
  );
};

export default Slogan;
