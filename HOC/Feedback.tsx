import FeedbackCard from "@/components/FeedbackCard";

import Heads from "@/components/Heads";

import { testimonials } from "@/constants";

import { styles } from "@/styles";

const Feedback = () => {
  return (
    <div
      className={`${styles.paddingX} m-20 max-w-6xl mx-auto mt-12 bg-black-100 rounded-[20px]`}
    >
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <Heads subText="What others say" heading="Testimonials" />
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, idx) => (
          <FeedbackCard {...testimonial} index={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
