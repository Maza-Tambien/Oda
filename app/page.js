export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl w-full text-center bg-white shadow-lg p-6 rounded-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Invest in Saving Heritage Buildings
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Own a piece of history and earn returns by preserving iconic buildings worldwide.
        </p>
        <input
          type="email"
          placeholder="Enter your email to get early access"
          className="w-full max-w-md p-3 border rounded-lg"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 mt-4 rounded-lg">
          Get Early Access
        </button>
      </div>
    </main>
  );
}
