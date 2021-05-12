

import './TodoFilter.scss'

export const TodoFilter = ({ dates, searchStr, handleChange }) => {
    return (
        <div>
            <form className="todo-filter" onSubmit={(ev) => ev.preventDefault()}>
                <div className="desc-wrapper">
                    <label htmlFor="search">Search: </label>
                    <input placeholder="By description" type="text" id="searchStr" name="searchStr" value={searchStr} onChange={handleChange} />
                </div>
                <div className="date-wrapper">
                    <label htmlFor="date">By Date: </label>
                    <select onChange={handleChange} defaultValue="" type="number" name="byDate">
                        <option value="" label="All"></option>
                        {dates && dates.map((date, idx) => <option key={idx} value={date} label={new Date(date).toLocaleString()}></option>)}
                    </select>
                </div>
            </form>
        </div>
    )
}

