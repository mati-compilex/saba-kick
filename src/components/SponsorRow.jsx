function SponsorRow({ sponsors }) {
  return (
    <div className="flex justify-between lg:justify-start lg:gap-2 items-center">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          className="rounded-2xl bg-lightGray flex items-center justify-center  px-[24px] py-[14px]"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-[74px] h-[17px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default SponsorRow;
