'use client';

import React, { useState, useEffect } from 'react';

export default function AnalyticsSection() {
  const [timeRange, setTimeRange] = useState('Last 30 days');

  useEffect(() => {
    // Initialize the analytics chart
    const initChart = () => {
      if (typeof window !== 'undefined' && (window as any).Highcharts) {
        (window as any).Highcharts.chart('analytics-chart', {
          credits: { enabled: false },
          chart: {
            type: 'line',
            backgroundColor: 'transparent',
            height: 250
          },
          title: { text: null },
          xAxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            lineColor: '#E5E7EB',
            tickColor: '#E5E7EB'
          },
          yAxis: {
            title: { text: null },
            gridLineColor: '#F3F4F6'
          },
          legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'horizontal'
          },
          series: [{
            name: 'Views',
            data: [120000, 145000, 132000, 167000],
            color: '#6366F1',
            lineWidth: 3,
            marker: {
              fillColor: '#6366F1',
              radius: 5
            }
          }, {
            name: 'Engagement',
            data: [8500, 9200, 8800, 11400],
            color: '#06B6D4',
            lineWidth: 3,
            marker: {
              fillColor: '#06B6D4',
              radius: 5
            }
          }],
          plotOptions: {
            line: {
              dataLabels: { enabled: false },
              enableMouseTracking: true
            }
          }
        });
      }
    };

    // Initialize chart after a small delay to ensure DOM is ready
    const timer = setTimeout(initChart, 100);
    return () => clearTimeout(timer);
  }, []);

  const timeRanges = [
    'Last 7 days',
    'Last 30 days',
    'Last 90 days'
  ];

  return (
    <section id="analytics-section" className="mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Performance Analytics</h2>
            <p className="text-muted">Track your video marketing success</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              {timeRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            <button className="text-primary font-medium hover:underline">View Detailed Report</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Views & Engagement</h3>
              <div id="analytics-chart" className="h-64"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Top Performing Videos</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-play text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Summer Collection Launch</h4>
                    <p className="text-xs text-muted">124K views • 8.2% CTR</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent2 text-xs">↗ 23%</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-play text-secondary"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Client Success Stories</h4>
                    <p className="text-xs text-muted">98K views • 12.1% CTR</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent2 text-xs">↗ 31%</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent1/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-play text-accent1"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Product Tutorial</h4>
                    <p className="text-xs text-muted">76K views • 6.8% CTR</p>
                  </div>
                  <div className="text-right">
                    <span className="text-danger text-xs">↘ 5%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Platform Distribution</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-youtube text-red-500"></i>
                    <span className="text-sm">YouTube</span>
                  </div>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-instagram text-pink-500"></i>
                    <span className="text-sm">Instagram</span>
                  </div>
                  <span className="text-sm font-medium">28%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-linkedin text-blue-600"></i>
                    <span className="text-sm">LinkedIn</span>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}