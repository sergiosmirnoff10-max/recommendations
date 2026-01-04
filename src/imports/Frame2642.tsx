import svgPaths from "./svg-gwa21jnzap";
import imgImage25 from "figma:asset/59df85691806ff38c089949cd1da478300647085.png";
import imgEllipse31 from "figma:asset/de150803759d7c2b174e4c777d3a384545e7b190.png";
import imgEllipse32 from "figma:asset/2481050781ed9ecf938d9b857d6e7275572c84f4.png";
import imgEllipse33 from "figma:asset/a6e92a5f94f5f025071913feb81d184cd40a9259.png";
import imgEllipse34 from "figma:asset/3d32399df3b66ebf85cbd67261eac529b1a82870.png";
import imgEllipse35 from "figma:asset/9ca4778a7be977e6185197111a552e9d5664520b.png";
import imgEllipse36 from "figma:asset/20b125b9819e083854ebef1906a79653244b203d.png";
import imgEllipse37 from "figma:asset/325d2bd623d8eeb50535897f943fbd6e1c66a973.png";
import imgEllipse38 from "figma:asset/a74717e5a9f2a7d3fba85555b698a245ea344d77.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="-webkit-box basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#545454] text-[13px] tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[49.786px]">
        <div className="absolute inset-[-4.02%]">{children}</div>
      </div>
      <CustomersLogosImage />
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return <Wrapper1>{text}</Wrapper1>;
}

function Vector() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 204, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p9d99b80} fill="var(--fill-0, #FFCC00)" id="Vector" />
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
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[15px] text-black text-nowrap tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function CustomersLogosImage() {
  return (
    <div className="[grid-area:1_/_1] h-[15px] ml-[33.79px] mt-[34.79px] relative rounded-[25px] w-[16px]">
      <div className="absolute left-[0.79px] size-[14.571px] top-[0.43px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5714 14.5714">
          <circle cx="7.28571" cy="7.28571" fill="var(--fill-0, #0A66C2)" id="Ellipse 36" r="6.78571" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="absolute inset-[17.72%_20.17%_20.34%_21.97%] rounded-[28px]" data-name="image 25">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px]">
          <img alt="" className="absolute h-full left-[-301.39%] max-w-none top-0 w-[401.39%]" src={imgImage25} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse31} width="53.786" />
    </Wrapper>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Rajesh O." />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Sr Principal Software Engineer @ SambanovaSystems" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame2 />
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <Wrapper1>
      {`I had the pleasure of working with Sergio, SambaNova's first UX developer, and he made a tremendous impact on our flagship product. Sergio has an exceptional design aesthetic and a deep understanding of user experience and workflow design. He created intuitive UX flows that significantly enhanced our product's usability and built a robust design system from the ground up, which became a cornerstone of our development process. `}
      <br aria-hidden="true" />
      <br aria-hidden="true" />
      Sergio is not only a talented designer but also an excellent leader who fosters collaboration and inspires those around him. He is incredibly easy to work with, always bringing positivity and focus to the team. I truly enjoyed working alongside him and am confident he will excel in any endeavor he takes on.
    </Wrapper1>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame37 />
      <Frame3 />
      <Helper />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group />
      <Frame />
    </div>
  );
}

function Widget() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse32} width="53.786" />
    </Wrapper>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Azadeh R." />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Product Manager, AI LL and HPC @ NVIDIA" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame4 />
      <Frame9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame39 />
      <Text2 text="Sergio is a fantastic UX/UI designer with a system design mindset. He has a well thought approach to user research, UX requirement gathering and UI design. He is an excellent team player, who can deliver results for highly ambiguous and complex projects. Highly recommended." />
      <Helper />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group1 />
      <Frame5 />
    </div>
  );
}

function Widget1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame6 />
    </div>
  );
}

function Group2() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse33} width="53.786" />
    </Wrapper>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Bill D." />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="UX | IA | Content @ US Bank" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame40 />
      <Text2 text="I worked with Sergio on several projects during his time at US. Bank and the experience was a delight. Sergio is a talented, thoughtful designer and a great collaborator. He’s also a lot of fun. I would hire him back in a heartbeat." />
      <Helper />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group2 />
      <Frame11 />
    </div>
  );
}

function Widget2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame12 />
    </div>
  );
}

function Group3() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse34} width="53.786" />
    </Wrapper>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Juan Carlos C." />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Principal Product Manager @ Alaska Airlines" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <Wrapper1>
      {`Best-in-class UX designer is the phrase that comes to mind when I think about Sergio. `}
      <br aria-hidden="true" />
      <br aria-hidden="true" />
      {`I’ve had the pleasure of knowing him for a few months, during which we worked together creating the Hispanic digital experience for U.S. Bank. Above all, I was impressed with Sergio’s ability as a systems thinker who understands how to leverage existing interaction patterns and innovate where it adds the most value. And, of course, his natural talent to think holistically across the connected experience for U.S. Bank Hispanic users. `}
      <br aria-hidden="true" />
      <br aria-hidden="true" />
      Sergio would be a true asset for any positions requiring a UX/UI hybrid designer, a professional who can craft next-generation experiences, and a practitioner of design thinking methods. As a team member or a leader, Sergio earns my highest recommendation.
    </Wrapper1>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame41 />
      <Frame15 />
      <Helper />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group3 />
      <Frame16 />
    </div>
  );
}

function Widget3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame17 />
    </div>
  );
}

function Group4() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse35} width="53.786" />
    </Wrapper>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Nagesh P." />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Head of Product @ Capital One" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame42 />
      <Text2 text="Sergio is a delight to work with. He is a seasoned designer who takes ownership of a project and makes sure it is done to high standards. His fun and gregarious personality makes it enjoyable to work with him. In addition, Sergio has a hacker mindset and can hustle to reach the people he wants to reach. That makes him a potent entrepreneur and builder. I’d work with Sergio again in an instant." />
      <Helper />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group4 />
      <Frame20 />
    </div>
  );
}

function Widget4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame21 />
    </div>
  );
}

function Group5() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse36} width="53.786" />
    </Wrapper>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Andrew J." />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Sr Principal Product Designer @ Yahoo" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return <Wrapper1>{`I hired Sergio to help us with design work for the many different Playable game ad projects we've had over the past year or so. Looked at MANY applicants before hiring him and glad I waited. Sergio has a very careful eye for design work and firm understanding of works commercially. Some projects he designed from wireframe to final product included games for PUMA, Amazon, Dunkin', Hennessy, Coach, to name a few. Each project, Sergio ran off some rough ideas and created detailed wireframes and even helped ideate UI and game mechanics. If you're looking for someone that can produce the highest quality with quick turn around times, hire this man.`}</Wrapper1>;
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame43 />
      <Frame24 />
      <Helper />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group5 />
      <Frame25 />
    </div>
  );
}

function Widget5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame26 />
    </div>
  );
}

function Group6() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse37} width="53.786" />
    </Wrapper>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Florian P." />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Co-founder and CEO @ InOrbit" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return <Wrapper1>{`Sergio is one of the most versatile and energetic persons I've met. He has a keen eye for design and brings incredible creativity to any team. He can multi-task between his many passions, from entrepreneurship to coaching and does it all with a contagious smile.`}</Wrapper1>;
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame44 />
      <Frame29 />
      <Helper />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group6 />
      <Frame30 />
    </div>
  );
}

function Widget6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame31 />
    </div>
  );
}

function Group7() {
  return (
    <Wrapper>
      <img alt="" className="block max-w-none size-full" height="53.786" src={imgEllipse38} width="53.786" />
    </Wrapper>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text text="Monica S." />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text1 text="Senior Marketing Program Manager @ Adobe" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return <Wrapper1>{`Sergio and I have worked together on various campaigns for global brands such as Dunkin and Moet-Hennessy for the past year. He's brought an incredible fresh new perspective to each campaign. Sergio is not only an incredible creative director but someone one can rely on to go above and beyond what is expected. He is able to bring a fresh element of ideas and works closely with the team members and client to meet the overall goals. His hands-on expertise, thinking out of the box, providing beneficial insights on how to bring the design elements to life, and taking the initiative to try new things is invaluable. Furthermore, Sergio understands clients and will not give up until they are pleased with the final results. He doesn't compromise on the quality of what needs to be done and delivers excellent work. Sergio is very talented and anyone would be lucky to have the opportunity to have him on their team.`}</Wrapper1>;
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame45 />
      <Frame34 />
      <Helper />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Group7 />
      <Frame35 />
    </div>
  );
}

function Widget7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[19px] relative rounded-[20px] shrink-0" data-name="Widget">
      <Frame36 />
    </div>
  );
}

export default function Frame38() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full">
      <Widget />
      <Widget1 />
      <Widget2 />
      <Widget3 />
      <Widget4 />
      <Widget5 />
      <Widget6 />
      <Widget7 />
    </div>
  );
}