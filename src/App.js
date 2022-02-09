import logo from './assets/logo.png';
import YoutubeLister from './components/YoutubeLister/YoutubeLister';
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>PuntoBlend</h1>
          <h4>Tu comunidad de 3D, Blender y OpenSource de habla hispana</h4>
          <p className="App-link-stack">
            <a
              className="App-link"
              href="https://discord.com/channels/513850800695541763/513850801186144259"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-discord"></i>
              {' '}Únete a nuestro Discord
            </a>
            <br/>
            <a
              className="App-link"
              href="https://www.youtube.com/channel/UCZWYy68KBClRoA4a3Pxp9bA/videos?view=0&sort=dd&flow=grid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
              {' '}Síguenos en Youtube
            </a>
          </p>
          <div style={{width:'45%', margin:'0 auto', justifyContent:'center'}}>
            <YoutubeEmbed className="navvid" embedId='YBR_za_mJAU'/> 
          </div>
          
        </nav>                    
      </header>
      <div>
        <YoutubeLister /> 
      </div>
      <footer style={{height:'80px',width:'100%',backgroundColor:'hsl(39, 100%, 50%)'}}>
        <h5 style={{color:'white'}}>Comunidad PuntoBlend - 2022</h5>
      </footer>
    </div>
  );
}

export default App;
