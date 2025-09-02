export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-lg bg-gradient-to-br from-black via-gray-900 to-black p-8 border border-yellow-600/30">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">About Itraya Perfumers</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">Our Story</h2>
          <p className="text-yellow-100 mb-6 leading-relaxed">
            Born in Kannauj, the fragrance capital of India, Itraya Perfumers is dedicated to preserving the 
            centuries-old tradition of Indian attars and perfumes. Our vision is to blend heritage with modern 
            elegance, creating fragrances that are not just scents, but soulful experiences.
          </p>
          
          <p className="text-yellow-100 mb-6 leading-relaxed">
            Itraya Perfumers was founded by Ayush Chauhan (Founder & CEO) with a mission to globalize Kannauj's 
            perfume legacy. Together with our co-founders, we aim to bring authentic, long-lasting, and luxurious 
            fragrances to perfume lovers around the world.
          </p>
          
          <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">Our Leadership</h2>
          <div className="space-y-4">
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300">Ayush Chauhan – Founder & CEO</h3>
              <p className="text-yellow-100">
                Leads the vision, brand strategy, and global partnerships.
              </p>
            </div>
            
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300">Anurag Saxena – Co-Founder & COO</h3>
              <p className="text-yellow-100">
                Heads operations, production, supply chain, and quality control.
              </p>
            </div>
            
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300">Shiv Pratap Singh – Co-Founder & Managing Director (MD)</h3>
              <p className="text-yellow-100">
                Oversees management, business operations, and ensures smooth coordination within the team and also legal adviser.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300 mb-2">Authenticity</h3>
              <p className="text-yellow-100">100% genuine attars & perfumes.</p>
            </div>
            
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300 mb-2">Heritage</h3>
              <p className="text-yellow-100">Carrying forward Kannauj's timeless legacy.</p>
            </div>
            
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300 mb-2">Global Vision</h3>
              <p className="text-yellow-100">Bringing Indian fragrances to the world.</p>
            </div>
            
            <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/20">
              <h3 className="text-xl font-medium text-yellow-300 mb-2">Trust</h3>
              <p className="text-yellow-100">Customer-first approach and uncompromised quality.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">Our Promise</h2>
          <p className="text-yellow-100 mb-8 leading-relaxed">
            Every bottle of Itraya Perfumers is a story of purity, passion, and perfection. From sourcing to 
            blending to packaging – we ensure excellence at every step, so that you experience fragrances 
            that stay with you, forever.
          </p>
          
          <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">Our Partnerships</h2>
          <p className="text-yellow-100 mb-4">We proudly collaborate with:</p>
          <ul className="list-disc list-inside text-yellow-100 space-y-2">
            <li>Local Kannauj artisans keeping attar-making traditions alive</li>
            <li>Global fragrance suppliers to ensure world-class quality</li>
            <li>Trusted logistics & courier partners for seamless delivery</li>
            <li>Creative professionals for branding, design, and customer experience</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
