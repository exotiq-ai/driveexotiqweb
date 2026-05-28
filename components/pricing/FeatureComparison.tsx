'use client';

import { allIncludedFeatures, comparisonRows } from './pricingData';

export default function FeatureComparison() {
  return (
    <section className="py-20 lg:py-28 bg-deep-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* All-Included Section */}
        <div className="text-center mb-16">
          <p className="text-caption text-gulf-blue mb-4">WHAT&rsquo;S INCLUDED</p>
          <h2 className="text-h2 text-pure-white mb-4">All Features Included on Every Plan</h2>
          <p className="text-body text-metallic-silver max-w-2xl mx-auto mb-10">
            No feature gates. No upsells. Every paid plan gets the full platform.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {allIncludedFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 bg-graphite/40 rounded-lg px-4 py-3 border border-metallic-silver/10"
              >
                <svg
                  className="w-4 h-4 text-gulf-blue flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-pure-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Differences Table */}
        <div className="text-center mb-10">
          <h3 className="text-h3 text-pure-white mb-4">Plan Differences</h3>
          <p className="text-body-sm text-metallic-silver">
            The main differences between plans are fleet size, support level, and enterprise features.
          </p>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-metallic-silver/20">
                <th className="text-left text-sm font-semibold text-metallic-silver py-4 pr-4 w-1/4" />
                <th className="text-center text-sm font-semibold text-gulf-blue py-4 px-4 w-1/4">Pro</th>
                <th className="text-center text-sm font-semibold text-pure-white py-4 px-4 w-1/4">Business</th>
                <th className="text-center text-sm font-semibold text-performance-orange py-4 pl-4 w-1/4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-metallic-silver/10">
                  <td className="text-sm font-medium text-pure-white py-4 pr-4">{row.label}</td>
                  <td className="text-center text-sm text-metallic-silver py-4 px-4">{row.pro}</td>
                  <td className="text-center text-sm text-metallic-silver py-4 px-4">{row.business}</td>
                  <td className="text-center text-sm text-metallic-silver py-4 pl-4">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
