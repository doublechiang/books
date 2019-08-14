require 'sinatra'
require 'movie'

get('/movies') do
  @movies = []
  movie = Movie.new
  movie.title = "Jaws"
  @movies << movie
  movie = Movie.new
  movie.title = "Alien"
  @movies << movie
  movie = Movie.new
  movie.title = "Terminator 2"
  @movies << movie

  erb :index
end

get('/movies/new') do
  erb :new
end
