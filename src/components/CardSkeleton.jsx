import React from 'react'
import ContentLoader from "react-content-loader"

const CardSkeleton = () => (
  <ContentLoader 
    speed={3}
    width={240}
    height={434}
    viewBox="0 0 240 434"
    backgroundColor="#f6f6f6"
    foregroundColor="#e3e3e3"
  >
    <rect x="10" y="4" rx="5" ry="5" width="220" height="198" /> 
    <rect x="10" y="210" rx="5" ry="5" width="150" height="20" /> 
    <rect x="10" y="377" rx="5" ry="5" width="220" height="30" /> 
    <rect x="10" y="240" rx="5" ry="5" width="215" height="20" /> 
    <rect x="10" y="300" rx="5" ry="5" width="101" height="30" /> 
    <rect x="10" y="340" rx="5" ry="5" width="121" height="30" />
  </ContentLoader>
)

export default CardSkeleton