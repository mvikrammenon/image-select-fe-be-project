import { useState, useContext, useEffect } from 'react'
import { TemplateContext } from './context/TemplateContext'
import { Header, Footer, Thumbnail, TemplateDetail, AddTemplateForm } from './components'
import './App.css';

const VISIBLE_THUMBNAILS_COUNT = 4

function App() {
  const { data, setData } = useContext(TemplateContext)
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

  /**
   * Retrieves the template detail data for the selected thumbnail ID from the data array.
   * @returns {Object} The template detail data for the selected thumbnail, or {} if not found.
   */
  const getTemplateDetailData = () => {
    if(!data || !data.length || !selectedThumbnailId) return {}
    return data.find((i) => i.id === selectedThumbnailId)
  }

  /**
   * Retrieves a portion of thumbnails from data array based on thumbnailPage index.
   * @param {Array} data - An array containing all the thumbnail items.
   * @param {number} thumbnailPage - Index of the thumbnail page to retrieve.
   * @returns {Array} An array of thumbnail items representing the current page of thumbnails.
   */
  const getThumbnails = (data = [], thumbnailPage = 0) => {
    if (thumbnailPage < 0 || thumbnailPage > VISIBLE_THUMBNAILS_COUNT - 1) {
      console.error('Invalid thumbnail scroll value', thumbnailPage)
      return
    }
    const start = VISIBLE_THUMBNAILS_COUNT * thumbnailPage  //4*0, 4*1, 4*2
    const end = start + VISIBLE_THUMBNAILS_COUNT // 0+3, 4+3
    return data.slice(start, end)
  }

  return (
    <>
      <div id="container">
        <Header />
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
              {thumbnailData?.length && thumbnailData.map((i) =>
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
        <Footer />
        <AddTemplateForm setTemplateData={setData} templateData={data} />
      </div>
    </>
  );
}

export default App;
