import { useEffect, useState } from "react";
import {
  IconHome,
  IconMinusVertical,
  IconMoon,
  IconTerminal2,
  IconPlus,
  IconLogin,
  IconBrandGithub,
  IconMenu3,
  IconX,
  IconSun,
} from "@tabler/icons-react";

function Hometwo() {

  const [TextIndex, setTextIndex] = useState(0);
  const [open, setOpen] = useState(false);

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

  const items = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Login",
      icon: <IconLogin className="h-full w-full" />,
      href: "/signin",
    },
    {
      title: "Register",
      icon: <IconPlus className="h-full w-full " />,
      href: "/register",
    },

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-white">

      {/* header */}
      <header className="bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-xl font-bold text-gray-900">SoulPosts<span className="text-3xl text-green-400">.</span></p>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">About Us</a>
            <a href="/signin" className="text-gray-600 hover:text-gray-800 font-medium">Login</a>
            <a href="/register" className="text-gray-600 hover:text-gray-800 font-medium">Sign Up</a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="p-2 md:hidden rounded-md text-black"
          >
            <IconMenu3 size={25} />
          </button>

          {open && (

            <div
              className={`fixed inset-0 z-50 flex transform transition-transform ease-in-out duration-500 ${open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setOpen(false)}
              />

              {/* Sidebar Content */}
              <div
                className="relative w-64 h-full bg-white  text-black  flex flex-col justify-between p-4"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
              >
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <IconX size={24} />
                </button>

                {/* Navigation links */}
                <nav className="mt-10 space-y-6">
                  {items.filter((tab) => (tab.for != "mobile")).map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={item.activity}
                      className="flex items-center gap-3 text-black  hover:text-gray-800 transition"
                    >
                      <span className="w-5 h-5">{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  ))}
                </nav>

              </div>
            </div>

          )}


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

          <div className="flex py-5 px-5 relative flex-col sm:flex-row gap-4 justify-center items-center">
            <hr className="w-full text-gray-400" />
            <div className="p-2.5 absolute bg-white">
              <a href="/signin" className="px-8 py-3  bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VisualBlocks */}
      <section className="px-[4px] md:pb-16 md:px-6 ">
        <div className="flex justify-center items-center md:items-end space-x-4 h-96 overflow-hidden rounded-2xl">
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
            Where words create bonds and ideas inspire change.
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
            {rating.map((item, idx) => (
              <div key={idx} className="text-center border-[1px] border-gray-300 rounded-3xl py-8 px-2">
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
      <footer className="pt-16  px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A little corner of the web, built for you to shine.
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Our mission is simple: to give everyone a voice and build a community where stories, ideas, and creativity can flourish together.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="flex flex-col items-center justify-between max-w-6xl mx-auto gap-8">
                <p className="text-4xl font-bold text-gray-900">SoulPosts<span className="text-4xl text-green-400">.</span></p>
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-gray-600 hover:text-gray-800 ">Contact</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 ">Privacy Policy</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 ">Terms & Conditions</a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-9">
          <p className="text-gray-500">© 2025 SoulPosts. All rights reserved</p>
        </div>

      </footer>

    </div>
  );
}

export default Hometwo;