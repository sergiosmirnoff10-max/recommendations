import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import Frame38 from "../imports/Frame2642";
import svgPaths from "../imports/svg-gwa21jnzap";
import imgImage25 from "figma:asset/59df85691806ff38c089949cd1da478300647085.png";
import imgEllipse31 from "figma:asset/de150803759d7c2b174e4c777d3a384545e7b190.png";
import imgEllipse32 from "figma:asset/2481050781ed9ecf938d9b857d6e7275572c84f4.png";
import imgEllipse33 from "figma:asset/a6e92a5f94f5f025071913feb81d184cd40a9259.png";
import imgEllipse34 from "figma:asset/3d32399df3b66ebf85cbd67261eac529b1a82870.png";
import imgEllipse35 from "figma:asset/9ca4778a7be977e6185197111a552e9d5664520b.png";
import imgEllipse36 from "figma:asset/20b125b9819e083854ebef1906a79653244b203d.png";
import imgEllipse37 from "figma:asset/325d2bd623d8eeb50535897f943fbd6e1c66a973.png";
import imgEllipse38 from "figma:asset/a74717e5a9f2a7d3fba85555b698a245ea344d77.png";

// Helper components
function Wrapper1({
  children,
  isExpanded,
}: React.PropsWithChildren<{ isExpanded?: boolean }>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p
        className={`basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#545454] text-[13px] tracking-[0.3px] ${isExpanded ? "" : "line-clamp-3"}`}
        style={{
          fontVariationSettings: "'wdth' 100",
        }}
      >
        {children}
      </p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[49.786px]">
        <div className="absolute inset-[-4.02%]">
          {children}
        </div>
      </div>
      <CustomersLogosImage />
    </div>
  );
}

type Text2Props = {
  text: string;
  isExpanded?: boolean;
};

function Text2({ text, isExpanded }: Text2Props) {
  return <Wrapper1 isExpanded={isExpanded}>{text}</Wrapper1>;
}

function Vector() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(255, 204, 0, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 12"
        >
          <path
            d={svgPaths.p9d99b80}
            fill="var(--fill-0, #FFCC00)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex gap-[5px] items-start px-0 py-[6px] relative shrink-0 w-full">
      <Vector />
      <Vector />
      <Vector />
      <Vector />
      <Vector />
    </div>
  );
}

type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p
        className="font-['Roboto:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}

type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[219px]">
      <p
        className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[15px] text-black text-nowrap tracking-[0.3px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}

function CustomersLogosImage() {
  return (
    <div className="[grid-area:1_/_1] h-[15px] ml-[33.79px] mt-[34.79px] relative rounded-[25px] w-[16px]">
      <div className="absolute left-[0.79px] size-[14.571px] top-[0.43px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14.5714 14.5714"
        >
          <circle
            cx="7.28571"
            cy="7.28571"
            fill="var(--fill-0, #0A66C2)"
            id="Ellipse 36"
            r="6.78571"
            stroke="var(--stroke-0, white)"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[17.72%_20.17%_20.34%_21.97%] rounded-[28px]"
        data-name="image 25"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px]">
          <img
            alt=""
            className="absolute h-full left-[-301.39%] max-w-none top-0 w-[401.39%]"
            src={imgImage25}
          />
        </div>
      </div>
    </div>
  );
}

// Testimonial data
const testimonials = [
  {
    name: "Rajesh O.",
    title: "Sr Principal Software Engineer @ SambanovaSystems",
    image: imgEllipse31,
    text: `I had the pleasure of working with Sergio, SambaNova's first UX developer, and he made a tremendous impact on our flagship product. Sergio has an exceptional design aesthetic and a deep understanding of user experience and workflow design. He created intuitive UX flows that significantly enhanced our product's usability and built a robust design system from the ground up, which became a cornerstone of our development process. \n\nSergio is not only a talented designer but also an excellent leader who fosters collaboration and inspires those around him. He is incredibly easy to work with, always bringing positivity and focus to the team. I truly enjoyed working alongside him and am confident he will excel in any endeavor he takes on.`,
  },
  {
    name: "Azadeh R.",
    title: "Product Manager, AI LL and HPC @ NVIDIA",
    image: imgEllipse32,
    text: "Sergio is a fantastic UX/UI designer with a system design mindset. He has a well thought approach to user research, UX requirement gathering and UI design. He is an excellent team player, who can deliver results for highly ambiguous and complex projects. Highly recommended.",
  },
  {
    name: "Bill D.",
    title: "UX | IA | Content @ US Bank",
    image: imgEllipse33,
    text: "I worked with Sergio on several projects during his time at US. Bank and the experience was a delight. Sergio is a talented, thoughtful designer and a great collaborator. He's also a lot of fun. I would hire him back in a heartbeat.",
  },
  {
    name: "Juan Carlos C.",
    title: "Principal Product Manager @ Alaska Airlines",
    image: imgEllipse34,
    text: `Best-in-class UX designer is the phrase that comes to mind when I think about Sergio. \n\nI've had the pleasure of knowing him for a few months, during which we worked together creating the Hispanic digital experience for U.S. Bank. Above all, I was impressed with Sergio's ability as a systems thinker who understands how to leverage existing interaction patterns and innovate where it adds the most value. And, of course, his natural talent to think holistically across the connected experience for U.S. Bank Hispanic users. \n\nSergio would be a true asset for any positions requiring a UX/UI hybrid designer, a professional who can craft next-generation experiences, and a practitioner of design thinking methods. As a team member or a leader, Sergio earns my highest recommendation.`,
  },
  {
    name: "Nagesh P.",
    title: "Head of Product @ Capital One",
    image: imgEllipse35,
    text: "Sergio is a delight to work with. He is a seasoned designer who takes ownership of a project and makes sure it is done to high standards. His fun and gregarious personality makes it enjoyable to work with him. In addition, Sergio has a hacker mindset and can hustle to reach the people he wants to reach. That makes him a potent entrepreneur and builder. I'd work with Sergio again in an instant.",
  },
  {
    name: "Andrew J.",
    title: "Sr Principal Product Designer @ Yahoo",
    image: imgEllipse36,
    text: `I hired Sergio to help us with design work for the many different Playable game ad projects we've had over the past year or so. Looked at MANY applicants before hiring him and glad I waited. Sergio has a very careful eye for design work and firm understanding of works commercially. Some projects he designed from wireframe to final product included games for PUMA, Amazon, Dunkin', Hennessy, Coach, to name a few. Each project, Sergio ran off some rough ideas and created detailed wireframes and even helped ideate UI and game mechanics. If you're looking for someone that can produce the highest quality with quick turn around times, hire this man.`,
  },
  {
    name: "Florian P.",
    title: "Co-founder and CEO @ InOrbit",
    image: imgEllipse37,
    text: `Sergio is one of the most versatile and energetic persons I've met. He has a keen eye for design and brings incredible creativity to any team. He can multi-task between his many passions, from entrepreneurship to coaching and does it all with a contagious smile.`,
  },
  {
    name: "Monica S.",
    title: "Senior Marketing Program Manager @ Adobe",
    image: imgEllipse38,
    text: `Sergio and I have worked together on various campaigns for global brands such as Dunkin and Moet-Hennessy for the past year. He's brought an incredible fresh new perspective to each campaign. Sergio is not only an incredible creative director but someone one can rely on to go above and beyond what is expected. He is able to bring a fresh element of ideas and works closely with the team members and client to meet the overall goals. His hands-on expertise, thinking out of the box, providing beneficial insights on how to bring the design elements to life, and taking the initiative to try new things is invaluable. Furthermore, Sergio understands clients and will not give up until they are pleased with the final results. He doesn't compromise on the quality of what needs to be done and delivers excellent work. Sergio is very talented and anyone would be lucky to have the opportunity to have him on their team.`,
  },
];

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  isExpanded,
}: {
  testimonial: (typeof testimonials)[0];
  isExpanded: boolean;
}) {
  return (
    <motion.div
      className="bg-white content-stretch flex flex-col items-center justify-center px-[16px] py-[19px] relative rounded-[20px] shrink-0 min-w-[350px] shadow-md overflow-hidden"
      initial={false}
      animate={{
        height: isExpanded ? "auto" : "180px",
      }}
      style={{
        zIndex: isExpanded ? 50 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
        <Wrapper>
          <img
            alt=""
            className="block max-w-none size-full"
            height="53.786"
            src={testimonial.image}
            width="53.786"
          />
        </Wrapper>
        <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 flex-1">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <Text text={testimonial.name} />
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <Text1 text={testimonial.title} />
            </div>
          </div>
          <Text2
            text={testimonial.text}
            isExpanded={isExpanded}
          />
          <Helper />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);
  const x = useMotionValue(0);
  const isPausedRef = useRef(false);

  const CARD_WIDTH = 350;
  const GAP = 20;
  const ITEM_WIDTH = CARD_WIDTH + GAP;
  const SCROLL_SPEED = 50; // pixels per second

  // Triple the testimonials for seamless infinite loop
  const tripleTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const totalWidth = testimonials.length * ITEM_WIDTH;

  useAnimationFrame((time, delta) => {
    if (isPausedRef.current) return;

    const moveBy = (delta / 1000) * SCROLL_SPEED;
    const currentX = x.get();
    let newX = currentX - moveBy;

    // Reset position seamlessly when we've scrolled through one complete set
    if (Math.abs(newX) >= totalWidth) {
      newX = newX + totalWidth;
    }

    x.set(newX);
  });

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    setHoveredIndex(null);
  };

  return (
    <div className="size-full flex items-center justify-center bg-gray-50 overflow-hidden">
      <div
        className="relative w-full overflow-hidden py-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div className="flex gap-[20px]" style={{ x }}>
          {tripleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TestimonialCard
                testimonial={testimonial}
                isExpanded={hoveredIndex === index}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}