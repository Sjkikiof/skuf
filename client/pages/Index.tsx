import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
    </div>
  );
}

function Header() {
  return (
    <header className="w-full px-6 sm:px-10 py-3 flex justify-between items-center">
      <div className="flex items-center justify-between w-full max-w-[1366px] mx-auto">
        <Logo />
        <Navigation />
        <CTAButton />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg
      className="h-5 w-auto"
      viewBox="0 0 234 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.21779 16.3022L10.7022 5.72446H14.4107L9.30846 19.5129H5.07732L0 5.72446H3.73332L7.21779 16.3022ZM13.9784 12.5689C13.9784 11.1751 14.2522 9.93896 14.7998 8.86046C15.3639 7.78192 16.1189 6.95229 17.0646 6.37156C18.027 5.79082 19.0972 5.50046 20.2753 5.50046C21.3041 5.50046 22.2001 5.70786 22.9633 6.12266C23.7432 6.53749 24.3654 7.06016 24.83 7.69066V5.72446H28.3393V19.5129H24.83V17.4969C24.382 18.144 23.7598 18.6833 22.9633 19.1147C22.1835 19.5295 21.2792 19.7369 20.2504 19.7369C19.0889 19.7369 18.027 19.4382 17.0646 18.8409C16.1189 18.2436 15.3639 17.4056 14.7998 16.3271C14.2522 15.232 13.9784 13.9793 13.9784 12.5689ZM24.83 12.6187C24.83 11.7725 24.6641 11.0507 24.3322 10.4533C24.0004 9.83942 23.5524 9.37482 22.9882 9.05956C22.4241 8.72769 21.8184 8.56179 21.1713 8.56179C20.5242 8.56179 19.9269 8.71942 19.3793 9.03466C18.8318 9.34992 18.3838 9.81452 18.0353 10.4285C17.7035 11.0258 17.5375 11.7393 17.5375 12.5689C17.5375 13.3985 17.7035 14.1286 18.0353 14.7591C18.3838 15.373 18.8318 15.8459 19.3793 16.1778C19.9435 16.5096 20.5408 16.6756 21.1713 16.6756C21.8184 16.6756 22.4241 16.5179 22.9882 16.2027C23.5524 15.8708 24.0004 15.4062 24.3322 14.8089C24.6641 14.195 24.83 13.4649 24.83 12.6187ZM33.7336 1.09511V19.5129H30.2491V1.09511H33.7336ZM40.8953 19.5129H37.4983V8.59786H34.8533V5.75772H37.4983V1.46969H40.8953V5.75772H43.5686V8.59786H40.8953V19.5129ZM56.1279 7.83999C56.6589 8.45392 57.0653 9.16742 57.3476 9.98046C57.6463 10.7935 57.7956 11.6729 57.7956 12.6187C57.7956 14.029 57.4719 15.2735 56.8249 16.352C56.1943 17.4305 55.3316 18.2685 54.2363 18.8658C53.1579 19.4465 51.9466 19.7369 50.6026 19.7369C49.0096 19.7369 47.6076 19.3138 46.3963 18.4676L45.4506 19.5129H43.3349L45.2516 17.4222C44.7206 16.7917 44.3139 16.0699 44.0319 15.2569C43.7499 14.4439 43.6089 13.5645 43.6089 12.6187C43.6089 11.2083 43.9156 9.96386 44.5296 8.88532C45.1603 7.80682 46.0146 6.97719 47.0933 6.39646C48.1716 5.79912 49.3746 5.50046 50.7023 5.50046C52.3449 5.50046 53.7716 5.93186 54.9829 6.79466L55.9536 5.72446H58.0693L56.1279 7.83999ZM47.1429 12.6187C47.1429 13.4649 47.2923 14.2116 47.5909 14.8587L52.7679 9.20889C52.1539 8.76089 51.4489 8.53689 50.6523 8.53689C49.6569 8.53689 48.8189 8.89362 48.1386 9.60712C47.4749 10.304 47.1429 11.3079 47.1429 12.6187ZM54.2116 12.6187C54.2116 11.8056 54.0623 11.0756 53.7636 10.4285L48.6116 16.0782C49.1756 16.493 49.8393 16.7005 50.6026 16.7005C51.2329 16.7005 51.8223 16.5511 52.3696 16.2525C52.9339 15.9372 53.3819 15.4726 53.7136 14.8587C54.0456 14.2448 54.2116 13.4981 54.2116 12.6187ZM62.7929 7.86489C63.2409 7.13482 63.8216 6.56236 64.5349 6.14756C65.2653 5.73276 66.0949 5.52532 67.0239 5.52532V9.18399H66.1029C65.0079 9.18399 64.1783 9.44119 63.6143 9.95556C63.0666 10.4699 62.7929 11.3659 62.7929 12.6436V19.5129H59.3083V5.72446H62.7929V7.86489ZM70.1426 4.08179C69.5286 4.08179 69.0143 3.89096 68.5993 3.50932C68.2013 3.11111 68.0019 2.62163 68.0019 2.04089C68.0019 1.46015 68.2013 0.978961 68.5993 0.597335C69.0143 0.199111 69.5286 0 70.1426 0C70.7563 0 71.2626 0.199111 71.6606 0.597335C72.0756 0.978961 72.2829 1.46015 72.2829 2.04089C72.2829 2.62163 72.0756 3.11111 71.6606 3.50932C71.2626 3.89096 70.7563 4.08179 70.1426 4.08179ZM71.8599 5.72446V19.5129H68.3753V5.72446H71.8599ZM73.1619 12.5689C73.1619 11.1751 73.4359 9.93896 73.9833 8.86046C74.5476 7.78192 75.3026 6.95229 76.2483 6.37156C77.2106 5.79082 78.2809 5.50046 79.4589 5.50046C80.4876 5.50046 81.3836 5.70786 82.1469 6.12266C82.9266 6.53749 83.5489 7.06016 84.0136 7.69066V5.72446H87.5229V19.5129H84.0136V17.4969C83.5656 18.144 82.9433 18.6833 82.1469 19.1147C81.3669 19.5295 80.4626 19.7369 79.4339 19.7369C78.2726 19.7369 77.2106 19.4382 76.2483 18.8409C75.3026 18.2436 74.5476 17.4056 73.9833 16.3271C73.4359 15.232 73.1619 13.9793 73.1619 12.5689ZM84.0136 12.6187C84.0136 11.7725 83.8476 11.0507 83.5159 10.4533C83.1839 9.83942 82.7359 9.37482 82.1719 9.05956C81.6076 8.72769 81.0019 8.56179 80.3549 8.56179C79.7079 8.56179 79.1106 8.71942 78.5629 9.03466C78.0153 9.34992 77.5673 9.81452 77.2189 10.4285C76.8869 11.0258 76.7213 11.7393 76.7213 12.5689C76.7213 13.3985 76.8869 14.1286 77.2189 14.7591C77.5673 15.373 78.0153 15.8459 78.5629 16.1778C79.1269 16.5096 79.7243 16.6756 80.3549 16.6756C81.0019 16.6756 81.6076 16.5179 82.1719 16.2027C82.7359 15.8708 83.1839 15.4062 83.5159 14.8089C83.8476 14.195 84.0136 13.4649 84.0136 12.6187ZM97.0736 5.52532C98.7163 5.52532 100.044 6.04799 101.056 7.09332C102.068 8.12209 102.574 9.56562 102.574 11.424V19.5129H99.0896V11.8969C99.0896 10.8018 98.8159 9.96386 98.2683 9.38312C97.7206 8.78579 96.9739 8.48712 96.0283 8.48712C95.0659 8.48712 94.3026 8.78579 93.7386 9.38312C93.1909 9.96386 92.9173 10.8018 92.9173 11.8969V19.5129H89.4326V5.72446H92.9173V7.44179C93.3816 6.84446 93.9709 6.37986 94.6843 6.04799C95.4143 5.69956 96.2109 5.52532 97.0736 5.52532Z"
        fill="white"
      />
    </svg>
  );
}

function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-2 backdrop-blur-md rounded-full">
      <NavButton active>Home</NavButton>
      <NavButton>How it works</NavButton>
      <NavButton badge="29">Case Studies</NavButton>
      <NavButton badge="15">Reviews</NavButton>
      <NavButton>Blog</NavButton>
      <NavButton>About</NavButton>
    </nav>
  );
}

function NavButton({
  children,
  active = false,
  badge,
}: {
  children: React.ReactNode;
  active?: boolean;
  badge?: string;
}) {
  return (
    <button
      className={`
        flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
        ${
          active
            ? "bg-white/15 text-white"
            : "border border-white/8 text-white/60 hover:text-white hover:border-white/20"
        }
      `}
    >
      {children}
      {badge && (
        <span className="text-[10px] font-medium text-white/60 ml-0.5">
          {badge}
        </span>
      )}
    </button>
  );
}

function CTAButton() {
  return (
    <div className="hidden md:flex items-center pl-6">
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue-start/10 to-brand-blue-end blur-sm" />
        <button className="relative flex items-center gap-3 px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue-start to-brand-blue-end text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-brand-blue-start/20">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-brand-green/30 blur-sm mix-blend-multiply" />
            <div className="relative w-3 h-3 rounded-full bg-brand-green" />
          </div>
          <span>Book a quick call</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35456 5.69085H14.3095V13.6458M13.7571 6.24328L5.69164 14.3087"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] px-6 sm:px-10 lg:px-18 py-12 lg:py-20 overflow-hidden">
      <BackgroundPattern />

      <div className="relative max-w-[1366px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-14 max-w-[909px]">
          <div className="flex flex-col gap-6">
            <ReviewBadge />
            <Headline />
            <Description />
          </div>
          <PrimaryButton />
        </div>

        <div className="hidden lg:block">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

function BackgroundPattern() {
  return (
    <div className="absolute right-0 top-16 lg:top-32 w-full max-w-[674px] h-[548px] opacity-25 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 674 548"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.25" clipPath="url(#clip0_204_1361)">
          <path
            d="M137.069 0V110.776C137.069 119.143 143.84 125.925 152.194 125.925H259.013C267.366 125.925 274.137 132.707 274.137 141.074V248.063C274.137 256.429 280.909 263.212 289.262 263.212H396.081C404.435 263.212 411.206 269.994 411.206 278.361V385.35C411.206 393.716 417.978 400.499 426.331 400.499H533.15C541.503 400.499 548.275 407.281 548.275 415.647V522.636C548.275 531.003 555.047 537.785 563.4 537.785H674M0 0V110.776C0 119.143 6.77161 125.925 15.1248 125.925H121.944C130.297 125.925 137.069 132.707 137.069 141.074V248.063C137.069 256.429 143.84 263.212 152.194 263.212H259.013C267.366 263.212 274.137 269.994 274.137 278.361V385.35C274.137 393.716 267.366 400.499 259.013 400.499H152.194C143.84 400.499 137.069 393.716 137.069 385.35V276.467L136.936 275.572C135.921 268.711 130.107 263.588 123.183 263.454L110.6 263.212H15.1248C6.77162 263.212 0 269.994 0 278.361V385.35C0 393.716 6.77162 400.499 15.1248 400.499H122.889L126.48 400.738C132.438 401.136 137.069 406.093 137.069 412.075V423.695M137.069 411.86V522.636C137.069 531.003 143.84 537.785 152.194 537.785H259.013C267.366 537.785 274.137 544.568 274.137 552.934V659.923C274.137 668.29 280.909 675.072 289.262 675.072H396.081C404.435 675.072 411.206 681.854 411.206 690.221V797.21C411.206 805.576 417.978 812.359 426.331 812.359H533.15C541.503 812.359 548.275 819.141 548.275 827.508V934.497C548.275 942.863 555.047 949.645 563.4 949.645H674"
            stroke="url(#paint0_linear_204_1361)"
            strokeOpacity="0.8"
            strokeWidth="1.85033"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_204_1361"
            x1="0"
            y1="0"
            x2="660.142"
            y2="815.594"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0819437" stopColor="#272727" />
            <stop offset="0.208333" stopColor="#7F98FD" />
            <stop offset="0.9375" stopColor="#5871EF" />
          </linearGradient>
          <clipPath id="clip0_204_1361">
            <rect width="674" height="548" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ReviewBadge() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/61b77a06275148f2455576e0514412f8749eef93?width=80"
        alt="Clutch"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white">5.0</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-[18px] h-[18px]"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.09091 0L11.1319 6.28166L17.7369 6.28166L12.3934 10.1639L14.4344 16.4456L9.09091 12.5633L3.74741 16.4456L5.78844 10.1639L0.444941 6.28166L7.04987 6.28166L9.09091 0Z"
                  fill="#E62415"
                />
              </svg>
            ))}
          </div>
        </div>
        <span className="text-xs text-white">15 REVIEWS</span>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-3.84px] max-w-[618px]">
      <span className="text-white">
        Turn expert ideas into products people pay for — we{" "}
      </span>
      <span className="bg-gradient-to-b from-brand-blue-start to-brand-blue-end bg-clip-text text-transparent">
        validate first
      </span>
    </h1>
  );
}

function Description() {
  return (
    <p className="text-base leading-6 text-brand-gray max-w-[585px]">
      Don't waste months coding what no one wants. We validate your idea, build
      fast, and arm you with traction & a fundraise-ready packet.
    </p>
  );
}

function PrimaryButton() {
  return (
    <button className="flex items-center gap-4 px-6 py-3 rounded-lg bg-gradient-to-r from-brand-blue-start to-brand-blue-end text-white text-sm font-medium w-fit transition-all hover:shadow-lg hover:shadow-brand-blue-start/20">
      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/61b77a06275148f2455576e0514412f8749eef93?width=80"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 w-[6px] h-[6px] rounded-full bg-brand-green ring-2 ring-black" />
      </div>
      <div className="flex items-center gap-1.5">
        <span>Validate My Idea</span>
        <svg
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.35456 5.69085H14.3095V13.6458M13.7571 6.24328L5.69164 14.3087"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </button>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full max-w-[596px] aspect-square">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8c465b5ce01cb17ce64dcb108a56d9dba8ce0bf6?width=1192"
        alt="Two professionals in blue Valtorian shirts"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="w-full bg-white text-black px-6 sm:px-10 lg:px-18 py-12 lg:py-24">
      <div className="max-w-[1366px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        <div className="w-full lg:w-[314px] lg:pb-24">
          <MarketSnapshotCard />
        </div>

        <div className="w-full lg:w-[804px] flex flex-col gap-8">
          <SectionHeading />
          <ProblemStatement />
          <ValidationFirstImage />
          <JourneyText />
          <BeforeAfterImage />
          <AIStatement />
        </div>
      </div>
    </section>
  );
}

function MarketSnapshotCard() {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-[0_5px_11px_0_rgba(0,0,0,0.05),0_20px_20px_0_rgba(0,0,0,0.04),0_45px_27px_0_rgba(0,0,0,0.03),0_80px_32px_0_rgba(0,0,0,0.01),0_125px_35px_0_rgba(0,0,0,0.00)]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ed6bf83b11d18618b87d5103d20533e64f6e41c7?width=628"
        alt="Market potential visualization"
        className="w-full h-[180px] object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-6 p-3 pb-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-medium leading-7 text-black">
            Market Potential Snapshot — TAM / SAM / SOM + CAGR
          </h3>
          <p className="text-base leading-6 text-brand-gray">
            Essential figures on market scale and growth.
          </p>
        </div>
        <button className="w-full px-4 py-2.5 rounded-md bg-gradient-to-r from-brand-blue-start to-brand-blue-end text-white text-sm font-medium transition-all hover:shadow-lg">
          Get Market Snapshot
        </button>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-3.84px] max-w-[451px]">
      <span className="text-black">The problem and its </span>
      <span className="bg-gradient-to-b from-brand-blue-start to-brand-blue-end bg-clip-text text-transparent">
        solution
      </span>
    </h2>
  );
}

function ProblemStatement() {
  return (
    <div className="relative h-auto lg:h-24">
      <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-8 max-w-[779px]">
        <span className="text-black">Most products start in slide decks. </span>
        <EmojiIcon src="https://api.builder.io/api/v1/image/assets/TEMP/6b2a0c29d9fa8282e86d11e93c891cc1cd366073?width=64" />
        <span className="text-black"> Most budgets disappear there too. </span>
        <EmojiIcon src="https://api.builder.io/api/v1/image/assets/TEMP/2e58288fbb07ae40975e38004943ade9e140334e?width=64" />
        <span className="text-black">
          {" "}
          We've watched smart experts build for months before anyone tried to
          pay.{" "}
        </span>
        <span className="text-brand-gray line-through">
          We're not okay with that.
        </span>
      </p>
    </div>
  );
}

function EmojiIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="inline-flex w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-1 rounded-full border border-[#7693F9]"
    />
  );
}

function ValidationFirstImage() {
  return (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/39c30ee400d07be4a0124a6d1f7570696105b840?width=1608"
      alt="Development first vs Validation-first comparison infographic"
      className="w-full h-auto rounded-2xl border border-[#FFCCC8] shadow-[0_4px_12px_12px_rgba(239,39,24,0.02)]"
    />
  );
}

function JourneyText() {
  return (
    <div className="relative">
      <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-8">
        <span className="text-black">
          For almost four years we shipped builds for early founders. The lesson
          was blunt:{" "}
        </span>
        <span className="text-primary font-normal">
          don't code before value
        </span>
        <span className="text-black">
          . So we moved from a dev shop to a zero-to-market studio.{" "}
        </span>
        <EmojiIcon src="https://api.builder.io/api/v1/image/assets/TEMP/ae26aadfc45ead1f1132ac6079d0c2483f833cc7?width=64" />
        <span className="text-black">
          {" "}
          Same skills research, design, development but now we insist on
          validation.
        </span>
        <span className="inline-flex ml-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cdd7b8428ee76fffd3b38e60f228135b996e1913?width=224"
            alt="badges"
            className="h-6 sm:h-7 lg:h-8 w-auto"
          />
        </span>
      </p>
    </div>
  );
}

function BeforeAfterImage() {
  return (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/b8a493ee462eb9c5c811b60bee6b07706db1a55c?width=1608"
      alt="Before - Dev shop vs After - Zero-to-market comparison"
      className="w-full h-auto rounded-2xl"
    />
  );
}

function AIStatement() {
  return (
    <div className="relative">
      <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-8">
        <span className="text-black">We use </span>
        <span className="text-primary font-normal">AI only</span>
        <span className="text-black">
          {" "}
          where it actually speeds things up.{" "}
        </span>
        <EmojiIcon src="https://api.builder.io/api/v1/image/assets/TEMP/36d6144a1ed731ed9c7be421de26748e68015a42?width=64" />
        <span className="text-black">
          {" "}
          The same operator mindset powers our own product,{" "}
        </span>
        <a href="#" className="text-primary underline font-normal">
          PlanEat AI
        </a>
      </p>
    </div>
  );
}
