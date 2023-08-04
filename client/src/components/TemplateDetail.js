export default function TemplateDetail({data}) {
    // Below variable when set to '' avoids making unnecessary image request to API
    const imageUrl = data ? `images/large/${data?.image}`: ''
    return (
        <>
            <img src={imageUrl} alt="Large Image" width="430" height="360" />
              <div className="details">
                <p><strong>Title</strong>{data?.title || ''}</p>
                <p><strong>Description</strong>{data?.description || ''}</p>
                <p><strong>Cost</strong>${data?.cost || ''}</p>
                <p><strong>ID #</strong>{data?.id || ''}</p>
                <p><strong>Thumbnail File</strong>{data?.thumbnail || ''}</p>
                <p><strong>Large Image File</strong>{data?.image || ''}</p>
              </div>
        </>
    )
}