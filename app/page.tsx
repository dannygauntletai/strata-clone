import Image from "next/image";
import RevenueCalculator from "@/components/revenue-calculator";

export default function Home() {
  return (
    <div className="">
      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#0056b3] to-[#004085]">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/4 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1
                  className="text-4xl font-black tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-100"
                  style={{ lineHeight: '1.1' }}
                >
                  START A <br />
                  STRATA SCHOOL
                </h1>
                <div className="block lg:hidden">
                  <video
                    src="/videos/strata-promo.mp4"
                    width={1000}
                    className="rounded-lg object-cover shadow-lg w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/soccer-coach-training.png"
                  />
                </div>
                <p className="text-white md:text-xl">
                  Do what you love. Coach students and double your salary doing it.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="https://form.typeform.com/to/OmA3cRhW" className="bg-blue-100 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-200 transition-colors text-center">
                  APPLY NOW
                </a>
              </div>
            </div>
            <div className="hidden lg:block w-full lg:w-3/4">
              <video
                src="/videos/strata-promo.mp4"
                width={1000}
                className="rounded-lg object-cover shadow-lg w-full"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/soccer-coach-training.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strata Sports Schools Explained Section */}
      <section className="py-8 bg-[#F8F9FA]">
        <h2 className="text-4xl font-extrabold text-blue-500 text-center mt-8 mb-8">STRATA SCHOOLS EXPLAINED</h2>
        <div className="container mx-auto text-center px-4 md:px-0 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-800 mb-8 text-lg">
              Strata Schools use an AI-driven education platform called 2 Hour Learning to teach students. With this platform, you don't have to worry about teaching any academics.
            </p>

            <p className="text-gray-800 mb-8 text-lg">
              
              With 2 Hour Learning, every student gets personalized, mastery-based learning that's based on the latest research from learning science. It allows students to <b>learn 2x faster than a traditional classroom while only spending 2 hours a day on academics</b>
            </p>

          {/* Embed Video */}
          <div className="mb-8">
            <div className="relative w-full aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dst2hGUYT28"
                title="Strata 2-Hour Learning Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

            <p className="text-gray-800 mb-8 text-lg">
              
               <a href="https://www.fox7austin.com/news/alpha-school-two-hour-learning-ai-tutor-austin-texas" className="text-blue-600">It's been proven across the Alpha School network</a> and Strata Schools is expanding 2 Hour Learning to every student in Texas.
            </p>
            
            <p className="text-gray-800 mb-8 text-lg">
              At Strata, students spend the afternoons focusing on a sport and doing life-skills workshops to become great athletes and role models in addition to being great students.
            </p>
          </div>

        </div>
      </section>

      {/* Sports Start at Noon Section */}
      <section className="py-8 bg-white">
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mt-8 mb-8">
          SPORTS START AT NOON
        </h2>
        <div className="container mx-auto px-4 md:px-8 pb-8">
          <p className="text-gray-700 text-center text-lg mb-8 max-w-3xl mx-auto">
            Strata microschools focus on either football, basketball or soccer.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blue-50 p-8 rounded-lg flex items-center gap-6">
              <span className="text-blue-600 text-6xl">🏈</span>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Strata Football</h3>
                <p className="text-gray-700">Led by ex-NFL athletes and top high school football coaches.</p>
                <p className="text-gray-700 mt-2">Help students develop the technique, skills and character to be the star player on their high school program.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg flex items-center gap-6">
              <span className="text-blue-600 text-6xl">🏀</span>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Strata Basketball</h3>
                <p className="text-gray-700">Led by ex-Division I athletes and the best high school basketball coaches.</p>
                <p className="text-gray-700 mt-2">Students learn the form, footwork and game IQ for success in high school basketball.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg flex items-center gap-6">
              <span className="text-blue-600 text-6xl">⚽</span>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Strata Soccer</h3>
                <p className="text-gray-700">Run by ex-Division I athletes and elite high school soccer coaches.</p>
                <p className="text-gray-700 mt-2">Teach students the footwork, mechanics and mentality for excellence in their high school team or in club soccer.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-center text-lg mt-8 max-w-3xl mx-auto">
            Interested in starting a Strata School focused on a different sport? <a href="mailto:team@strata.school" className="text-blue-600">Email us</a>
          </p>
        </div>
      </section>

      {/* Why Start a Strata School Section */}
      <section className="py-8 bg-gradient-to-b from-[#0056b3] to-[#004085]">
        <h2 className="text-4xl font-extrabold text-blue-100 text-center mt-8 mb-8">WHY START A STRATA SCHOOL</h2>
        <div className="container mx-auto px-4 md:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <span className="text-blue-600 text-[8rem]">💵</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">DOUBLE YOUR INCOME</h3>
              <p className="text-gray-600">
                Strata Schools run from 8 am to 2:30 pm. You can keep your coaching job while adding on additional income from the Strata School
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <span className="text-blue-600 text-[8rem]">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">TEACH WHAT YOU LOVE</h3>
              <p className="text-gray-600">
                Teach the sport you love. Coach kids to become better players, build grit and determination and fall in love with the game.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <span className="text-blue-600 text-[8rem]">✨</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">MAKE A DIFFERENCE</h3>
              <p className="text-gray-600">
                One coach can completely change the trajectory of a child's life. Be that coach for the kids in your Strata School
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Calculate Revenue Section */}
      <section className="py-8 w-full bg-[#F8F9FA]">
        <h2 className="text-[40px] font-semibold leading-[48px] text-blue-600 font-integral text-center mt-8 mb-8">
          CALCULATE REVENUE
        </h2>
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8 pb-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-[1000px] mx-auto">
            <div className="space-y-2">
              <p className="text-gray-700 md:text-xl max-w-3xl mx-auto">
                Texas ESAs bring in $10,000 per student you recruit. We combine that with $5,000 of tuition from parents for revenue of $15,000 per student.
              </p>

              <p className="text-gray-700 md:text-xl max-w-3xl mx-auto">Use the slider below to estimate your annual revenue.</p>
            </div>

            <RevenueCalculator />
          </div>
        </div>
      </section>

      {/* Strata's 3 Commitments Section */}
      <section className="py-8 bg-white">
        <h2 className="text-4xl font-extrabold text-blue-400 text-center mt-8 mb-8">
          STRATA'S 3 COMMITMENTS TO YOU
        </h2>
        <div className="container mx-auto px-4 md:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-block text-blue-600 text-[8rem]">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">WE'LL FILL YOUR SCHOOL</h3>
              <p className="text-gray-600">
                Strata Schools has built out a network of thousands of parents who are interested in 2 Hour Learning for their child.
              </p>
              <p className="text-gray-600 mt-2">
                When you join the Strata network, you can recruit your own students but Strata will help make sure your classroom is filled.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-600 text-[8rem]">📚</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">WE HANDLE ACADEMICS</h3>
              <p className="text-gray-600">
                Strata handles all the academics with 2 Hour Learning and our pre-designed life skills workshops. 
              </p>
              <p className="text-gray-600 mt-2">
                You can focus on what you do best - teaching your passion sport.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-600 text-[8rem]">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">FORGET THE GRUNTWORK</h3>
              <p className="text-gray-600">
                We'll help you handle all the admin work that goes with running a school.
              </p>
              <p className="text-gray-600 mt-2">
                Finding real estate, negotiating leases, ESA paperwork and everything else will be handled by our platform.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-8 bg-gradient-to-b from-[#0056b3] to-[#004085]">
        <h2 className="text-4xl font-extrabold text-blue-100 text-center mt-8 mb-8">
          DAILY SCHEDULE
        </h2>
        <div className="container mx-auto px-4 md:px-8 pb-8">
          <p className="text-white text-center text-xl mb-12 max-w-3xl mx-auto">
            Our structured daily program is designed to balance academic learning with physical activity and essential life skills development.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-blue-500"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {/* Item 1: Morning Learning */}
              <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-6 md:mt-0">
                  <div className="bg-blue-50 p-6 rounded-xl text-right">
                    <h3 className="text-xl font-bold text-blue-600 mb-2 text-right">
                      8 AM - 11 AM
                    </h3>
                    <p className="text-gray-600 text-right">
                      Six pomodoro sessions of focused learning. Students develop core academic skills through our structured curriculum.
                    </p>
                  </div>
                </div>
                <div className="mx-auto md:mx-0 order-1 md:order-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-yellow-400 z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block order-3">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Item 2: Lunch */}
              <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                <div className="md:w-1/2 md:pr-8 hidden md:block order-1">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center ml-auto">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" d="M15 11v.01M11 11v.01M3 11v.01M13 16v.01" />
                      <path strokeWidth="2" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mx-auto md:mx-0 order-1 md:order-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-orange-500 z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-2 md:order-3 mt-6 md:mt-0">
                  <div className="bg-blue-50 p-6 rounded-xl text-left">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      11 AM - 11:30 AM
                    </h3>
                    <p className="text-gray-600">
                      Lunch break. Students enjoy nutritious meals and socialize with peers in a supervised environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Afternoon Activities */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-6 md:mt-0">
                  <div className="bg-blue-50 p-6 rounded-xl text-right">
                    <h3 className="text-xl font-bold text-blue-600 mb-2 text-right">
                      11:30 AM - 2:30 PM
                    </h3>
                    <p className="text-gray-600 text-right">
                      Sports Activities and Life Skills workshops. Students develop athletic abilities while learning essential skills for success.
                    </p>
                  </div>
                </div>
                <div className="mx-auto md:mx-0 order-1 md:order-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-blue-500 z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block order-3">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-8">
        <p className="text-gray-600">
          Questions? Contact us at <a href="mailto:team@strata.school" className="text-blue-600">team@strata.school</a> and we'll respond within 24 hours.
        </p>
      </div>
    </div>
  );
}
