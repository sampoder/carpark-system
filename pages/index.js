import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function compare(a, b) {
  if (a.time < b.time) {
    return 1;
  }
  if (a.time > b.time) {
    return -1;
  }
  return 0;
}

export default function Home() {
  const { data, error } = useSWR("/api/pickups", fetcher, {
    refreshInterval: 1000,
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.sort(compare).map((child, index) => {
        return (
          <div
            className={"card" + (index == 0 ? " first" : "")}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <div>
              <h2 className="eyebrow">Proceed To The Pickup Point:</h2>
              <h1 className="title">{child.name}</h1>
              <h3 style={{marginTop: '12px'}}>
                {child.class} ~ {child.room} ~ {" "}
                {(3 -Math.floor(
                  Math.abs(new Date() - new Date(child.time)) / 1000 / 60
                )) > 0 ? (
                  <>
                    ETA{" "}
                    {3 -
                      Math.floor(
                        Math.abs(new Date() - new Date(child.time)) / 1000 / 60
                      )}{" "}
                    minutes{" "}
                  </>
                ) : (
                  <>Arriving!</>
                )}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
