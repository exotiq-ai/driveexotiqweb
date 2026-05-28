'use client';

import { useState, useMemo } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ROICalculator() {
  const [fleetSize, setFleetSize] = useState(10);
  const [dailyRate, setDailyRate] = useState(1500);
  const [utilization, setUtilization] = useState(52);

  const results = useMemo(() => {
    const currentAnnualRevenue = fleetSize * dailyRate * 365 * (utilization / 100);
    const projectedRevenue = currentAnnualRevenue * 1.18;
    const revenueIncrease = projectedRevenue - currentAnnualRevenue;
    const perVehicleRate = fleetSize <= 15 ? 39 : 29;
    const exotiqAnnualCost = fleetSize * perVehicleRate * 12;
    const roi = Math.round((revenueIncrease / exotiqAnnualCost) * 100);
    const paybackDays = Math.ceil((exotiqAnnualCost / revenueIncrease) * 365);

    return {
      currentAnnualRevenue,
      revenueIncrease,
      exotiqAnnualCost,
      netGain: revenueIncrease - exotiqAnnualCost,
      roi,
      paybackDays,
      perVehicleRate,
    };
  }, [fleetSize, dailyRate, utilization]);

  return (
    <section className="py-20 lg:py-28 bg-jet-grey/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-caption text-performance-orange mb-4">ROI CALCULATOR</p>
          <h2 className="text-h2 text-pure-white mb-4">
            See What Exotiq Does for Your Bottom Line
          </h2>
          <p className="text-body text-metallic-silver max-w-2xl mx-auto">
            Our AI pricing engine delivers an average 18% revenue increase. Plug in your numbers.
          </p>
        </div>

        <div className="bg-graphite/60 border border-metallic-silver/10 rounded-2xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-medium text-pure-white">Fleet Size</label>
                  <span className="text-gulf-blue font-bold text-lg">{fleetSize} vehicles</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-metallic-silver/60 mt-1">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-medium text-pure-white">Average Daily Rate</label>
                  <span className="text-gulf-blue font-bold text-lg">{formatCurrency(dailyRate)}</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={5000}
                  step={50}
                  value={dailyRate}
                  onChange={(e) => setDailyRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-metallic-silver/60 mt-1">
                  <span>$500</span>
                  <span>$2,500</span>
                  <span>$5,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-medium text-pure-white">Current Utilization</label>
                  <span className="text-gulf-blue font-bold text-lg">{utilization}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={90}
                  value={utilization}
                  onChange={(e) => setUtilization(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-metallic-silver/60 mt-1">
                  <span>10%</span>
                  <span>50%</span>
                  <span>90%</span>
                </div>
              </div>

              <p className="text-xs text-metallic-silver/50">
                Using {fleetSize <= 15 ? 'Pro' : 'Business'} plan at ${results.perVehicleRate}/vehicle/month
              </p>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="bg-deep-black/60 rounded-xl p-5 border border-metallic-silver/10">
                <p className="text-xs text-metallic-silver mb-1">Your fleet generates</p>
                <p className="text-2xl font-bold text-pure-white">{formatCurrency(results.currentAnnualRevenue)}<span className="text-sm font-normal text-metallic-silver">/year</span></p>
              </div>

              <div className="bg-deep-black/60 rounded-xl p-5 border border-gulf-blue/20">
                <p className="text-xs text-metallic-silver mb-1">With AI pricing optimization</p>
                <p className="text-2xl font-bold text-gulf-blue">+{formatCurrency(results.revenueIncrease)}<span className="text-sm font-normal text-metallic-silver">/year</span></p>
                <p className="text-xs text-metallic-silver/60 mt-1">18% increase from MotorIQ AI</p>
              </div>

              <div className="bg-deep-black/60 rounded-xl p-5 border border-metallic-silver/10">
                <p className="text-xs text-metallic-silver mb-1">Exotiq costs</p>
                <p className="text-2xl font-bold text-pure-white">{formatCurrency(results.exotiqAnnualCost)}<span className="text-sm font-normal text-metallic-silver">/year</span></p>
              </div>

              <div className="bg-gradient-to-r from-gulf-blue/10 to-performance-orange/10 rounded-xl p-5 border border-gulf-blue/30">
                <p className="text-xs text-metallic-silver mb-1">Net annual gain</p>
                <p className="text-3xl font-bold text-pure-white">{formatCurrency(results.netGain)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-deep-black/60 rounded-xl p-5 border border-performance-orange/20 text-center">
                  <p className="text-3xl font-bold text-performance-orange">{results.roi}x</p>
                  <p className="text-xs text-metallic-silver mt-1">ROI</p>
                </div>
                <div className="bg-deep-black/60 rounded-xl p-5 border border-gulf-blue/20 text-center">
                  <p className="text-3xl font-bold text-gulf-blue">{results.paybackDays} days</p>
                  <p className="text-xs text-metallic-silver mt-1">Pays for itself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
