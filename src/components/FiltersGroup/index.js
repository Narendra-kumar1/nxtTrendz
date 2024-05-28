import './index.css'
import {Component} from 'react'

class FiltersGroup extends Component {
  state = {
    ratingsList: this.props.ratingsList,
    categoryOptions: this.props.categoryOptions,
    onFilter: this.props.onFilter,
    category: '',
    rating: '',
    search: '',
  }

  onCategoryClicked = item => {
    const {onFilter} = this.state
    this.setState({category: item.categoryId}, () => onFilter(this.state))
  }

  onCategory = item => (
    <li key={item.categoryId} className="item">
      <button
        className="filter-item"
        onClick={() => this.onCategoryClicked(item)}
      >
        <p> {item.name}</p>
      </button>
    </li>
  )

  onRatingClick = item => {
    const {onFilter} = this.state
    this.setState({rating: item.ratingId}, () => onFilter(this.state))
  }

  onRating = item => (
    <li key={item.ratingId}>
      <button className="list-item" onClick={() => this.onRatingClick(item)}>
        <img
          src={item.imageUrl}
          className="img"
          alt={`rating ${item.ratingId}`}
        />
        <p>&up</p>
      </button>
    </li>
  )

  onChange = event => {
    this.setState({search: event.target.value})
  }

  onKeyDown = event => {
    const {onFilter} = this.state
    if (event.key === 'Enter') {
      onFilter(this.state)
    }
  }

  onClicked = () => {
    const {onFilter} = this.state

    this.setState({rating: '', category: '', search: ''}, () =>
      onFilter(this.state),
    )
  }

  render() {
    const {ratingsList, categoryOptions, search} = this.state
    console.log(search)
    return (
      <div className="filters-group-container">
        <div>
          <div>
            <input
              type="search"
              className="input"
              placeholder="Search"
              value={search}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
            />
          </div>
          <h1 className="head">Category</h1>
          <ul className="list1">
            {categoryOptions.map(item => this.onCategory(item))}
          </ul>
          <h1 className="head">Rating</h1>
          <ul className="list1">
            {ratingsList.map(item => this.onRating(item))}
          </ul>
          <button className="button" onClick={this.onClicked}>
            Clear Filters
          </button>
        </div>
      </div>
    )
  }
}
export default FiltersGroup
