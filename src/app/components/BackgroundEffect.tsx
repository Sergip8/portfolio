"use client";

import React from 'react'

function BackgroundEffect() {


  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10 animate-gradient-shift"></div>
    <style jsx global>{`
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-shift {
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
      }
    `}</style>
  </div>
  )
}

export default BackgroundEffect