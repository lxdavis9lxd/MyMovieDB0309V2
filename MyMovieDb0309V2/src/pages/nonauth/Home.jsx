import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";
import apiClient from "@/utils/api";
import { useState, useEffect } from "react";
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    apiClient.getAll("/movie/popular").then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>Release Date: {movie.release_date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{movie.overview}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/movie/${movie.id}`} className="text-blue-400 hover:underline">
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
  );
}

export default Home;