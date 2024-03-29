function PageNotFound() {
   return (
      <main className="h-screen flex items-center justify-center z-50 relative">
         <div className="bg-gray-100 border border-gray-200 rounded-md p-12 max-w-screen-lg mx-auto text-center">
            <header className="mb-8">
               The page you are looking for could not be found 😢
            </header>
         </div>
      </main>
   );
}

export default PageNotFound;
