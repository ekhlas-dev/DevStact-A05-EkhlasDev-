
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className=" w-[90%] mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-purple-500 text-[9px] font-bold text-white">
                DS
              </div>

              <span className="text-[14px] font-bold text-gray-800">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="mt-3 max-w-[300px] text-[10px] leading-[1.5] text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4 text-[9px] font-medium text-slate-600">
              <a href="#" className="transition hover:text-purple-500">
                GitHub
              </a>
              <a href="#" className="transition hover:text-purple-500">
                Twitter
              </a>
              <a href="#" className="transition hover:text-purple-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[10px] font-bold uppercase text-gray-800">
              Product
            </h3>

            <div className="mt-3 space-y-2 text-[9px] text-slate-400">
              <a href="#" className="block transition hover:text-gray-700">
                Home
              </a>
              <a href="#" className="block transition hover:text-gray-700">
                Technologies
              </a>
              <a href="#" className="block transition hover:text-gray-700">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase text-gray-800">
              Company
            </h3>

            <div className="mt-3 space-y-2 text-[9px] text-slate-400">
              <a href="#" className="block transition hover:text-gray-700">
                About
              </a>
              <a href="#" className="block transition hover:text-gray-700">
                Contact
              </a>
              <a href="#" className="block transition hover:text-gray-700">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase text-gray-800">
              Legal
            </h3>

            <div className="mt-3 space-y-2 text-[9px] text-slate-400">
              <a href="#" className="block transition hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="block transition hover:text-gray-700">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-gray-100 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-slate-300">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[9px] text-slate-300">
            <a href="#" className="transition hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="transition hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
