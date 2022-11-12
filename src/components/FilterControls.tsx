import { Form } from "react-bootstrap";
import { FirstLetter, Sort } from "../types/SortsFilters";

interface Props {
  filterArtist: FirstLetter;
  filterSong: FirstLetter;
  sort: Sort;
  setFilterArtist: (filterArtist: FirstLetter) => void;
  setFilterSong: (filterSong: FirstLetter) => void;
  setSort: (sort: Sort) => void;
}

function FilterControls({
  filterArtist,
  filterSong,
  sort,
  setFilterArtist,
  setFilterSong,
  setSort,
}: Props) {
  return (
    <div className="text-center">
      {/* <h3>Filter</h3> */}
      <div className="d-flex justify-content-center">
        <div className="me-3">
          <h5>Filter by Artist</h5>
          <Form.Select
            aria-label="Filter by artist"
            value={filterArtist}
            onChange={(e) => setFilterArtist(e.target.value)}
          >
            <option value="all">All</option>
            <option value="A-F">A-F</option>
            <option value="G-L">G-L</option>
            <option value="M-R">M-R</option>
            <option value="S-Z">S-Z</option>
          </Form.Select>
        </div>
        <div className="ms-3">
          <h5>Filter by Song</h5>
          <Form.Select
            aria-label="Filter by song"
            value={filterSong}
            onChange={(e) => setFilterSong(e.target.value)}
          >
            <option value="all">All</option>
            <option value="A-F">A-F</option>
            <option value="G-L">G-L</option>
            <option value="M-R">M-R</option>
            <option value="S-Z">S-Z</option>
          </Form.Select>
        </div>
        <div className="ms-3">
          <h5>Sort</h5>
          <Form.Select
            aria-label="Sort by"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="alphabetical by artist">
              Alphabetical by artist
            </option>
            <option value="alphabetical by song">Alphabetical by song</option>
            <option value="listeners">Listeners</option>
            <option value="play count">Play count</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
