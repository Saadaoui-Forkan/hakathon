import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="w-full max-w-3xl p-6 rounded-lg">
        {children}
      </div>
    </div>
);

export default PageLayout