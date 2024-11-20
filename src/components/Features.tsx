import { Zap, Layers, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Instant Bond',
      description: 'Quick-setting formula that creates strong bonds in seconds',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-100 to-yellow-200',
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-500" />,
      title: 'Multi-Surface Use',
      description: 'Works on wood, metal, ceramic, plastic, and more',
      gradient: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-100 to-blue-200',
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: 'Long-Lasting',
      description: 'Professional-grade durability that stands the test of time',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-100 to-green-200',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Why Choose Today Bond?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Our advanced adhesive technology delivers exceptional bonding power for all your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.bgGradient} mb-6`}
              >
                {/* Background is now less intense for better contrast */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
