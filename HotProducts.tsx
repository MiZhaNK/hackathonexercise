export default function HotProduct() {
    return (
      <header className="container mx-auto px-4 py-12 lg:py-16 bg-white">
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
          {/* Vertical text */}
          <div className="writing-mode-vertical-lr hidden text-xl font-medium tracking-wider text-zinc-900 md:block pt-6">
            EXPLORE NEW AND POPULAR STYLES
          </div>
  
          {/* Mobile text version */}
          <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
            EXPLORE NEW AND POPULAR STYLES
          </div>
  
          {/* Images section with white background */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8">
            {/* Left side chair */}
            <div className="w-full md:w-[48%] border-0">
              <img
                src="/chair2.jpg"
                alt="Orange modern chair"
                className="h-full w-full object-cover border-0"
                width={500}
                height={500}
              />
            </div>
  
            {/* Right side chairs */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%] border-0">
              <div className="aspect-square border-0">
                <img
                  src="/chair4.jpg"
                  alt="White tufted chair"
                  className="h-full w-full object-cover border-0"
                  width={500}
                  height={500}
                />
              </div>
              <div className="aspect-square border-0">
                <img
                  src="/chair1.jpg"
                  alt="Gray upholstered chair"
                  className="h-full w-full object-cover border-0"
                  width={500}
                  height={500}
                />
              </div>
              <div className="aspect-square border-0">
                <img
                  src="/wing-chair.jpg"
                  alt="Vintage white chair"
                  className="h-full w-full object-cover border-0"
                  width={500}
                  height={500}
                />
              </div>
              <div className="aspect-square border-0">
                <img
                  src="/library stool chair.jpg"
                  alt="Vintage white chair duplicate"
                  className="h-full w-full object-cover border-0"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  