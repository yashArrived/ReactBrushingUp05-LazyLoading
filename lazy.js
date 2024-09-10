import { createBrowserRouter, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

//lazy loading is a function that takes in a
//  callback function that takes in an import function that 
// takes in path of that component;


// LazyLoading or chunking Lazy loading is a web development technique that delays the loading of certain resources on a page until they are needed, such as when a user interacts with the page. This can improve page load times, reduce bandwidth usage, and improve the user experience. 
 
// Here are some benefits of lazy loading: 
 
// Faster page load times: Lazy loading reduces the length of the 
// critical rendering path, which can shorten the time it takes for 
// a page to load. 
 
// Reduced bandwidth usage: Lazy loading can reduce the amount of bandwidth 
// used by a website. 
 
// Improved user experience: Lazy loading can improve the user experience]
//  by making content immediately visible to users. 
 
// Better SEO performance: Lazy loading can improve a website's SEO performance. 
 
// Shrinking the initial size of a website: Lazy loading
//  can reduce the initial size of a website. 
 

const About = lazy(()=> import('./components/About'));

function App() {


  return (
    <>
      <div>
         App component  
      </div>
      <div>
      
        <Link to="/about" >About</Link>
        
      </div>
    
    </>
  )
}

//Suspense component is used to show a loading screen or a
//  jsx in that time duration when the component is loading ,
//  the fallback attribute takes in that jsx that aims to be rendered.

export default App
export const appRouter = createBrowserRouter([
    {
      path :"/",
        element : <App/>,
        errorElement  : <App/>
    },
    {
      path : "/about",
      element : 
      <Suspense fallback={<><h1>hii</h1></>}>
      <About/>
      </Suspense>
    },


  ]);
