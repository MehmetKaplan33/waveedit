import { Element } from "react-scroll";
import FaqItem from "../components/FaqItem.jsx";
import Badge from "../components/Badge.jsx";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "What is XORA AI Video Editor?",
      answer: "XORA is an advanced AI-powered video editing platform that automates the editing process. It uses artificial intelligence to help you create professional-quality videos quickly and easily, without requiring extensive editing experience.",
    },
    {
      id: 2,
      question: "How does the AI video editing work?",
      answer: "Our AI analyzes your video content and automatically suggests edits, transitions, and effects based on industry best practices. You can then customize these suggestions or let the AI handle everything automatically.",
    },
    {
      id: 3,
      question: "What video formats are supported?",
      answer: "XORA supports all major video formats including MP4, MOV, AVI, and MKV. You can upload videos in any resolution up to 8K, depending on your subscription plan.",
    },
    {
      id: 4,
      question: "Is there a limit on video length?",
      answer: "Video length limits vary by plan. Free users can edit videos up to 5 minutes, Premium users up to 30 minutes, and Team plan users have no length restrictions.",
    },
    {
      id: 5,
      question: "Can I try XORA before subscribing?",
      answer: "Yes! You can start with our Free plan to explore XORA's features. This includes access to basic editing tools, templates, and the ability to create up to 5 projects per month.",
    },
    {
      id: 6,
      question: "How secure is my content?",
      answer: "We take security seriously. All uploads are encrypted, and your content is stored securely in our cloud infrastructure. We never share or use your content for any purpose other than providing our service.",
    },
  ];

  const halfLength = Math.floor(faqs.length / 2);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-50 text-blue-700">FAQ</Badge>
          <h2 className="text-5xl font-medium mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Find answers to common questions about XORA's AI video editing platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            {faqs.slice(0, halfLength).map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
          <div className="space-y-6">
            {faqs.slice(halfLength).map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
