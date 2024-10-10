import { FETCH_DATA_SUCCESS } from '../actions/dataActions';

const initialState = {
  projectName: '',
  outputName: '',
  lastRun: '',
  tableHeaders: [],
  tableData: [],
  workflowSteps: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        projectName: action.payload.project_name,
        outputName: action.payload.output_name,
        lastRun: action.payload.last_run,
        tableHeaders: action.payload.table_headers,
        tableData: action.payload.table_data,
        workflowSteps: action.payload.workflow_steps,
      };
    default:
      return state;
  }
}
