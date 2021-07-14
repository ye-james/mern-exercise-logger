import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { Search, Grid } from 'semantic-ui-react'


const initialState = {
  loading: false,
  results: [],
  value: ""
};

function searchReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const SearchExercises = ({setNewExercise}) => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  const exercises = useSelector(state => state.exercises.exercises)
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
    


  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);

    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(exercises, isMatch)
      });
    }, 300);
  }, []);

  const handleResultSelect = (e, data) => {
    dispatch({
      type: "UPDATE_SELECTION",
      selection: data.result.title
    })
    setNewExercise(data.result.title);
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={handleResultSelect}
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>
    </Grid>
  )


}

export default SearchExercises;