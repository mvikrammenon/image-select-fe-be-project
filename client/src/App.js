import { useState, useContext, useEffect } from 'react'
import { TemplateContext } from './context/TemplateContext'
import Thumbnail from './components/Thumbnail'
import TemplateDetail from './components/TemplateDetail'
import './App.css';

const VISIBLE_THUMBNAILS_COUNT = 4

function getThumbnails(data = [], thumbnailPage = 0) {
  if (thumbnailPage < 0 || thumbnailPage > VISIBLE_THUMBNAILS_COUNT - 1) {
    console.error('Invalid thumbnail scroll value', thumbnailPage)
    return
  }
  const start = VISIBLE_THUMBNAILS_COUNT * thumbnailPage  //4*0, 4*1, 4*2
  const end = start + VISIBLE_THUMBNAILS_COUNT // 0+3, 4+3
  const slicedTemplate = data.slice(start, end)
  console.log('getThumbnails', 'thumbnailPage: ', thumbnailPage, 'slicedTemplate', slicedTemplate)
  return slicedTemplate
}

function App() {
  const { data } = useContext(TemplateContext)
  const [thumbnailPage, setThumbnailPage] = useState(0)
  const [thumbnailData, setThumbnailData] = useState([])
  const [selectedThumbnailId, setselectedThumbnailId] = useState(0)
  const invalidPreviousCount = thumbnailPage === 0
  const invalidNextCount = thumbnailPage === Math.floor(data.length / VISIBLE_THUMBNAILS_COUNT)

  useEffect(() => {
    const thumbnailData = getThumbnails(data, thumbnailPage)
    setThumbnailData(thumbnailData)
  }, [thumbnailPage, data])

  useEffect(() => {
    console.log('useEffect data[0]?.id', data[0]?.id)
    setselectedThumbnailId(data[0]?.id)
  }, [data])

  const handleNext = () => {
    if (invalidNextCount) {
      console.error('Invalid Next click')
      return
    }
    setThumbnailPage(thumbnailPage + 1)
  }

  const handlePrevious = () => {
    if (invalidPreviousCount) {
      console.error('Invalid Previous click')
      return
    }
    setThumbnailPage(thumbnailPage - 1)
  }

  const handleSelectThumbnail = (id) => {
    setselectedThumbnailId(id);
  }

  const getTemplateDetailData = () => {
    return data.find((i) => i.id === selectedThumbnailId)
  }

  return (
    <>
      <div id="container">
        <header>
          Code Development Project
        </header>
        <div id="main" role="main">
          <div id="large">
            <div className="group">
              {/* Key change will trigger getTemplateDetailData call*/}
              <TemplateDetail
                key={`template-detail-${setselectedThumbnailId}`}
                data={getTemplateDetailData()}
              />
            </div>
          </div>
          <div className="thumbnails">
            <div className="group">
              {thumbnailData.length && thumbnailData.map((i) =>
                <Thumbnail 
                  key={i.id}
                  id={i.id}
                  fileName={i.thumbnail}
                  clickHandler={handleSelectThumbnail}
                  isActive={selectedThumbnailId === i.id}
                />
              )}
              <span className={`previous ${invalidPreviousCount && 'disabled'}`} title="Previous" onClick={handlePrevious}>Previous</span>
              <a href="#" className={`next ${invalidNextCount && 'disabled'}`} title="Next" onClick={handleNext}>Next</a>
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
