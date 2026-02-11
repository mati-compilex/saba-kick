function SponsorRow({ sponsors }) {
  return (
    <div className="flex justify-between items-center">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          className="rounded-2xl bg-[#f2f2f2] flex items-center justify-center  px-[24px] py-[14px]"
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
