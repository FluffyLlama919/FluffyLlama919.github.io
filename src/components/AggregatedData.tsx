import Song from "../types/Song";

interface Props {
  songs: Song[];
}

function fmtNum(num: string) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function AggregatedData({ songs }: Props) {
  return (
    <div className="text-muted">
      <h6>Aggregated Data</h6>
      <p>
        <ul>
          <li>Number of songs: {songs.length}</li>
          <li>
            Total Play Count:{" "}
            {fmtNum(
              songs
                .reduce((acc, song) => acc + parseInt(song.playcount), 0)
                .toString()
            )}
          </li>
          <li>
            Average Play Count:{" "}
            {fmtNum(
              (
                songs.reduce((acc, song) => acc + parseInt(song.playcount), 0) /
                (songs.length || 1)
              ).toFixed(2)
            )}
          </li>
        </ul>
      </p>
    </div>
  );
}

export default AggregatedData;
