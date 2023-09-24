import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const ExperienceCard = ({ experience, idx }: any) => {
  return (
    <VerticalTimelineElement
      key={idx}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center h-full w-full">
          <img
            src={experience.icon.src}
            alt={experience.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-base font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, idx: number) => (
            <li
              key={idx}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        <p>
        {experience.date}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;