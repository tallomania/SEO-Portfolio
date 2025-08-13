import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  BarChart3,
  Target,
  Zap,
  Globe,
  Award,
  BadgeCheck,
  NotebookText,
  PhoneCall,
  ExternalLink,
  Github,
  Linkedin,
  MailCheck,
  Star,
  Code,
  TrendingUp,
  Users,
  Brain,
} from "lucide-react";

const RotatingText = ({
  texts,
  className = "",
}: {
  texts: string[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className={`inline-block transition-all duration-500 ${className}`}>
      {texts[currentIndex]}
    </span>
  );
};

const StarBorderButton = ({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses =
    "relative px-6 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    secondary:
      "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Star animation overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {[...Array(6)].map((_, i) => (
          <Star
            key={i}
            className={`absolute text-yellow-300 animate-pulse`}
            size={16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: "1.5s",
            }}
          />
        ))}
      </div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const MetricCard = ({
  title,
  value,
  change,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <Icon className="text-blue-600" size={24} />
      <span className="text-green-500 text-sm font-medium">+{change}%</span>
    </div>
    <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const FeatureCard = ({
  title,
  description,
  metrics,
  icon: Icon,
}: {
  title: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  icon: React.ElementType;
}) => (
  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border hover:border-gray-400 border-gray-200 group">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
        <Icon className="text-blue-600" size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center p-3 bg-gray-100 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
          <p className="text-sm text-gray-600">{metric.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function SEOPortfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  const rotatingTexts = [
    "SEO Growth Strategist",
    "Digital Marketing Expert",
    "Data-Driven Optimizer",
  ];

  const features = [
    {
      title: "SEO Audit Dashboard",
      description:
        "Comprehensive technical, on-page, and off-page analysis with real-time monitoring and issue detection.",
      icon: Search,
      metrics: [
        { value: "92%", label: "Audit Accuracy" },
        { value: "40hrs", label: "Time Saved" },
      ],
    },
    {
      title: "Competitor Analysis",
      description:
        "Advanced gap analysis revealing content opportunities, keyword clusters, and competitive intelligence.",
      icon: Target,
      metrics: [
        { value: "100+", label: "Data Points" },
        { value: "3x", label: "Faster Analysis" },
      ],
    },
    {
      title: "Growth Attribution",
      description:
        "Multi-touch attribution modeling across all marketing channels with statistical significance testing.",
      icon: BarChart3,
      metrics: [
        { value: "85%", label: "Attribution Accuracy" },
        { value: "25%", label: "ROI Improvement" },
      ],
    },
  ];

  const caseStudyMetrics = [
    { title: "Organic Traffic", value: "342%", change: "342", icon: Globe },
    { title: "Keyword Rankings", value: "#2", change: "89", icon: Search },
    { title: "Conversion Rate", value: "10%", change: "156", icon: Target },
    { title: "Local Citations", value: "89", change: "234", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-widest">
              <span className="font-thin"> Ayo </span>
              <span className="text-violet-400 mr-4 font-normal">Gabriel </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Case Study", "Features", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              <StarBorderButton
                onClick={() => window.open("https://github.com/tallomania")}
                variant="secondary"
              >
                <div className="flex items-center justify-center">
                  <Github size={20} />
                </div>
              </StarBorderButton>
              <StarBorderButton
                onClick={() =>
                  window.open("https://calendly.com/dripsberry/15-mins-call")
                }
              >
                <div className="flex items-center justify-center">
                  <PhoneCall className="mr-2" size={20} />
                  Contact Me
                </div>
              </StarBorderButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-normal mb-6 text-gray-800">
            <RotatingText
              texts={rotatingTexts}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming struggling websites into search engine champions
            through data-driven strategies, advanced analytics, and conversion
            optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StarBorderButton
              onClick={() =>
                document.getElementById("case-study")?.scrollIntoView()
              }
            >
              {/* CTA Button */}
              <div className="flex items-center justify-center">
                See My Work in Action
                <ChevronDown className="ml-2" size={20} />
              </div>
            </StarBorderButton>
            <StarBorderButton
              variant="secondary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1JDfrJ3ucnWJ8Z9uzmYJSKuUXtDP6HhXJ/view?usp=sharing"
                )
              }
            >
              <div className="flex items-center justify-center">
                View Resume
                <ExternalLink className="ml-2" size={16} />
              </div>
            </StarBorderButton>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-20 scale-110"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse opacity-30 scale-105"></div>

                {/* Main profile circle */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative">
                      {/* Marketing/Analytics Icons */}
                      <TrendingUp className="text-white w-24 h-24 mb-4 mx-auto block" />

                      {/* Floating icons */}
                      <Code
                        className="absolute -top-8 -left-8 text-yellow-300 w-8 h-8 animate-bounce"
                        style={{ animationDelay: "0s" }}
                      />
                      <BarChart3
                        className="absolute -top-6 -right-10 text-green-300 w-8 h-8 animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <Search
                        className="absolute -bottom-8 -left-6 text-blue-300 w-8 h-8 animate-bounce"
                        style={{ animationDelay: "1s" }}
                      />
                      <Target
                        className="absolute -bottom-6 -right-8 text-pink-300 w-8 h-8 animate-bounce"
                        style={{ animationDelay: "1.5s" }}
                      />
                      <Brain className="absolute top-2 -right-12 text-purple-300 w-6 h-6 animate-pulse" />
                      <Users className="absolute bottom-2 -left-12 text-orange-300 w-6 h-6 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8 mt-6 ">
              <div>
                <StarBorderButton variant="secondary">
                  <div className="flex items-center align-center justify-center text-2xl md:text-3xl font-bold text-gray-800">
                    About
                    <NotebookText className="ml-3" size={25} />
                  </div>
                </StarBorderButton>
                <p className="text-lg text-gray-600 leading-relaxed mt-6 mb-6">
                  I'm a passionate digital marketing strategist with a unique
                  blend of technical expertise and business acumen. My journey
                  began with a fascination for data patterns and evolved into
                  mastering the art of digital growth.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With hands-on experience in SEO, SEM, analytics, and
                  conversion optimization, I don't just analyze data, I
                  transform it into actionable strategies that drive measurable
                  business results.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Search className="text-blue-600 mr-3" size={24} />
                    <h3 className="font-bold text-gray-800">SEO & Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Advanced keyword research, technical SEO, Google Analytics
                    4, Search Console
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Code className="text-purple-600 mr-3" size={24} />
                    <h3 className="font-bold text-gray-800">
                      Technical Skills
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    React development, HTML, CSS, JavaScript
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Target className="text-green-600 mr-3" size={24} />
                    <h3 className="font-bold text-gray-800">Growth Strategy</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Conversion optimization, A/B testing, funnel analysis,
                    customer acquisition
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="text-orange-600 mr-3" size={24} />
                    <h3 className="font-bold text-gray-800">Data Analysis</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Statistical modeling, predictive analytics, attribution
                    modeling, report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-24 px-6 bg-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How I took a local restaurant from page 5 to position #2 for "Best
              italian restaurant downtown seattle 2025" in three (3) steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {caseStudyMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="flex items-center text-2xl font-bold mb-4">
              <BadgeCheck className="mr-3" size={16} />
              Strategy Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Step 1: Foundation</h4>
                <p className="text-blue-100">
                  Technical audit, core web vitals optimization, schema markup
                  implementation
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Step 2: Content</h4>
                <p className="text-blue-100">
                  Local-focused content creation, Google My Business
                  optimization, citation building
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Step 3: Authority</h4>
                <p className="text-blue-100">
                  Local partnerships, review management system, strategic link
                  building
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced Marketing Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-built tools and frameworks that demonstrate deep technical
              knowledge and strategic thinking in digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Drive Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how I can help your team achieve measurable results
            through data-driven digital marketing strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StarBorderButton
              variant="secondary"
              onClick={() =>
                window.open("https://calendly.com/dripsberry/15-mins-call")
              }
            >
              <div className="flex items-center justify-center">
                <PhoneCall className="mr-2" size={20} />
                Schedule a call
              </div>
            </StarBorderButton>
            <StarBorderButton
              onClick={() => window.open("mailto:dripsberry@gmail.com")}
            >
              <div className="flex items-center justify-center">
                <MailCheck className="mr-2" size={20} />
                Start a Conversation
              </div>
            </StarBorderButton>
            <StarBorderButton
              variant="secondary"
              onClick={() =>
                window.open("https://www.linkedin.com/in/gabrielberry/")
              }
            >
              <div className="flex items-center justify-center">
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </div>
            </StarBorderButton>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700 text-gray-400">
            <p>
              &copy; 2025 Ayorinde Gabriel. Built with React, and passion for
              growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
