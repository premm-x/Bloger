import { useEffect, useState } from "react";


function Hometwo() {

  const [TextIndex, setTextIndex] = useState(0);

  const texts = [
    {
      text: "Your Stories, ",
      highlight: "Your Community"
    },
    {
      text: "Share what’s in ",
      highlight: "your heart"
    },
  ];

  const rating = [
    {
      discription: "I love this platform! Sharing my stories has never been easier, and I’ve connected with so many amazing people",
      name: "Vijay S.",
      image: "./p1.jpg"
    },
    {
      discription: "Such an easy-to-use platform! Posting my thoughts and getting feedback from the community is amazing.",
      name: "Ananya M.",
      image: "./p2.jpg"
    },
    {
      discription: "A wonderful place to express myself! I’ve found so many like-minded people and exciting content here.",
      name: "Karan R.",
      image: "./p3.jpg"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-white">

      {/* header */}
      <header className="bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full relative">
                <div className="absolute top-0.5 left-0.5 w-1 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-xl font-bold text-gray-900">SoulPosts<span className="text-3xl text-green-400">.</span></p>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">About Us</a>
            <a href="/signin" className="text-gray-600 hover:text-gray-800 font-medium">Login</a>
            <a href="/register" className="text-gray-600 hover:text-gray-800 font-medium">Sign Up</a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="pt-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {texts[TextIndex].text}<span className="text-green-600">{texts[TextIndex].highlight}</span>,<br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">Blog Freely. Connect Deeply.</span>
          </h1>

          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Welcome to a space where your voice matters. Share stories, ideas, and connect with a vibrant community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Watch Video
            </button>
            <button className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* VisualBlocks */}
      <section className="pb-16 px-6">
        <div className="flex justify-center items-end space-x-4 h-96 ">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <div className="w-72 h-36 bg-green-light rounded-3xl bg-green-200 overflow-hidden ">
              <img src="https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg" alt="Card Image" 
              className="w-full h-full object-cover" />
            </div>
            <div className="w-72 h-52 bg-green-light rounded-3xl bg-green-300 overflow-hidden">
              <img src="https://i.pinimg.com/1200x/f8/b7/35/f8b7353f48f943f20711618a533b197a.jpg" alt="Card Image" 
              className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <div className="w-72 h-[305px] bg-green-light rounded-3xl bg-green-200 overflow-hidden">
               <img src="https://i.pinimg.com/736x/58/51/82/585182d8da13970fb3ecb2f1487d615a.jpg" alt="Card Image" 
              className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <div className="w-72 h-28 bg-green-light rounded-3xl bg-green-400 overflow-hidden">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmj3LtNymgEG1ytBgvtqrjTpaYYYJuao9Qg&s" alt="Card Image" 
              className="w-full h-full object-cover" />
            </div>
            <div className="w-72 h-44 bg-green-light rounded-3xl bg-green-200 overflow-hidden">
               <img src="https://i.pinimg.com/1200x/37/fc/a6/37fca6c130af9ac65cf88ffdae44dfd8.jpg" alt="Card Image" 
              className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-4">
            <div className="w-72 h-[370px] bg-green-light rounded-3xl bg-green-100 overflow-hidden">
               <img src="https://i.pinimg.com/1200x/a6/44/91/a6449101d81731a30254d352607d6069.jpg" alt="Card Image" 
              className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* EcoSection */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Towards Eco Friendly Living Culture
          </h2>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Trusted, Impactful
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              How We Help You Give Back
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the tools and options that make sharing, connecting, and
              exploring blogs easier and more fun. Everything you need to express yourself in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {rating.map((item) => (
              <div key={item} className="text-center border-[1px] border-gray-300 rounded-3xl py-8 px-2">
                <div className="w-15 h-15  rounded-2xl m-auto flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`img-$}`}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {item.name}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {item.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Small Changes Make a Big Difference
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit.Lorem
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-48 h-32 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 font-medium">Image</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Hometwo;