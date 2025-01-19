import SearchProductsByName from "@/sanity/lib/products/SearchProductsByName"

export default async function SearchPage({ searchParams, }: { searchParams: { query: string } }) {
  const { query } = await searchParams;
  const products = await SearchProductsByName(query)

  return (
    <div>
      <h1>Search Page</h1>
      <p>Search results for: {query}</p>

    </div>
  );
}



