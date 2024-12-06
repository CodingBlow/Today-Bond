export default function VideoSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r text-yellow-500 bg-clip-text text-transparent">
            See Today Bond in Action
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the power of our professional-grade adhesive with these
            captivating demonstrations. See how we deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Video */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transform-gpu">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/G1XizCoSblg?autoplay=1&mute=1"
              title="YouTube video player 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Second Video */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transform-gpu">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/t5SnkJbBIJM?autoplay=1&mute=1"
              title="YouTube video player 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Third Video */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transform-gpu">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/G5tof-o463c?autoplay=1&mute=1"
              title="YouTube video player 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* Fourth Video
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transform-gpu">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/6uJu4bcBsEw?autoplay=1&mute=1"
              title="YouTube video player 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
}
