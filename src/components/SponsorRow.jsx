function SponsorRow({ sponsors }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          className="rounded-2xl bg-[#f2f2f2] flex items-center justify-center w-[118px] h-[45px]"
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
