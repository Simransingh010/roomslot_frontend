export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
    {/* <!-- Top Section -->  */}
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12">
        {/* <!-- Left Column (Form) --> */}
                    <div className="md:w-1/2">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4">GET EVENT UPDATES</h3>
          <form className="flex flex-col sm:flex-row gap-2 mb-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded text-gray-800 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors">
              Subscribe
            </button>
          </form>
            <p className="text-gray-400 text-sm max-w-md">
            For more information, check out our 
            <a href="#" className="underline hover:text-white">Privacy Policy</a> and 
            <a href="#" className="underline hover:text-white">Terms of Service</a>. 
            You can unsubscribe at any time.
          </p>
        </div>
  
        {/* <!-- Right Column (Links) --> */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="font-medium">New York</p>
              <p className="font-medium">Online</p>
              <p className="font-medium">Apply to sponsor</p>
              <p className="font-medium">FAQ</p>
            </div>
            <div className="space-y-3">
              <p className="font-medium">Code of Conduct</p>
              <p className="font-medium">Conference Terms</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* <!-- Divider --> */}
    <hr className="border-gray-700" />
  
   
   
  </footer>
  );
}