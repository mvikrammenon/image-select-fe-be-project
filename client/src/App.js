import { useState, useContext } from 'react'
import { TemplateContext } from './context/TemplateContext'
import './App.css';

function App() {
  const { data } = useContext(TemplateContext);
  console.log('data', data);
  return (
    <>
      <div id="container">
        <header>
          Code Development Project
        </header>
        <div id="main" role="main">
          <div id="large">
            <div className="group">
              <img src="images/large/7112-b.jpg" alt="Large Image" width="430" height="360" />
              <div className="details">
                <p><strong>Title</strong> My Great Template</p>
                <p><strong>Description</strong> This is a template suited for a professional business site. Original layered Photoshop .psd is included.</p>
                <p><strong>Cost</strong> $45</p>
                <p><strong>ID #</strong> 7112</p>
                <p><strong>Thumbnail File</strong> 7112-m.jpg</p>
                <p><strong>Large Image File</strong> 7112-b.jpg</p>
              </div>
            </div>
          </div>
          <div className="thumbnails">
            <div className="group">
              <a href="#" title="7111">
                <img src="images/thumbnails/7111-m.jpg" alt="7111-m" width="145" height="121" />
                <span>7111</span>
              </a>
              <a href="#" className="active" title="7112">
                <img src="images/thumbnails/7112-m.jpg" alt="7111-m" width="145" height="121" />
                <span>7112</span>
              </a>
              <a href="#" title="7118">
                <img src="images/thumbnails/7118-m.jpg" alt="7111-m" width="145" height="121" />
                <span>7118</span>
              </a>
              <a href="#" title="7124">
                <img src="images/thumbnails/7124-m.jpg" alt="7111-m" width="145" height="121" />
                <span>7124</span>
              </a>
              <span className="previous disabled" title="Previous">Previous</span>
              <a href="#" className="next" title="Next">Next</a>
            </div>
          </div>
        </div>
        <footer>
          <a href="instructions.pdf">Download PDF Instructions</a>
        </footer>
      </div>
    </>
  );
}

export default App;
