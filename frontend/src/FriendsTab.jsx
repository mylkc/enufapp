import { useState } from "react";
import { db } from "./lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import PublicProfile from "./PublicProfile";

export default function FriendsTab({ user }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [viewProfileId, setViewProfileId] = useState(null);

  const handleSearch = async () => {
    setError("");
    setResult(null);

    if (!search.trim()) return;

    try {
      const unameDoc = await getDoc(doc(db, "usernames", search.toLowerCase()));
      if (!unameDoc.exists()) {
        setError("No user found with that username.");
        return;
      }

      setResult({ uid: unameDoc.data().uid });
    } catch (err) {
      setError("Search error: " + err.message);
    }
  };

  if (viewProfileId) {
    return (
      <PublicProfile userId={viewProfileId} onBack={() => setViewProfileId(null)} />
    );
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-lg font-semibold mb-2">Find Friends</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 mb-3"
        placeholder="Search by username..."
      />

      <button
        onClick={handleSearch}
        className="w-full bg-white text-black py-2 rounded-xl mb-3"
      >
        Search
      </button>

      {error && <div className="text-red-400 text-sm">{error}</div>}

      {result && (
        <div
          onClick={() => setViewProfileId(result.uid)}
          className="p-3 bg-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-700"
        >
          View Profile
        </div>
      )}
    </div>
  );
}
