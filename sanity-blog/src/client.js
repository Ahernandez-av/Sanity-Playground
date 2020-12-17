//connects sanity with react
import sanityClient from '@sanity/client'

export default sanityClient({
  //this information can be found inside the sanity folder[myfirstsanityblog] in the sanity.json 
  projectId: '6a6oa1k3',
  dataset: 'production'
})