import { memo } from "react";
import { Button, Input } from "@mui/material";
import "./index.css";

const Filters = memo((
    {
    query,
    showOnlyDone,
    onQueryChange,
    onShowOnlyDoneChange
}) => {
    return (
        <div className='filters'>

            <Input
            placeholder='Searching...'
            value={query}
            className="filters-search"
            onChange={(e) => onQueryChange(e.target.value)}
            />
            <Button
            onClick={() => onQueryChange('')}
            className='filters-button'
            variant={showOnlyDone ? "contained" : "outlined"} 
            style={{marginRight: '50px'}}
            >
                Clear
            </Button>
            <Button
            onClick={() => onQueryChange('')}
            variant={showOnlyDone ? "outlined" : "contained"}
            className='filters-button' 
            >
                All
            </Button>
        </div>
    )
})

export default Filters