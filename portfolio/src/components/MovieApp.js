// SINGLE PROJECT PAGE - Movie App //


function MovieApp() {
    return (
       <main className="movie-app-main">
           <h1>React Movie App</h1>
           <div>
               <button className="accordion"><h2>Planning</h2></button>
               <div className="info">
                   <p>Stuff about planning process about</p>
               </div>
           </div>
           <div>
               <button className="accordion" ><h2>Development</h2></button>
               <div className="info">
                   <p>Stuff about Development process</p>
               </div>
           </div>
           <div>
               <button className="accordion" ><h2>Reflection</h2></button>
               <div className="info">
                   <p>Stuff about project reflection and challenges overcome process</p>
               </div>
           </div>
       </main>
    )
}
export default MovieApp;