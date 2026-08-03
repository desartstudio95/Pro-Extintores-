import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="fixed bottom-6 right-6 z-50 origin-bottom-right"
    >
      <a
        href="https://wa.me/258877904074"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5b] text-gray-900 px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
      >
        <MessageCircle size={28} />
        <span className="font-semibold hidden sm:block">Solicitar Crédito</span>
      </a>
    </motion.div>
  );
}
