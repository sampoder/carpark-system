import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/pickups", fetcher, { refreshInterval: 1000 });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.map((child) => {
        return (
          <div
            className="card"
            style={{ display: "flex", alignItems: "center", marginBottom: '12px' }}
          >
            <img src={child.image} style={{height: '200px', marginRight: '24px', borderRadius: '8px'}} />
            <div>
              <h2 className="eyebrow">Now Calling</h2>
              <h1 className="title">{child.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
