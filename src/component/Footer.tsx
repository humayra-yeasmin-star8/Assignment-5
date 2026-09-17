import logo from "../logo-text.png";
const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-16 text-gray-500 text-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">

         
          <div className="md:col-span-2">

            <div className="flex items-center justify-center md:justify-start gap-2">
    
              <img src={logo}/>

            </div>

            <p className="text-gray-400 text-xs max-w-sm mx-auto md:mx-0 mt-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-4 text-xs">
              <a href="" className="hover:text-pink-600">
                GitHub
              </a>

              <span>•</span>

              <a href="" className="hover:text-pink-600">
                Twitter
              </a>

              <span>•</span>

              <a href="" className="hover:text-pink-600">
                LinkedIn
              </a>
            </div>

          </div>


    
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Product
            </h3>

            <ul className="mt-3 space-y-2 text-xs text-gray-500">

              <li>
                <a href="" className="hover:text-gray-800">
                  Home
                </a>
              </li>

              <li>
                <a href="" className="hover:text-gray-800">
                  Technologies
                </a>
              </li>

              <li>
                <a href="" className="hover:text-gray-800">
                  Projects
                </a>
              </li>

            </ul>
          </div>


          
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Company
            </h3>

            <ul className="mt-3 space-y-2 text-xs text-gray-500">

              <li>
                <a href="" className="hover:text-gray-800">
                  About
                </a>
              </li>

              <li>
                <a href="" className="hover:text-gray-800">
                  Contact
                </a>
              </li>

              <li>
                <a href="" className="hover:text-gray-800">
                  Careers
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Legal
            </h3>

            <ul className="mt-3 space-y-2 text-xs text-gray-500">

              <li>
                <a href="#privacy" className="hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="" className="hover:text-gray-800">
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4">

            <a href="" className="hover:text-gray-600">
              Privacy
            </a>

            <a href="" className="hover:text-gray-600">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

