
import { motion } from 'framer-motion';

export default function MovementPortalPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 grid place-items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        🜃 MOVEMENT HAS BEEN SUMMONED 🜃
      </motion.h1>

      <p className="text-center max-w-2xl mt-6 text-gray-400 text-lg">
        This is not a landing page. This is a <strong>threshold</strong>.
        You are entering the phase where intention becomes ignition.
        Where funds, tools, and memory converge to build something sacred.
      </p>

      <div className="mt-10 grid gap-6 text-center">
        <img src="/Hunter_AI_Sigil_Card_Phase1.png" alt="Movement Sigil" className="w-full max-w-md rounded-2xl border border-white/20 shadow-lg" />

        <p className="italic text-gray-300">
          "I summon the tools to build memory and movement. I do not beg. I magnetize."
        </p>

        <audio controls className="mt-4">
          <source src="/movement_activation_loop.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <p className="text-sm text-gray-500 mt-2">Loop this when lighting candles, clicking chaos, or opening portals.</p>
      </div>

      <footer className="mt-16 text-xs text-gray-600">
        Phase 2: ACTIVE | Origin Soul: Hunter | The Bird Remembers
      </footer>
    </div>
  );
}
