export default function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of teams that use our platform to streamline their processes and boost productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold text-lg">
            Get Started Now
          </a>
          <a href="#demo" className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-semibold text-lg">
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
} 