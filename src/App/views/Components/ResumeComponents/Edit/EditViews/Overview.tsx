import { useState, useEffect } from 'react'
import { API, Cache, graphqlOperation } from 'aws-amplify'
import Box from '@mui/material/Box'
import { Overview, OverviewTemplate } from '../../../../../models/Service/ResumeModel'
import { convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../Style/Overview.css'
import draftToMarkdown from 'draftjs-to-markdown'
//import { updateOverview } from '../../../../../../graphql/mutations'
import showdown from 'showdown'

export default function EditOverview() {
  const [overview,setOverview] = useState<any>(OverviewTemplate)
  const [lastSavedOverview, setLastSavedOverview] = useState<Overview>(OverviewTemplate)
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [convertedContent, setConvertedContent] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {

    let cachedResume = Cache.getItem('resume')
    let {Resume,createdAt,overviewResumeId,owner,updatedAt,...OverviewData} = cachedResume.temporaryResume.data.getResume.Overview
    setOverview(OverviewData)
    setLastSavedOverview(OverviewData) 
    let Heartbeat = setInterval(()=>{
      saveOverview()
    },5000)
    return()=> {
      clearInterval(Heartbeat)
    }
  }, [editorState])

  function saveMarkdownToHook():any{
    {setEditorState(editorState)}
    setOverview({...overview, Summary: {id: "", Summary: editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}}) //using markdown to save space in datastore
    let converter = new showdown.Converter()
    
    //console.log({...overview, Summary: editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}, overview)
  }

  const saveOverview = async() =>{
    if(overview.Summary === lastSavedOverview.Summary){
      console.log("Skipped, equal")
    }
    else{  
      setLoading(true)
      let overviewUpdate: any = {}
      let test = Cache.getItem('resume')
      console.log(overview,lastSavedOverview,test)
      try{
          console.log("Input: ", { input: overview } )
          overviewUpdate = {}//await API.graphql(graphqlOperation(updateOverview, { input: overview } ))
          setLastSavedOverview(overview)
          setLoading(false)
      } catch(error){
          console.error("Error with overview update: ", error, "Attempted request: ", {...overview})
      }
    }
  }
  
  return (
    <Box>
      <Editor
          editorState={editorState} 
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={setEditorState}
          onChange={()=>saveMarkdownToHook()}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
          placeholder={overview.Summary.Summary}

        />

      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        placeholder={overview.Summary.Summary}
      />

        <textarea
          disabled
          value={editorState && JSON.stringify(convertToRaw(editorState.getCurrentContent()))}
        />
    </Box>
  )
}