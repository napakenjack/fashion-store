import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1fac08b4fa?q=80&w=2000&auto=format&fit=crop"
          alt="AURA Studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
            Redefining Everyday Essentials
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            AURA was born out of a simple desire: to create clothing that looks good, feels incredible, and lasts longer than a single season. We believe that the foundation of a great wardrobe is built on high-quality, versatile pieces that can be worn day in and day out.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We are committed to minimalist design, exceptional craftsmanship, and sustainable practices. Every piece in our collection is thoughtfully designed in our studio and ethically produced by our trusted partners around the world.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Intentional Design</h3>
              <p className="text-neutral-600">
                We design with purpose. No unnecessary details, no fleeting trends. Just clean lines, flattering silhouettes, and timeless appeal.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Premium Materials</h3>
              <p className="text-neutral-600">
                We source the finest fabrics—from organic cotton to extra-fine Merino wool—ensuring our garments feel as good as they look.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Ethical Production</h3>
              <p className="text-neutral-600">
                We partner exclusively with factories that share our commitment to fair wages, safe working conditions, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop"
                alt="Design process"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop"
                alt="Fabric details"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
            Experience the Collection
          </h2>
          <Button asChild size="lg">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
