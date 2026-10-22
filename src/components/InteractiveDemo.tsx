import React, { useState } from 'react';
import { Sparkles, Image, Check, Terminal, Layers } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activePreset, setActivePreset] = useState<'main_panel' | 'side_panel' | 'handle_strip'>('main_panel');
  const [threshold, setThreshold] = useState<number>(128);

  const presetsInfo = {
    main_panel: { width: 1800, height: 2400, label: "Main Front Panel (1800x2400)", bleed: "3mm" },
    side_panel: { width: 900, height: 2400, label: "Side Accent Panel (900x2400)", bleed: "2mm" },
    handle_strip: { width: 400, height: 1600, label: "Handle Reinforcement Strip (400x1600)", bleed: "1.5mm" },
  };

  return (
    <section id="interactive-demo" className="py-20 border-t border-neutral-800 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Pipeline Simulation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-100">
              Sharp Canvas Transformation Simulator
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              Simulating the Vercel Serverless microservice logic: Morphological segmentation, grayscale thresholding, and multi-part Print-on-Demand canvas composition.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400">Endpoint:</span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-teal-300">
              POST /api/crop
            </span>
          </div>
        </div>

        {/* Demo Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                Select Panel Preset
              </label>
              <div className="grid grid-cols-1 gap-2">
                {(['main_panel', 'side_panel', 'handle_strip'] as const).map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setActivePreset(preset)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-mono text-left flex items-center justify-between transition-all ${
                      activePreset === preset
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                    }`}
                  >
                    <span>{presetsInfo[preset].label}</span>
                    {activePreset === preset && <Check className="h-3.5 w-3.5 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Threshold Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Binary Alpha Threshold
                </label>
                <span className="text-xs font-mono text-cyan-400">{threshold} / 255</span>
              </div>
              <input
                type="range"
                min="64"
                max="220"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-[11px] text-neutral-500 mt-1.5">
                Controls Sharp morphological edge detection thresholding.
              </p>
            </div>

            {/* Simulated Serverless Response Headers */}
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 font-mono text-[11px] space-y-1.5 text-neutral-400">
              <div className="text-neutral-300 font-semibold flex items-center gap-1.5 mb-2">
                <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                <span>Execution Telemetry</span>
              </div>
              <div><span className="text-neutral-500">status:</span> <span className="text-emerald-400">200 OK</span></div>
              <div><span className="text-neutral-500">dimensions:</span> {presetsInfo[activePreset].width}x{presetsInfo[activePreset].height}px</div>
              <div><span className="text-neutral-500">bleed_offset:</span> {presetsInfo[activePreset].bleed}</div>
              <div><span className="text-neutral-500">storage:</span> vercel-blob://jobs/e4f2...</div>
              <div><span className="text-neutral-500">ttl_cleanup:</span> 1800s (~30 min sweep)</div>
            </div>
          </div>

          {/* Interactive Visual Comparison Stage */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col items-center">
            <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
              <span className="text-neutral-400">◄ Raw Upload (Unmasked)</span>
              <span className="text-cyan-400 font-semibold">Processed POD Canvas Matrix ►</span>
            </div>

            {/* Simulated Canvas Stage */}
            <div className="relative w-full aspect-[4/3] max-w-xl rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 select-none shadow-2xl">
              {/* Processed Layer (Background) */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.12) 0%, transparent 60%)`
                }}
              >
                <div 
                  className="rounded-lg border border-cyan-500/40 p-6 flex flex-col items-center justify-center transition-all bg-neutral-950/70 shadow-inner"
                  style={{
                    width: activePreset === 'main_panel' ? '70%' : activePreset === 'side_panel' ? '45%' : '25%',
                    height: '80%',
                    filter: `contrast(${1 + (threshold - 128) / 200})`
                  }}
                >
                  <Layers className="h-10 w-10 text-cyan-400 animate-pulse mb-3" />
                  <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider text-center">
                    {activePreset.replace('_', ' ')}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">
                    {presetsInfo[activePreset].width} × {presetsInfo[activePreset].height}
                  </span>
                  <div className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Sharp WebP • 90 Quality
                  </div>
                </div>
              </div>

              {/* Raw Upload Layer (Foreground clip) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-neutral-900 border-r-2 border-cyan-400 flex items-center justify-center"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="w-[450px] flex flex-col items-center justify-center p-6 text-neutral-400">
                  <Image className="h-12 w-12 text-neutral-500 mb-2" />
                  <span className="text-xs font-mono text-neutral-300 font-semibold">Raw Multipart File</span>
                  <span className="text-[11px] text-neutral-500 mt-1">Non-standardized dimensions & alpha</span>
                  <div className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                    Raw Input (Stream)
                  </div>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute inset-y-0 -ml-3 w-6 flex items-center justify-center cursor-ew-resize pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-6 h-6 rounded-full bg-cyan-400 text-neutral-950 flex items-center justify-center shadow-lg font-bold text-xs">
                  ⬌
                </div>
              </div>
            </div>

            {/* Slider bar */}
            <div className="w-full max-w-xl mt-4">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-1">
                <span>0% Raw</span>
                <span>Drag to Reveal Sharp Masking</span>
                <span>100% Processed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
