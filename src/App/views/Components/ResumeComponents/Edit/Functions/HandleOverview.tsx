import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
  import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    GridToolbarContainer,
  } from '@mui/x-data-grid-pro'

import { API, graphqlOperation } from 'aws-amplify'
//import { getResume } from '../../../../../../graphql/queries'
//import { createResume, updateResume } from '../../../../../../graphql/mutations'
import { randomId } from '@mui/x-data-grid-generator'
import AddIcon from '@mui/icons-material/Add'
import { Editor } from 'react-draft-wysiwyg'

export const initialRows: GridRowsProp = [
  {
    id: 0,
    Accomplishment: "",
  }
]

export interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void
}

export function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props

  const handleClick = () => {
    const id = randomId()
    setRows((oldRows) => [...oldRows, { id, Accomplishment: '', isNew: true }])
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }))
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  )
}