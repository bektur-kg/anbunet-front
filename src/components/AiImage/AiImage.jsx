import React from 'react'

function AiImage(prompt) {
    const {
        data: image,
        isLoading,
        isError,
        refetch,
      } = postApi.useGetAiQuery(prompt);
    
    
    return (
        <img src={image.data[0].asset_url} alt="" />
    )
}

export default AiImage
